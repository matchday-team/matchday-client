import { useState } from 'react';

import { createFileRoute } from '@tanstack/react-router';

import { DetailCollapsibleLayout } from '@/components';
import { usePageTitle } from '@/hooks';

import {
  MatchDetailPanel,
  MatchFilters,
  MatchTable,
  TeamStatsSummary,
} from './-components';
import {
  mockAwayTeam,
  mockGoals,
  mockHomeTeam,
  mockMatches,
  mockPlayerStats,
  mockTeamStats,
} from './-mock-data';
import * as styles from './-route.css';
import type { Match } from './-temp-server-types';

export const Route = createFileRoute('/teams/$teamId/matches')({
  component: TeamMatchListPage,
});

function TeamMatchListPage() {
  usePageTitle('기록 관리');

  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const handleMatchClick = (match: Match) => {
    setSelectedMatch(match);
  };

  return (
    <div className={styles.rootContainer}>
      <DetailCollapsibleLayout
        isOpen={!!selectedMatch}
        defaultChildren={
          <div className={styles.tableContainer}>
            <TeamStatsSummary teamStats={mockTeamStats} />
            <MatchTable
              matches={mockMatches}
              onMatchClick={handleMatchClick}
              headerActions={<MatchFilters />}
            />
          </div>
        }
        detailChildren={
          selectedMatch && (
            <MatchDetailPanel
              homeTeam={mockHomeTeam}
              awayTeam={mockAwayTeam}
              goals={mockGoals}
              duration={selectedMatch.duration}
              playersPlayed={13}
              totalPlayers={16}
              date={selectedMatch.date}
              location={selectedMatch.location}
              players={mockPlayerStats}
            />
          )
        }
      />
    </div>
  );
}
