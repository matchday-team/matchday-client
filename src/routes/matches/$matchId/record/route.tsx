import * as atomicStyles from '@/styles/atomic.css';

import { useEffect } from 'react';

import { useSuspenseQueries, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useParams } from '@tanstack/react-router';

import { matchQuery, teamQuery } from '@/apis/queries';
import {
  GameScoreArea,
  GridListToggleView,
  MatchLogList,
  MatchRecordSimpleMemo,
  MatchSchedule,
  PlayerStatCounterGrid,
  TeamStatCompareCounterList,
  TeamStatCounterGrid,
} from '@/components';
import {
  MatchTimeControllerAdapter,
  useMatchRecordWsMutation,
  useMatchRecordWsSubscribe,
  useSyncMatchMemo,
} from '@/features/matchRecord';
import { HOME_TEAM_DISABLED_TEAM_STATS } from '@/features/matchRecord/matchRecordPolicy';
import {
  StarterPlayerGridForSubstitution,
  StarterPlayerListForSubstitution,
  SubPlayerListForSubstitution,
} from '@/features/playerSubstitution';
import { usePageTitle } from '@/hooks';
import { queryClient } from '@/react-query-provider';
import { useSelectedPlayerStore } from '@/stores';

import { MatchRecordLayout } from './-components';
import { dividePlayers } from './-utils';

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

  const { starters: homeTeamStarters, substitutes: homeTeamSubstitutes } =
    dividePlayers(matchPlayers.data.homeTeam);
  const { starters: awayTeamStarters, substitutes: awayTeamSubstitutes } =
    dividePlayers(matchPlayers.data.awayTeam);

  // FIXME: 얘내는 순차 로딩을 하게 되는데...
  const { data: homeTeam } = useSuspenseQuery(
    teamQuery.byId(matchInfo.data.homeTeamId),
  );
  const { data: awayTeam } = useSuspenseQuery(
    teamQuery.byId(matchInfo.data.awayTeamId),
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
        <>
          <GridListToggleView
            render={isGridView => {
              const Component = isGridView
                ? StarterPlayerGridForSubstitution
                : StarterPlayerListForSubstitution;

              return (
                <Component
                  matchId={matchId}
                  team={homeTeam.data}
                  players={homeTeamStarters}
                />
              );
            }}
          />
          <div className={atomicStyles.flexContainer}>
            <SubPlayerListForSubstitution
              matchId={matchId}
              team={homeTeam.data}
              players={homeTeamSubstitutes}
            />
            <TeamStatCounterGrid
              team={homeTeam.data}
              stats={matchScore.data.homeScore}
              onStatIncrement={requestTeamStatChange}
              onStatCancel={requestStatCancel}
              disabledCriteria={stat =>
                HOME_TEAM_DISABLED_TEAM_STATS.includes(stat)
              }
            />
          </div>
        </>
      }
      team2={
        <>
          <GridListToggleView
            render={isGridView => {
              const Component = isGridView
                ? StarterPlayerGridForSubstitution
                : StarterPlayerListForSubstitution;

              return (
                <Component
                  matchId={matchId}
                  team={awayTeam.data}
                  players={awayTeamStarters}
                />
              );
            }}
          />
          <div className={atomicStyles.flexContainer}>
            <SubPlayerListForSubstitution
              matchId={matchId}
              team={awayTeam.data}
              players={awayTeamSubstitutes}
            />
            <TeamStatCounterGrid
              team={awayTeam.data}
              stats={matchScore.data.awayScore}
              onStatIncrement={requestTeamStatChange}
              onStatCancel={requestStatCancel}
            />
          </div>
        </>
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
            maxValue={30}
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
