import { useEffect, useState } from 'react';

import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useParams } from '@tanstack/react-router';
import { useSnackbar } from 'notistack';

import { matchRecordQuery, teamQuery } from '@/apis/queries';
import { getWebSocketApi } from '@/apis/websockets';
import {
  GameScoreArea,
  MatchLogList,
  MatchRecordSimpleMemo,
  MatchSchedule,
  MatchTimeController,
  PlayerStatCounterGrid,
  SubstitutionPlayerList,
  TeamStatCompareCounterList,
  TeamStatCounterGrid,
  ToggleableStartingPlayers,
} from '@/components';
import {
  getTimeAgo,
  getUnixTimestampInSeconds,
} from '@/components/MatchTimeController/timeUtils';
import { queryClient } from '@/react-query-provider';
import { commonPaper } from '@/styles/paper.css';

import { MatchRecordLayout } from './-components';

export const Route = createFileRoute('/matches/$matchId/record')({
  component: MatchRecordPage,
  loader: ({ params }) => {
    const matchId = Number(params.matchId);

    return Promise.all([
      queryClient.ensureQueryData(matchRecordQuery.infoQuery(matchId)),
      queryClient.ensureQueryData(matchRecordQuery.scoreQuery(matchId)),
      queryClient.ensureQueryData(matchRecordQuery.eventsQuery(matchId)),
      queryClient.ensureQueryData(matchRecordQuery.playersQuery(matchId)),
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

  const now = getUnixTimestampInSeconds();
  const [memo, setMemo] = useState(matchMemo.data.memo);

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
      },
    });

    return () => {
      unsubErrorChannel();
      unsubMatchChannel();
    };
  }, [matchId, wsApi, enqueueSnackbar]);

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
          }}
        >
          <ToggleableStartingPlayers
            team={homeTeam.data}
            players={matchPlayers.data.homeTeam.starters}
          />
          <div
            style={{
              padding: '24px 8px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
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
          }}
        >
          <ToggleableStartingPlayers
            team={awayTeam.data}
            players={matchPlayers.data.awayTeam.starters}
          />
          <div
            style={{
              padding: '24px 8px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
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
          <PlayerStatCounterGrid />
        </div>
      }
      timer={
        <div style={s(116)}>
          {/* TODO: 추후 API 개발 완료 시 시간 처리 추가 필요 */}
          <MatchTimeController
            now={now}
            matchStatus={{
              currentPeriod: 1,
              state: 'playing',
              startedAt: getTimeAgo({ minutes: 50, seconds: 0, now }),
              addedTime: 5,
            }}
            periodNames={['전반', '후반']}
          />
        </div>
      }
      info={
        <div style={s(284)}>
          <MatchSchedule
            items={[
              { label: '장소', value: matchInfo.data.stadium },
              { label: '날짜', value: matchInfo.data.matchDate },
              {
                label: '시간',
                value: `${matchInfo.data.startTime} ~ ${matchInfo.data.endTime}`,
              },
              { label: '주심', value: matchInfo.data.mainRefereeName },
              { label: '부심1', value: matchInfo.data.assistantReferee1 },
              { label: '부심2', value: matchInfo.data.assistantReferee2 },
              { label: '대기심', value: matchInfo.data.fourthReferee },
            ]}
          />
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
          <MatchRecordSimpleMemo value={memo} onChange={setMemo} />
        </div>
      }
    />
  );
}
