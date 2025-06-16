import { useState } from 'react';

import { ChevronDownIcon, SearchIcon } from '@/assets/icons';

import * as styles from './NoticeSearchFilter.css';

export const NoticeSearchFilter = () => {
  const [sortOrder, setSortOrder] = useState('최신순');

  return (
    <div className={styles.filterContainer}>
      <div className={styles.searchContainer}>
        <SearchIcon className={styles.searchIcon} />
      </div>
      <div className={styles.sortContainer}>
        <div className={styles.sortButton}>
          <div className={styles.sortText}>{sortOrder}</div>
          <ChevronDownIcon className={styles.chevronIcon} />
        </div>
      </div>
    </div>
  );
};
