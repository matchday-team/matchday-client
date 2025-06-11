import * as styles from './MemberStatsSummary.css';

interface PositionStat {
  position: string;
  count: number;
}

interface MemberStatsSummaryProps {
  totalMembers?: number;
  positionStats?: PositionStat[];
}

const defaultPositionStats: PositionStat[] = [
  { position: 'FW', count: 17 },
  { position: 'MF', count: 20 },
  { position: 'DF', count: 11 },
  { position: 'GK', count: 6 },
];

export function MemberStatsSummary({
  totalMembers = 54,
  positionStats = defaultPositionStats,
}: MemberStatsSummaryProps) {
  return (
    <div className={styles.container}>
      <div className={styles.totalMembersSection}>
        <div className={styles.totalMembersLabel}>총 회원 수</div>
        <div className={styles.totalMembersCount}>{totalMembers}명</div>
      </div>
      <div className={styles.positionStatsContainer}>
        {positionStats.map(stat => (
          <div key={stat.position} className={styles.positionStatItem}>
            <div className={styles.positionStatContent}>
              <div className={styles.positionLabel}>{stat.position}</div>
              <div className={styles.positionCountContainer}>
                <div className={styles.positionCount}>{stat.count}</div>
                <div className={styles.positionCountLabel}>명</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
