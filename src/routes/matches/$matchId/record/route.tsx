import { useCallback, useEffect, useState } from 'react';

import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useParams } from '@tanstack/react-router';
import { useSnackbar } from 'notistack';

import { useCreateOrUpdateMatchMemoMutation } from '@/apis/mutations';
import { matchRecordQuery, teamQuery } from '@/apis/queries';
import { getWebSocketApi } from '@/apis/websockets';
import {
  GameScoreArea,
  MatchLogList,
  MatchRecordSimpleMemo,
  MatchSchedule,
  PlayerStatCounterGrid,
  SubstitutionPlayerList,
  TeamStatCompareCounterList,
  TeamStatCounterGrid,
  ToggleableStartingPlayers,
} from '@/components';
import { MatchEventType } from '@/constants';
import { queryClient } from '@/react-query-provider';
import { commonPaper } from '@/styles/paper.css';
import { debounce } from '@/utils';

import { MatchRecordLayout } from './-components';
import { MatchTimeControllerAdapter } from './-components/MatchRecordLayout/MatchTimeControllerAdapter';

export const Route = createFileRoute('/matches/$matchId/record')({
  component: MatchRecordPage,
  loader: ({ params }) => {
    const matchId = Number(params.matchId);

    return Promise.all([
      queryClient.ensureQueryData(matchRecordQuery.infoQuery(matchId)),
      queryClient.ensureQueryData(matchRecordQuery.scoreQuery(matchId)),
      queryClient.ensureQueryData(matchRecordQuery.eventsQuery(matchId)),
      queryClient.ensureQueryData(matchRecordQuery.playersQuery(matchId)),
      queryClient.ensureQueryData(matchRecordQuery.memoQuery(matchId)),
    ]);
  },
});

// TO DO: 예시용 스타일로, 추후 제거 필요
const s = (height: number | string) => ({
  height,
  backgroundColor: '#fff',
  borderRadius: 10,
});

function MatchRecordPage() {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const { matchId: _matchId } = useParams({ from: '/matches/$matchId/record' });
  const matchId = Number(_matchId);
  const wsApi = getWebSocketApi();

  const { data: matchMemo } = useSuspenseQuery(
    matchRecordQuery.memoQuery(matchId),
  );
  const { data: matchInfo } = useSuspenseQuery(
    matchRecordQuery.infoQuery(matchId),
  );
  const { data: matchScore } = useSuspenseQuery(
    matchRecordQuery.scoreQuery(matchId),
  );
  const { data: matchEvents } = useSuspenseQuery(
    matchRecordQuery.eventsQuery(matchId),
  );
  const { data: matchPlayers } = useSuspenseQuery(
    matchRecordQuery.playersQuery(matchId),
  );
  // FIXME: 얘내는 순차 로딩을 하게 되는데...
  const { data: homeTeam } = useSuspenseQuery(
    teamQuery.byIdQuery(matchInfo.data.homeTeamId),
  );
  const { data: awayTeam } = useSuspenseQuery(
    teamQuery.byIdQuery(matchInfo.data.awayTeamId),
  );

  const { mutateAsync: updateMatchMemo } =
    useCreateOrUpdateMatchMemoMutation(matchId);

  const [memo, setMemo] = useState(matchMemo.data.memo);
  const debouncedUpdateMemo = useCallback(debounce(updateMatchMemo, 500), [
    updateMatchMemo,
  ]);
  const updateMemo = (newMemo: string) => {
    setMemo(newMemo);
    debouncedUpdateMemo(newMemo);
  };

  useEffect(() => {
    const unsubErrorChannel = wsApi.subscribe('error', [], {
      error: error => {
        enqueueSnackbar(`[match error] ${error.message}`, {
          variant: 'error',
        });
      },
    });

    const unsubMatchChannel = wsApi.subscribe('match', [matchId], {
      event: event => {
        const {
          id,
          elapsedMinutes,
          teamId,
          teamName,
          userId,
          userName,
          eventLog,
        } = event;
        console.log('match websocket event', event);
        enqueueSnackbar(
          `[id:${id}] [${elapsedMinutes}"] [teamId:${teamId}] [userId:${userId}] ${teamName} ${userName} ${eventLog}`,
          {
            variant: 'info',
          },
        );
        queryClient.invalidateQueries({
          queryKey: matchRecordQuery.queryKeys.matchById(matchId), // 일단은 전체 갱신하고 추후 최적화
        });
      },
    });

    return () => {
      unsubErrorChannel();
      unsubMatchChannel();
    };
  }, [matchId, wsApi, enqueueSnackbar, queryClient]);

  return (
    <MatchRecordLayout
      team1Color={homeTeam.data.teamColor}
      team2Color={awayTeam.data.teamColor}
      team1={
        <div
          className={commonPaper}
          style={{
            ...s('auto'),
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <ToggleableStartingPlayers
            team={homeTeam.data}
            players={matchPlayers.data.homeTeam.starters}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <SubstitutionPlayerList
              team={homeTeam.data}
              players={matchPlayers.data.homeTeam.substitutes}
            />
            <TeamStatCounterGrid stats={matchScore.data.homeScore} />
          </div>
        </div>
      }
      team2={
        <div
          className={commonPaper}
          style={{
            ...s('auto'),
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          <ToggleableStartingPlayers
            team={awayTeam.data}
            players={matchPlayers.data.awayTeam.starters}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <SubstitutionPlayerList
              team={awayTeam.data}
              players={matchPlayers.data.awayTeam.substitutes}
            />
            <TeamStatCounterGrid stats={matchScore.data.awayScore} />
          </div>
        </div>
      }
      teamStats={
        <div className={commonPaper} style={s(560)}>
          <GameScoreArea
            scores={matchScore.data}
            homeTeam={homeTeam.data}
            awayTeam={awayTeam.data}
          />
          <TeamStatCompareCounterList
            homeTeamStat={matchScore.data.homeScore}
            awayTeamStat={matchScore.data.awayScore}
            maxValue={30}
          />
        </div>
      }
      selectedPlayer={
        <div style={s(302)}>
          <PlayerStatCounterGrid
            onGoal={(playerId: number) => {
              wsApi.send('recordPlayerStat', [matchId], {
                token: playerId.toString(),
                data: {
                  userId: playerId,
                  eventType: MatchEventType.GOAL,
                },
              });
            }}
            onAssist={(playerId: number) => {
              wsApi.send('recordPlayerStat', [matchId], {
                token: playerId.toString(),
                data: {
                  userId: playerId,
                  eventType: MatchEventType.ASSIST,
                },
              });
            }}
            onYellowCard={(playerId: number) => {
              wsApi.send('recordPlayerStat', [matchId], {
                token: playerId.toString(),
                data: {
                  userId: playerId,
                  eventType: MatchEventType.YELLOW_CARD,
                },
              });
            }}
            onRedCard={(playerId: number) => {
              wsApi.send('recordPlayerStat', [matchId], {
                token: playerId.toString(),
                data: {
                  userId: playerId,
                  eventType: MatchEventType.RED_CARD,
                },
              });
            }}
          />
        </div>
      }
      timer={
        <div style={s(116)}>
          <MatchTimeControllerAdapter matchId={matchId} />
        </div>
      }
      info={
        <div style={s(284)}>
          <MatchSchedule matchInfo={matchInfo.data} />
        </div>
      }
      log={
        <div style={s(228)}>
          <MatchLogList
            teams={{
              home: homeTeam.data,
              away: awayTeam.data,
            }}
            logs={matchEvents.data}
          />
        </div>
      }
      memo={
        <div style={s(204)}>
          {/* TODO: debounce 이후 update 연동 필요 */}
          <MatchRecordSimpleMemo value={memo} onChange={updateMemo} />
        </div>
      }
    />
  );
}
