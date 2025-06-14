import { createFileRoute } from '@tanstack/react-router';

import { usePageTitle } from '@/hooks';

import { MatchFilters, MatchTable, TeamStatsSummary } from './-components';
import { mockMatches, mockTeamStats } from './-mock-data';
import * as styles from './-route.css';
import type { Match } from './-temp-server-types';

export const Route = createFileRoute('/teams/$teamId/matches')({
  component: TeamMatchListPage,
});

function TeamMatchListPage() {
  usePageTitle('기록 관리');

  const handleMatchClick = (match: Match) => {
    console.log('Match clicked:', match);
  };

  return (
    <div className={styles.rootContainer}>
      <TeamStatsSummary teamStats={mockTeamStats} />
      <MatchTable
        matches={mockMatches}
        onMatchClick={handleMatchClick}
        headerActions={<MatchFilters />}
      />
    </div>
  );
}
