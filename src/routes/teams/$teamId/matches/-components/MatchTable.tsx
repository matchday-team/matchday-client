import { ReactNode } from 'react';

import clsx from 'clsx';

import XIcon from '@/assets/icons/x.svg?react';
import { Table, TableColumnsDefinition } from '@/components/Table';
import type { Match } from '@/routes/teams/$teamId/matches/-temp-server-types';

import * as styles from './MatchTable.css';

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
      headerAlign: 'center',
      bodyAlign: 'center',
      render: value => value,
    },
    name: {
      key: 'name',
      title: '경기 이름',
      width: 200,
      headerAlign: 'center',
      bodyAlign: 'left',
      render: value => value,
    },
    opponentTeam: {
      key: 'opponentTeam',
      title: '상대팀',
      width: 150,
      headerAlign: 'center',
      bodyAlign: 'center',
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
      headerAlign: 'center',
      bodyAlign: 'center',
      render: value => (
        <div
          className={clsx(
            styles.resultCell,
            value === '승' && styles.win,
            value === '패' && styles.loss,
            value === '무' && styles.draw,
          )}
        >
          {value}
        </div>
      ),
    },
    duration: {
      key: 'duration',
      title: '경기 시간',
      width: 80,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: value => <div className={styles.durationCell}>{value}분</div>,
    },
    location: {
      key: 'location',
      title: '장소',
      width: 180,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: value => value,
    },
    date: {
      key: 'date',
      title: '경기일시',
      width: 100,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: value => value,
    },
    id: {
      key: 'id',
      title: '',
      width: 60,
      headerAlign: 'center',
      bodyAlign: 'center',
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
        rowHeight={70}
        onRowClick={handleRowClick}
        headerActions={headerActions}
        className={styles.table}
      />
    </div>
  );
}
