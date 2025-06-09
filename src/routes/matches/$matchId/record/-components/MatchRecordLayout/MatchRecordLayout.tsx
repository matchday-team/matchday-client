import { commonPaper } from '@/styles/paper.css';

import { ReactNode } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import {
  teamAwayColor,
  teamHomeColor,
} from '@/components/MatchLogList/colors.css';

import * as styles from './MatchRecordLayout.css';

// TO DO: 예시용 스타일로, 추후 제거 필요
const s = (height: number | string) => ({
  height,
  backgroundColor: '#fff',
  borderRadius: 10,
});

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
      <div className={styles.teamContainer}>
        <div
          className={commonPaper}
          style={{
            ...s('auto'),
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {team1}
        </div>
      </div>
      <div className={styles.centerContainer}>
        <div style={s(560)}>{teamStats}</div>
        <div style={s(302)}>{selectedPlayer}</div>
      </div>

      <div className={styles.teamContainer}>
        <div
          className={commonPaper}
          style={{
            ...s('auto'),
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {team2}
        </div>
      </div>
      <div className={styles.infoContainer}>
        <div style={s(116)}>{timer}</div>
        <div style={s(284)}>{info}</div>
        <div style={s(228)}>{log}</div>
        <div style={s(204)}>{memo}</div>
      </div>
    </div>
  );
};
