import { PlayerReceivedCard } from '@/components';
import type { MatchRecord } from '@/routes/teams/$teamId/players/-temp-server-types';

import * as styles from './MatchRecordTable.css';

interface MatchRecordTableProps {
  matchRecords: MatchRecord[];
}

export function MatchRecordTable({ matchRecords }: MatchRecordTableProps) {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.opponentLabel}>상대팀</div>
        <div className={styles.scoreLabel}>스코어</div>
        <div className={styles.statsLabel}>득점</div>
        <div className={styles.statsLabel}>어시스트</div>
        <div className={styles.statsLabel}>경고</div>
      </div>
      <div className={styles.bodyContainer}>
        {matchRecords.map(record => (
          <div key={record.id} className={styles.rowContainer}>
            <img src={record.opponentLogo} className={styles.teamLogo} alt='' />
            <div className={styles.matchInfo}>
              <div className={styles.matchMainInfo}>
                <div className={styles.teamName}>{record.opponentTeam}</div>
                <div
                  className={styles.scoreDisplay({
                    result: record.isWin ? 'win' : 'loss',
                  })}
                >
                  <div className={styles.scoreNumber({ team: 'home' })}>
                    {record.homeScore}
                  </div>
                  <div className={styles.scoreColon}>:</div>
                  <div className={styles.scoreNumberWrapper}>
                    <div className={styles.scoreNumber({ team: 'away' })}>
                      {record.awayScore}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.playerStats}>
                <div className={styles.statValue}>{record.goals}</div>
                <div className={styles.statValue}>-</div>
                <PlayerReceivedCard
                  yellowCards={record.yellowCards}
                  redCards={record.redCards}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
