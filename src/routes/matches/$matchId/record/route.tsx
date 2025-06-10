import { useEffect } from 'react';

import { useSuspenseQueries, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useParams } from '@tanstack/react-router';

import { matchQuery, teamQuery } from '@/apis/queries';
import {
  GameScoreArea,
  MatchLogList,
  MatchRecordSimpleMemo,
  MatchSchedule,
  PlayerStatCounterGrid,
  TeamStatCompareCounterList,
} from '@/components';
import {
  MatchTimeControllerAdapter,
  useMatchRecordWsMutation,
  useMatchRecordWsSubscribe,
  useSyncMatchMemo,
} from '@/features/matchRecord';
import { HOME_TEAM_DISABLED_TEAM_STATS } from '@/features/matchRecord/matchRecordPolicy';
import { usePageTitle } from '@/hooks';
import { queryClient } from '@/react-query-provider';
import { useSelectedPlayerStore } from '@/stores';

import { MatchRecordLayout, MatchRecordTeamArea } from './-components';
import { categorizeAndSortPlayers } from './-utils';

export const Route = createFileRoute('/matches/$matchId/record')({
  component: MatchRecordPage,
  loader: ({ params }) => {
    const matchId = Number(params.matchId);

    return Promise.all([
      queryClient.ensureQueryData(matchQuery.info(matchId)),
      queryClient.ensureQueryData(matchQuery.score(matchId)),
      queryClient.ensureQueryData(matchQuery.events(matchId)),
      queryClient.ensureQueryData(matchQuery.players(matchId)),
      queryClient.ensureQueryData(matchQuery.memo(matchId)),
    ]);
  },
});

function MatchRecordPage() {
  const { matchId: _matchId } = useParams({ from: '/matches/$matchId/record' });
  const matchId = Number(_matchId);
  useMatchRecordWsSubscribe(matchId);
  const { requestTeamStatChange, requestPlayerStatChange, requestStatCancel } =
    useMatchRecordWsMutation(matchId);
  const { memo, updateMemo } = useSyncMatchMemo(matchId);
  const [
    { data: matchInfo },
    { data: matchScore },
    { data: matchEvents },
    { data: matchPlayers },
  ] = useSuspenseQueries({
    queries: [
      matchQuery.info(matchId),
      matchQuery.score(matchId),
      matchQuery.events(matchId),
      matchQuery.players(matchId),
    ],
  });

  // FIXME: 얘내는 순차 로딩을 하게 되는데...
  const { data: homeTeam } = useSuspenseQuery(
    teamQuery.byId(matchInfo.data.homeTeamId),
  );
  const { data: awayTeam } = useSuspenseQuery(
    teamQuery.byId(matchInfo.data.awayTeamId),
  );

  const { starters: homeTeamStarters, substitutes: homeTeamSubstitutes } =
    categorizeAndSortPlayers(matchPlayers.data.homeTeam);
  const { starters: awayTeamStarters, substitutes: awayTeamSubstitutes } =
    categorizeAndSortPlayers(matchPlayers.data.awayTeam);

  const maxScore = Math.max(
    1,
    ...Object.values(matchScore.data.homeScore),
    ...Object.values(matchScore.data.awayScore),
  );

  usePageTitle(matchInfo.data.title);

  const unselectPlayer = useSelectedPlayerStore(state => state.unselectPlayer);
  useEffect(
    function resetSelectionOnMount() {
      unselectPlayer();
    },
    [unselectPlayer],
  );

  return (
    <MatchRecordLayout
      team1Color={homeTeam.data.teamColor}
      team2Color={awayTeam.data.teamColor}
      team1={
        <MatchRecordTeamArea
          matchId={matchId}
          team={homeTeam.data}
          starters={homeTeamStarters}
          substitutes={homeTeamSubstitutes}
          stats={matchScore.data.homeScore}
          onStatIncrement={requestTeamStatChange}
          onStatCancel={requestStatCancel}
          disabledCriteria={stat =>
            HOME_TEAM_DISABLED_TEAM_STATS.includes(stat)
          }
        />
      }
      team2={
        <MatchRecordTeamArea
          matchId={matchId}
          team={awayTeam.data}
          starters={awayTeamStarters}
          substitutes={awayTeamSubstitutes}
          stats={matchScore.data.awayScore}
          onStatIncrement={requestTeamStatChange}
          onStatCancel={requestStatCancel}
        />
      }
      teamStats={
        <>
          <GameScoreArea
            scores={matchScore.data}
            homeTeam={homeTeam.data}
            awayTeam={awayTeam.data}
          />
          <TeamStatCompareCounterList
            homeTeamStat={matchScore.data.homeScore}
            awayTeamStat={matchScore.data.awayScore}
            maxValue={maxScore}
          />
        </>
      }
      selectedPlayer={
        <PlayerStatCounterGrid
          onStatIncrement={requestPlayerStatChange}
          onStatCancel={requestStatCancel}
        />
      }
      timer={<MatchTimeControllerAdapter matchId={matchId} />}
      info={<MatchSchedule matchInfo={matchInfo.data} />}
      log={
        <MatchLogList
          teams={{
            home: homeTeam.data,
            away: awayTeam.data,
          }}
          matchLength={{
            first: matchInfo.data.firstHalfPeriod,
            second: matchInfo.data.secondHalfPeriod,
          }}
          logs={matchEvents.data}
        />
      }
      memo={<MatchRecordSimpleMemo value={memo} onChange={updateMemo} />}
    />
  );
}
