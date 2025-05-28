import { ReactNode } from 'react';

import * as styles from './TimeSelect.css';

interface TimeSelectProps {
  startTimeSelect: ReactNode;
  endTimeSelect: ReactNode;
}

export const TimeSelect = ({
  startTimeSelect,
  endTimeSelect,
}: TimeSelectProps) => {
  return (
    <div className={styles.timeContainer}>
      <div className={styles.timeInput}>{startTimeSelect}</div>
      <div className={styles.timeSeparator}>~</div>
      <div className={styles.timeInput}>{endTimeSelect}</div>
    </div>
  );
};
