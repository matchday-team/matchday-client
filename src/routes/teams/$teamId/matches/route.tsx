import { useState } from 'react';

import { createFileRoute } from '@tanstack/react-router';

import { usePageTitle } from '@/hooks';

import { MatchFilters, MatchTable, TeamStatsSummary } from './-components';
import { mockMatches, mockTeamStats } from './-mock-data';
import * as styles from './-route.css';
import type {
  Match,
  MatchFilters as MatchFiltersType,
} from './-temp-server-types';

export const Route = createFileRoute('/teams/$teamId/matches')({
  component: TeamMatchListPage,
});

function TeamMatchListPage() {
  usePageTitle('기록 관리');

  const [filters, setFilters] = useState<MatchFiltersType>({
    search: '',
    teamFilter: '',
    resultFilter: '',
    sortOrder: 'latest',
  });

  // 필터링된 경기 목록
  const filteredMatches = mockMatches
    .filter(match => {
      // 검색어 필터
      if (
        filters.search &&
        !match.name.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      // 팀 필터 (현재는 상대팀 기준)
      if (
        filters.teamFilter &&
        filters.teamFilter !==
          match.opponentTeam.toLowerCase().replace('fc', '').trim()
      ) {
        return false;
      }

      // 결과 필터
      if (filters.resultFilter) {
        const resultMap = {
          win: '승',
          loss: '패',
          draw: '무',
        };
        if (
          resultMap[filters.resultFilter as keyof typeof resultMap] !==
          match.result
        ) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      // 정렬
      if (filters.sortOrder === 'latest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
    });

  const handleMatchClick = (match: Match) => {
    console.log('Match clicked:', match);
    // 여기에 경기 상세 페이지로 이동하는 로직 추가
  };

  const handleFiltersChange = (newFilters: MatchFiltersType) => {
    setFilters(newFilters);
  };

  return (
    <div className={styles.rootContainer}>
      <TeamStatsSummary teamStats={mockTeamStats} />

      <div className={styles.tableSection}>
        <MatchTable
          matches={filteredMatches}
          onMatchClick={handleMatchClick}
          headerActions={
            <MatchFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
            />
          }
        />
      </div>
    </div>
  );
}
