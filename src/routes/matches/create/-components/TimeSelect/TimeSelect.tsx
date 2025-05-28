import { ChangeEvent } from 'react';

import { Select } from '@/components/CommonForm/Select';

import * as styles from './TimeSelect.css';

const generateTimeOptions = () => {
  return Array.from({ length: 24 }, (_, hour) =>
    Array.from({ length: 2 }, (_, minuteIndex) => {
      const minute = minuteIndex * 30;
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

      return {
        value: timeString,
        label: timeString,
      };
    }),
  ).flat();
};

interface TimeSelectProps {
  startTime: string;
  endTime: string;
  onStartTimeChange: (value: string) => void;
  onEndTimeChange: (value: string) => void;
}

export const TimeSelect = ({
  startTime,
  endTime,
  onStartTimeChange,
  onEndTimeChange,
}: TimeSelectProps) => {
  const timeOptions = generateTimeOptions();

  return (
    <div className={styles.timeContainer}>
      <div className={styles.timeInput}>
        <Select
          value={startTime}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            onStartTimeChange(e.target.value)
          }
          options={timeOptions}
          placeholder='-- : --'
          tabIndex={0}
        />
      </div>
      <div className={styles.timeSeparator}>~</div>
      <div className={styles.timeInput}>
        <Select
          value={endTime}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            onEndTimeChange(e.target.value)
          }
          options={timeOptions}
          placeholder='-- : --'
          tabIndex={0}
        />
      </div>
    </div>
  );
};
