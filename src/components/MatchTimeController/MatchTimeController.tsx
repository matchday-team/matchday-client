import { useEffect, useState } from 'react';

import { Button } from './Button';
import * as styles from './MatchTimeController.css';
import { getUnixTimestampInSeconds } from './timeUtils';

interface MatchTimeControllerProps {
  matchStatus: {
    currentPeriod: number;
    state: 'playing' | 'end';
    startedAt: number;
    addedTime: number;
  };
  periodNames: string[];
  onStart?: () => void;
  onStop?: () => void;
}

export const MatchTimeController = ({
  matchStatus,
  periodNames,
  onStart,
  onStop,
}: MatchTimeControllerProps) => {
  const currentPeriodName = periodNames[matchStatus.currentPeriod - 1];
  const [currentTime, setCurrentTime] = useState('00:00');

  useEffect(() => {
    const updateTime = () => {
      if (matchStatus.state === 'playing' && matchStatus.startedAt) {
        const now = getUnixTimestampInSeconds();
        const elapsedSeconds = now - matchStatus.startedAt;
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;

        const minutesToDisplay = minutes.toString().padStart(2, '0');
        const secondsToDisplay = seconds.toString().padStart(2, '0');
        setCurrentTime(`${minutesToDisplay}:${secondsToDisplay}`);
      }
    };

    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [matchStatus.state, matchStatus.startedAt]);

  return (
    <div className={styles.container}>
      <div className={styles.timeSection}>
        <div className={styles.timeDisplay}>
          {
            <span className={styles.additionalTime}>
              {currentPeriodName}{' '}
              {matchStatus.addedTime > 0 && `+${matchStatus.addedTime}"`}
            </span>
          }
        </div>
        <span className={styles.mainTime}>{currentTime}</span>
      </div>
      <div className={styles.controlSection}>
        <Button
          isActive={matchStatus.state === 'playing'}
          onClick={matchStatus.state === 'playing' ? onStop : onStart}
        >
          {currentPeriodName}{' '}
          {matchStatus.state === 'playing' ? '종료' : '시작'}
        </Button>
      </div>
    </div>
  );
};
