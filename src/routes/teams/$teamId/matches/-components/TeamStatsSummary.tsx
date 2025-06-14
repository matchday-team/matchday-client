import clsx from 'clsx';

import type { TeamStats } from '@/routes/teams/$teamId/matches/-temp-server-types';

import * as styles from './TeamStatsSummary.css';

interface TeamStatsSummaryProps {
  teamStats: TeamStats;
  className?: string;
}

export function TeamStatsSummary({
  teamStats,
  className,
}: TeamStatsSummaryProps) {
  return (
    <div className={clsx(styles.rootContainer, className)}>
      <div className={styles.teamInfoContainer}>
        <img
          src={teamStats.logo}
          alt={teamStats.name}
          className={styles.teamLogo}
        />
        <div className={styles.teamName}>{teamStats.name}</div>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <div className={styles.statLabel}>출전 경기 수</div>
          <div className={styles.statValue}>{teamStats.matchesPlayed}경기</div>
        </div>

        <div className={styles.statItem}>
          <div className={styles.statLabel}>최다 득점</div>
          <div className={styles.statValue}>{teamStats.topScorer}</div>
        </div>

        <div className={styles.statItem}>
          <div className={styles.statLabel}>승 / 패 / 무</div>
          <div className={styles.recordContainer}>
            <div className={styles.recordValue}>승 : {teamStats.wins}</div>
            <div className={styles.recordValue}>패 : {teamStats.losses}</div>
            <div className={styles.recordValue}>무 : {teamStats.draws}</div>
          </div>
        </div>

        <div className={styles.statItem}>
          <div className={styles.statLabel}>최근 경기</div>
          <div className={styles.recentMatchesContainer}>
            {teamStats.recentMatches.map((result, index) => (
              <div
                key={index}
                className={clsx(
                  styles.recentMatchResult,
                  result === '승' && styles.win,
                  result === '패' && styles.loss,
                  result === '무' && styles.draw,
                )}
              >
                {result}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.statItem}>
          <div className={styles.statLabel}>득 / 실</div>
          <div className={styles.statValue}>
            득 : {teamStats.goalsFor} 실 : {teamStats.goalsAgainst}
          </div>
        </div>
      </div>
    </div>
  );
}
