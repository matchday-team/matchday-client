import { ReactNode } from 'react';

import {
  CenterCircleHalf,
  InnerPenaltyBox,
  OuterPenaltyBox,
} from '@/assets/images/field';

import * as styles from './FieldBackground.css';

const TOTAL_CELLS = 30;

interface PlayerOnFieldGridProps {
  render: (matchGrid: number) => ReactNode;
}

export const FieldBackground = ({ render }: PlayerOnFieldGridProps) => {
  return (
    <div className={styles.rootContainer}>
      <CenterCircleHalf className={styles.centerCircleHalf} />
      <InnerPenaltyBox className={styles.innerPenaltyBox} />
      <OuterPenaltyBox className={styles.outerPenaltyBox} />
      <div className={styles.gridContainer}>
        {Array.from({ length: TOTAL_CELLS }, (_, matchGrid) =>
          render(matchGrid),
        )}
      </div>
    </div>
  );
};
