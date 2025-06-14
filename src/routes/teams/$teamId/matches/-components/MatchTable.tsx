import { ReactNode } from 'react';

import clsx from 'clsx';

import XIcon from '@/assets/icons/x.svg?react';
import { Table, TableColumn } from '@/components/Table';
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
  const columns: Partial<Record<keyof Match, TableColumn<Match>>> = {
    type: {
      key: 'type',
      title: '경기 유형',
      width: 100,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: (value: Match['type']) => (
        <div className={styles.typeCell}>{value}</div>
      ),
    },
    name: {
      key: 'name',
      title: '경기 이름',
      width: 200,
      headerAlign: 'center',
      bodyAlign: 'left',
      render: (value: Match['name']) => (
        <div className={styles.nameCell}>{value}</div>
      ),
    },
    opponentTeam: {
      key: 'opponentTeam',
      title: '상대팀',
      width: 150,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: (value: Match['opponentTeam'], record: Match) => (
        <div className={styles.opponentContainer}>
          <img
            src={record.opponentLogo}
            alt={value}
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
      render: (value: Match['result']) => (
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
      render: (value: Match['duration']) => (
        <div className={styles.durationCell}>{value}분</div>
      ),
    },
    location: {
      key: 'location',
      title: '장소',
      width: 180,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: (value: Match['location']) => (
        <div className={styles.locationCell}>{value}</div>
      ),
    },
    date: {
      key: 'date',
      title: '��시',
      width: 100,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: (value: Match['date']) => (
        <div className={styles.dateCell}>{value}</div>
      ),
    },
    id: {
      key: 'id',
      title: '',
      width: 60,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: () => <XIcon className={styles.actionIcon} />,
    },
  };

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
