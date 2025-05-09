import { useMemo } from 'react';

import { MatchInfoResponse } from '@/apis/models';

import * as styles from './MatchSchedule.css';

interface MatchScheduleProps {
  matchInfo: MatchInfoResponse;
}

export const MatchSchedule = ({ matchInfo }: MatchScheduleProps) => {
  const scheduleItems = useMemo(
    () => [
      { label: '장소', value: matchInfo.stadium },
      { label: '날짜', value: matchInfo.matchDate },
      {
        label: '시간',
        value: `${matchInfo.startTime} ~ ${matchInfo.endTime}`,
      },
      { label: '주심', value: matchInfo.mainRefereeName },
      { label: '부심1', value: matchInfo.assistantReferee1 },
      { label: '부심2', value: matchInfo.assistantReferee2 },
      { label: '대기심', value: matchInfo.fourthReferee },
    ],
    [matchInfo],
  );

  return (
    <div className={styles.container}>
      {scheduleItems.map(({ label, value: itemValue }) => (
        <div key={label} className={styles.infoItem}>
          <div className={styles.labelContainer}>
            <div className={styles.label}>{label}</div>
          </div>
          <div className={styles.value}>{itemValue}</div>
        </div>
      ))}
    </div>
  );
};
