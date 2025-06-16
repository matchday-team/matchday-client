import { ReactNode } from 'react';

import { ChevronRightIcon } from '@/assets/icons';
import { Table, TableColumnsDefinition } from '@/components/Table';
import type { Notice } from '@/routes/teams/$teamId/notices/-temp-server-types';

import * as styles from './NoticeTable.css';

interface NoticeTableProps {
  notices: Notice[];
  onNoticeClick?: (notice: Notice) => void;
  headerActions?: ReactNode;
  className?: string;
}

export const NoticeTable = ({
  notices,
  onNoticeClick,
  headerActions,
}: NoticeTableProps) => {
  const columns = {
    title: {
      key: 'title',
      title: '제목',
      width: 600,
      minWidth: 400,
      bodyAlign: 'left',
      render: (value, record) => (
        <div className={styles.titleContainer}>
          <div className={styles.titleRow}>
            {record.isPinned && <div className={styles.pinIndicator} />}
            <div className={styles.noticeTitle}>{value}</div>
          </div>
          <div className={styles.noticeContent}>{record.content}</div>
        </div>
      ),
    },
    author: {
      key: 'author',
      title: '작성자',
      width: 120,
      minWidth: 100,
    },
    createdAt: {
      key: 'createdAt',
      title: '작성일',
      width: 120,
      minWidth: 100,
    },
    id: {
      key: 'id', // FIXME: 데이터가 없는 열도 구성할 수 있어야
      title: '',
      width: 60,
      render: () => <ChevronRightIcon className={styles.actionIcon} />,
    },
  } satisfies TableColumnsDefinition<Notice>;

  const handleRowClick = (notice: Notice) => {
    onNoticeClick?.(notice);
  };

  return (
    <Table
      columns={columns}
      data={notices}
      headerHeight={60}
      rowHeight={80}
      onRowClick={handleRowClick}
      headerActions={headerActions}
      className={styles.tableOverride}
    />
  );
};
