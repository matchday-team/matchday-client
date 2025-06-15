import clsx from 'clsx';

import { InputWithIcon, Select } from '@/components/CommonForm';

import * as styles from './MatchFilters.css';

interface MatchFiltersProps {
  className?: string;
}

export const MatchFilters = ({ className }: MatchFiltersProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.searchContainer}>
        <InputWithIcon
          type='text'
          placeholder='경기 이름 검색'
          variant='white-large'
          iconPosition='right'
        />
      </div>

      <div className={styles.filtersContainer}>
        <Select
          options={[
            { value: '', label: '전체 팀' },
            { value: 'fc-seoul', label: 'FC서울' },
            { value: 'fc-suwon', label: 'FC수원' },
          ]}
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
          placeholder='승 / 패'
          variant='white-large'
          className={styles.filterSelect}
        />

        <Select
          options={[
            { value: 'latest', label: '최신순' },
            { value: 'oldest', label: '오래된순' },
          ]}
          placeholder='최신순'
          variant='white-large'
          className={styles.filterSelect}
        />
      </div>
    </div>
  );
};
