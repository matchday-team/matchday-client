import { ReactNode } from 'react';

import * as styles from './MatchRecordLayout.css';

interface MatchRecordLayoutProps {
  team1: ReactNode;
  team2: ReactNode;
  stats: ReactNode;
  info: ReactNode;
}

export const MatchRecordLayout = ({
  team1,
  team2,
  stats,
  info,
}: MatchRecordLayoutProps) => {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.teamContainer}>{team1}</div>
      <div className={styles.statsContainer}>{stats}</div>
      <div className={styles.teamContainer}>{team2}</div>
      <div className={styles.infoContainer}>{info}</div>
    </div>
  );
};
