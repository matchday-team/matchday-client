import clsx from 'clsx';

import { InputWithIcon, Select } from '@/components/CommonForm';

import * as styles from './NoticeSearchFilter.css';

interface NoticeSearchFilterProps {
  className?: string;
}

export const NoticeSearchFilter = ({ className }: NoticeSearchFilterProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.searchContainer}>
        <InputWithIcon
          type='text'
          placeholder='공지사항 검색'
          variant='white-large'
          iconPosition='right'
        />
      </div>

      <div className={styles.filtersContainer}>
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
