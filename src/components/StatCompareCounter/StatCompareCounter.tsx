import { TinyBarChart } from '@/components';
import {
  teamAwayColor,
  teamHomeColor,
} from '@/components/MatchLogList/colors.css';

import * as styles from './StatCompareCounter.css';

type StatCompareCounterProps = {
  label: string;
  leftValue: number;
  rightValue: number;
  maxValue: number;
};

export const StatCompareCounter = ({
  label,
  leftValue,
  rightValue,
  maxValue,
}: StatCompareCounterProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <div className={styles.value()}>{leftValue}</div>
        <div className={styles.label}>{label}</div>
        <div className={styles.value({ align: 'right' })}>{rightValue}</div>
      </div>
      <div className={styles.barContainer}>
        <TinyBarChart
          isLeft={true}
          color={teamHomeColor}
          value={leftValue}
          maxValue={maxValue}
        />
        <TinyBarChart
          isLeft={false}
          color={teamAwayColor}
          value={rightValue}
          maxValue={maxValue}
        />
      </div>
    </div>
  );
};
