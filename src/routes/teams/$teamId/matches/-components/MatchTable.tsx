import { ReactNode } from 'react';

import clsx from 'clsx';

import XIcon from '@/assets/icons/x.svg?react';
import { Table, TableColumnsDefinition } from '@/components/Table';
import type { Match } from '@/routes/teams/$teamId/matches/-temp-server-types';

import * as styles from './MatchTable.css';

const resultClassMap = {
  승: styles.win,
  패: styles.loss,
  무: styles.draw,
};

interface MatchTableProps {
  matches: Match[];
  onMatchClick?: (match: Match) => void;
  headerActions?: ReactNode;
  className?: string;
}

export function MatchTable({
  matches,
  onMatchClick,
  headerActions,
  className,
}: MatchTableProps) {
  const columns = {
    type: {
      key: 'type',
      title: '경기 유형',
      width: 100,
      minWidth: 75,
    },
    name: {
      key: 'name',
      title: '경기 이름',
      width: 200,
      minWidth: 160,
    },
    opponentTeam: {
      key: 'opponentTeam',
      title: '상대팀',
      width: 150,
      minWidth: 70,
      render: (value, record) => (
        <div className={styles.opponentContainer}>
          <img
            src={record.opponentLogo}
            alt=''
            className={styles.opponentLogo}
          />
          <div className={styles.opponentName}>{value}</div>
        </div>
      ),
    },
    result: {
      key: 'result',
      title: '경기 결과',
      width: 80,
      minWidth: 70,
      render: value => (
        <div className={clsx(styles.resultCell, resultClassMap[value])}>
          {value}
        </div>
      ),
    },
    duration: {
      key: 'duration',
      title: '경기 시간',
      width: 80,
      minWidth: 80,
      render: value => <div className={styles.durationCell}>{value}분</div>,
    },
    location: {
      key: 'location',
      title: '장소',
      width: 180,
      minWidth: 180,
    },
    date: {
      key: 'date',
      title: '경기일시',
      width: 100,
      minWidth: 120,
    },
    id: {
      key: 'id',
      title: '',
      width: 60,
      render: () => <XIcon className={styles.actionIcon} />,
    },
  } satisfies TableColumnsDefinition<Match>;

  const handleRowClick = (match: Match) => {
    onMatchClick?.(match);
  };

  return (
    <div className={clsx(styles.container, className)}>
      <Table
        columns={columns}
        data={matches}
        headerHeight={60}
        rowHeight={76}
        onRowClick={handleRowClick}
        headerActions={headerActions}
        className={styles.table}
      />
    </div>
  );
}
