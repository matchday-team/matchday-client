import { useCallback, useEffect, useState } from 'react';

import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useParams } from '@tanstack/react-router';
import { useSnackbar } from 'notistack';

import { MatchUserResponse, TeamGroupedUsers } from '@/apis/models';
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
import { usePageTitle } from '@/hooks';
import { queryClient } from '@/react-query-provider';
import { useSelectedPlayerStore } from '@/stores';
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

const dividePlayers = ({ starters, substitutes }: TeamGroupedUsers) => {
  const result = {
    starters: [] as MatchUserResponse[],
    substitutes: [] as MatchUserResponse[],
  };

  starters.forEach(player => {
    const targetArray =
      player.subOut || player.sentOff ? result.substitutes : result.starters;
    targetArray.push(player);
  });

  substitutes.forEach(player => {
    const targetArray = player.subIn ? result.starters : result.substitutes;
    targetArray.push(player);
  });

  result.starters.sort((a, b) => (b.matchGrid ?? 0) - (a.matchGrid ?? 0));

  result.substitutes.sort((a, b) => {
    const aDisabled = a.subOut || a.sentOff;
    const bDisabled = b.subOut || b.sentOff;

    // 둘 다 disabled거나 아닐 때는 matchGrid 순으로 정렬
    if (aDisabled === bDisabled) {
      return (b.matchGrid ?? 0) - (a.matchGrid ?? 0);
    } else if (aDisabled && !bDisabled) {
      return 1; // a만 disabled면 a를 뒤로
    } else {
      return -1; // b만 disabled면 b를 뒤로
    }
  });

  return result;
};

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
  const { starters: homeTeamStarters, substitutes: homeTeamSubstitutes } =
    dividePlayers(matchPlayers.data.homeTeam);
  const { starters: awayTeamStarters, substitutes: awayTeamSubstitutes } =
    dividePlayers(matchPlayers.data.awayTeam);

  // FIXME: 얘내는 순차 로딩을 하게 되는데...
  const { data: homeTeam } = useSuspenseQuery(
    teamQuery.byIdQuery(matchInfo.data.homeTeamId),
  );
  const { data: awayTeam } = useSuspenseQuery(
    teamQuery.byIdQuery(matchInfo.data.awayTeamId),
  );

  const { mutateAsync: updateMatchMemo } =
    useCreateOrUpdateMatchMemoMutation(matchId);

  const [memo, setMemo] = useState(matchMemo.data.memo ?? ''); // NOTE: 기본 값이 `null`이어서 빈 문자열로 초기화 필요
  const debouncedUpdateMemo = useCallback(debounce(updateMatchMemo, 500), [
    updateMatchMemo,
  ]);
  const updateMemo = (newMemo: string) => {
    setMemo(newMemo);
    debouncedUpdateMemo(newMemo);
  };
  useEffect(() => {
    setMemo(matchMemo.data.memo ?? '');
  }, [matchMemo]);

  const handleSwap = (inPlayerId: number, outPlayerId: number) => {
    wsApi.send('recordPlayerExchange', [matchId], {
      fromMatchUserId: outPlayerId,
      toMatchUserId: inPlayerId,
    });
  };

  // FIXME: 생략된 prop: isIncrement: boolean - 현재는 항상 증가만 가능
  const handleTeamStatChange = (matchEvent: MatchEventType, teamId: number) => {
    wsApi.send('recordTeamStat', [matchId, teamId], {
      eventType: matchEvent,
    });
  };

  const handlePlayerStatChange = (
    playerId: number,
    matchEvent: MatchEventType,
  ) => {
    wsApi.send('recordPlayerStat', [matchId], {
      matchUserId: playerId,
      eventType: matchEvent,
    });
  };

  usePageTitle(matchInfo.data.title);

  const unselectPlayer = useSelectedPlayerStore(state => state.unselectPlayer);
  useEffect(() => {
    unselectPlayer();
  }, []);

  useEffect(() => {
    const unsubErrorChannel = wsApi.subscribe('error', [], {
      error: error => {
        enqueueSnackbar(`[match error] ${error.message}`, {
          variant: 'error',
        });
      },
    });

    const unsubMatchMemoChannel = wsApi.subscribe('matchmemo', [matchId], {
      memo: newMemo => {
        enqueueSnackbar(`[match memo] ${newMemo}`, {
          variant: 'info',
        });
        queryClient.setQueryData(
          matchRecordQuery.queryKeys.matchMemo(matchId),
          {
            data: {
              memo: newMemo,
            },
          },
        );
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
      unsubMatchMemoChannel();
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
            players={homeTeamStarters}
            onSwap={handleSwap}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <SubstitutionPlayerList
              team={homeTeam.data}
              players={homeTeamSubstitutes}
              onSwap={handleSwap}
            />
            <TeamStatCounterGrid
              team={homeTeam.data}
              stats={matchScore.data.homeScore}
              onStatChange={handleTeamStatChange}
            />
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
            players={awayTeamStarters}
            onSwap={handleSwap}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <SubstitutionPlayerList
              team={awayTeam.data}
              players={awayTeamSubstitutes}
              onSwap={handleSwap}
            />
            <TeamStatCounterGrid
              team={awayTeam.data}
              stats={matchScore.data.awayScore}
              onStatChange={handleTeamStatChange}
            />
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
          <PlayerStatCounterGrid onStatChange={handlePlayerStatChange} />
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
