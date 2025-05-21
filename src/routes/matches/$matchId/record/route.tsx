import { useEffect } from 'react';

import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useParams } from '@tanstack/react-router';

import { matchQuery, teamQuery } from '@/apis/queries';
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
import { usePageTitle } from '@/hooks';
import { queryClient } from '@/react-query-provider';
import { useSelectedPlayerStore } from '@/stores';
import * as atomicStyles from '@/styles/atomic.css';

import { MatchRecordLayout } from './-components';
import { MatchTimeControllerAdapter } from './-components/MatchRecordLayout/MatchTimeControllerAdapter';
import { useMatchRecordWebSocket } from './-hooks';
import { useSyncMatchMemo } from './-hooks/useSyncMatchMemo';
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
  const { requestPlayerSwap, requestTeamStatChange, requestPlayerStatChange } =
    useMatchRecordWebSocket();

  const { memo, updateMemo } = useSyncMatchMemo(matchId);
  const { data: matchInfo } = useSuspenseQuery(matchQuery.info(matchId));
  const { data: matchScore } = useSuspenseQuery(matchQuery.score(matchId));
  const { data: matchEvents } = useSuspenseQuery(matchQuery.events(matchId));
  const { data: matchPlayers } = useSuspenseQuery(matchQuery.players(matchId));
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
          <ToggleableStartingPlayers
            team={homeTeam.data}
            players={homeTeamStarters}
            onSwap={requestPlayerSwap}
          />
          <div className={atomicStyles.flexContainer}>
            <SubstitutionPlayerList
              team={homeTeam.data}
              players={homeTeamSubstitutes}
              onSwap={requestPlayerSwap}
            />
            <TeamStatCounterGrid
              team={homeTeam.data}
              stats={matchScore.data.homeScore}
              onStatChange={requestTeamStatChange}
            />
          </div>
        </>
      }
      team2={
        <>
          <ToggleableStartingPlayers
            team={awayTeam.data}
            players={awayTeamStarters}
            onSwap={requestPlayerSwap}
          />
          <div className={atomicStyles.flexContainer}>
            <SubstitutionPlayerList
              team={awayTeam.data}
              players={awayTeamSubstitutes}
              onSwap={requestPlayerSwap}
            />
            <TeamStatCounterGrid
              team={awayTeam.data}
              stats={matchScore.data.awayScore}
              onStatChange={requestTeamStatChange}
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
        <PlayerStatCounterGrid onStatChange={requestPlayerStatChange} />
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
