import {
  PlayerReceivedCard,
  Table,
  type TableColumnsDefinition,
} from '@/components';
import type { MatchRecord } from '@/routes/teams/$teamId/players/-temp-server-types';

import * as styles from './MatchRecordTable.css';

interface MatchRecordTableProps {
  matchRecords: MatchRecord[];
}

const columns = {
  opponentTeam: {
    key: 'opponentTeam',
    title: '상대팀',
    width: 100,
    headerAlign: 'center',
    bodyAlign: 'center',
    render: (opponentTeam: string, record: MatchRecord) => (
      <div className={styles.opponentCell}>
        <img src={record.opponentLogo} className={styles.teamLogo} alt='' />
        <span className={styles.teamName}>{opponentTeam}</span>
      </div>
    ),
  },
  homeScore: {
    key: 'homeScore',
    title: '스코어',
    width: 60,
    headerAlign: 'center',
    bodyAlign: 'center',
    render: (_: number, record: MatchRecord) => (
      <div
        className={styles.scoreDisplay({
          result: record.isWin ? 'win' : 'loss',
        })}
      >
        <span className={styles.scoreNumber({ team: 'home' })}>
          {record.homeScore}
        </span>
        <span className={styles.scoreColon}>:</span>
        <span className={styles.scoreNumber({ team: 'away' })}>
          {record.awayScore}
        </span>
      </div>
    ),
  },
  goals: {
    key: 'goals',
    title: '득점',
    width: 40,
    headerAlign: 'center',
    bodyAlign: 'center',
  },
  assists: {
    key: 'assists',
    title: '어시스트',
    width: 50,
    headerAlign: 'center',
    bodyAlign: 'center',
    render: () => '-',
  },
  yellowCards: {
    key: 'yellowCards',
    title: '경고',
    width: 40,
    headerAlign: 'center',
    bodyAlign: 'center',
    render: (_, record) => (
      <PlayerReceivedCard
        yellowCards={record.yellowCards}
        redCards={record.redCards}
      />
    ),
  },
} satisfies TableColumnsDefinition<MatchRecord>;

export function MatchRecordTable({ matchRecords }: MatchRecordTableProps) {
  return (
    <Table
      columns={columns}
      data={matchRecords}
      headerHeight={50}
      rowHeight={40}
      className={styles.matchRecordTable}
    />
  );
}
