import { useState } from 'react';

import { SearchIcon } from '@/assets/icons';
import { Input, Select } from '@/components/CommonForm';

import * as styles from './MemberFilters.css';

// TODO: 상수로 추출
const positionOptions = [
  { value: '', label: '포지션' },
  { value: 'FW', label: 'FW' },
  { value: 'MF', label: 'MF' },
  { value: 'DF', label: 'DF' },
  { value: 'GK', label: 'GK' },
];

const footOptions = [
  { value: '', label: '주발' },
  { value: '왼발', label: '왼발' },
  { value: '오른발', label: '오른발' },
  { value: '양발', label: '양발' },
];

const dateOptions = [
  { value: '', label: '가입일' },
  { value: 'recent', label: '최근 가입' },
  { value: 'oldest', label: '오래된 순' },
];

interface MemberFiltersProps {
  onSearchChange?: (value: string) => void;
  onPositionFilter?: (position: string) => void;
  onFootFilter?: (foot: string) => void;
  onDateFilter?: (date: string) => void;
}

export function MemberFilters({
  onSearchChange,
  onPositionFilter,
  onFootFilter,
  onDateFilter,
}: MemberFiltersProps) {
  const [searchValue, setSearchValue] = useState('');
  const [positionValue, setPositionValue] = useState('');
  const [footValue, setFootValue] = useState('');
  const [dateValue, setDateValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearchChange?.(value);
  };

  const handlePositionChange = (value: string) => {
    setPositionValue(value);
    onPositionFilter?.(value);
  };

  const handleFootChange = (value: string) => {
    setFootValue(value);
    onFootFilter?.(value);
  };

  const handleDateChange = (value: string) => {
    setDateValue(value);
    onDateFilter?.(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <div className={styles.searchInputWrapper}>
          <SearchIcon className={styles.searchIcon} />
          <Input
            placeholder='검색어를 입력하세요'
            value={searchValue}
            onChange={e => handleSearchChange(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.filtersContainer}>
        <Select
          options={positionOptions}
          value={positionValue}
          onChange={handlePositionChange}
          className={styles.filterSelect}
        />
        <Select
          options={footOptions}
          value={footValue}
          onChange={handleFootChange}
          className={styles.filterSelect}
        />
        <Select
          options={dateOptions}
          value={dateValue}
          onChange={handleDateChange}
          className={styles.filterSelect}
        />
      </div>
    </div>
  );
}
