import { ReactNode } from 'react';

import * as styles from './MatchRecordLayout.css';

interface MatchRecordLayoutProps {
  team1: ReactNode;
  team2: ReactNode;
  teamStats: ReactNode;
  selectedPlayer: ReactNode;
  timer: ReactNode;
  info: ReactNode;
  log: ReactNode;
  memo: ReactNode;
}

export const MatchRecordLayout = ({
  team1,
  team2,
  teamStats,
  info,
  selectedPlayer,
  timer,
  log,
  memo,
}: MatchRecordLayoutProps) => {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.teamContainer}>{team1}</div>
      <div className={styles.centerContainer}>
        {teamStats}
        {selectedPlayer}
      </div>
      <div className={styles.teamContainer}>{team2}</div>
      <div className={styles.infoContainer}>
        {timer}
        {info}
        {log}
        {memo}
      </div>
    </div>
  );
};
