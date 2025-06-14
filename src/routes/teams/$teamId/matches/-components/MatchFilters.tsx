import { useState } from 'react';

import clsx from 'clsx';

import MagnifyingGlassIcon from '@/assets/icons/magnifying-glass.svg?react';
import { Select } from '@/components/CommonForm';
import type { MatchFilters as MatchFiltersType } from '@/routes/teams/$teamId/matches/-temp-server-types';

import * as styles from './MatchFilters.css';

interface MatchFiltersProps {
  filters: MatchFiltersType;
  onFiltersChange: (filters: MatchFiltersType) => void;
  className?: string;
}

export function MatchFilters({
  filters,
  onFiltersChange,
  className,
}: MatchFiltersProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchChange = (value: string) => {
    onFiltersChange({
      ...filters,
      search: value,
    });
  };

  const handleTeamFilterChange = (value: string) => {
    onFiltersChange({
      ...filters,
      teamFilter: value,
    });
  };

  const handleResultFilterChange = (value: string) => {
    onFiltersChange({
      ...filters,
      resultFilter: value,
    });
  };

  const handleSortOrderChange = (value: string) => {
    onFiltersChange({
      ...filters,
      sortOrder: value,
    });
  };

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.searchContainer}>
        <input
          type='text'
          placeholder='경기 이름 검색'
          value={filters.search}
          onChange={e => handleSearchChange(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          className={clsx(
            styles.searchInput,
            isSearchFocused && styles.searchInputFocused,
          )}
        />
        <MagnifyingGlassIcon className={styles.searchIcon} />
      </div>

      <div className={styles.filtersContainer}>
        <Select
          options={[
            { value: '', label: '전체 팀' },
            { value: 'fc-seoul', label: 'FC서울' },
            { value: 'fc-suwon', label: 'FC수원' },
          ]}
          value={filters.teamFilter}
          onChange={handleTeamFilterChange}
          placeholder='전체 팀'
          variant='white-large'
          className={styles.filterSelect}
        />

        <Select
          options={[
            { value: '', label: '승 / 패' },
            { value: 'win', label: '승' },
            { value: 'loss', label: '패' },
            { value: 'draw', label: '무' },
          ]}
          value={filters.resultFilter}
          onChange={handleResultFilterChange}
          placeholder='승 / 패'
          variant='white-large'
          className={styles.filterSelect}
        />

        <Select
          options={[
            { value: 'latest', label: '최신순' },
            { value: 'oldest', label: '오래된순' },
          ]}
          value={filters.sortOrder}
          onChange={handleSortOrderChange}
          placeholder='최신순'
          variant='white-large'
          className={styles.filterSelect}
        />
      </div>
    </div>
  );
}
