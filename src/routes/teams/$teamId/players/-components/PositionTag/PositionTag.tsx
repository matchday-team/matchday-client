import clsx from 'clsx';

import type { Position } from '@/routes/teams/$teamId/players/-temp-server-types';

import * as styles from './PositionTag.css';

const getPositionStyle = (position: Position): string => {
  switch (position) {
    case 'FW':
      return styles.positionTagFW;
    case 'MF':
      return styles.positionTagMF;
    case 'DF':
      return styles.positionTagDF;
    case 'GK':
      return styles.positionTagGK;
    default:
      return styles.positionTagFW;
  }
};

interface PositionTagProps {
  position: Position;
}

export const PositionTag = ({ position }: PositionTagProps) => {
  return (
    <div className={clsx(styles.positionTag, getPositionStyle(position))}>
      <div className={styles.positionText}>{position}</div>
    </div>
  );
};
