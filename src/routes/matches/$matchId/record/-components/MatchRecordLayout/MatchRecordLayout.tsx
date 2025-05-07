import { ReactNode } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import {
  teamAwayColor,
  teamHomeColor,
} from '@/components/MatchLogList/colors.css';

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
  team1Color: string;
  team2Color: string;
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
  team1Color,
  team2Color,
}: MatchRecordLayoutProps) => {
  return (
    <div
      className={styles.rootContainer}
      style={assignInlineVars({
        [teamHomeColor]: team1Color,
        [teamAwayColor]: team2Color,
      })}
    >
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
