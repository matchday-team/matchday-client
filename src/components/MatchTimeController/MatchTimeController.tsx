import { useEffect, useState } from 'react';

import { Button } from './Button';
import * as styles from './MatchTimeController.css';
import { getTimerText } from './timeUtils';

interface MatchTimeControllerProps {
  now: number;
  matchStatus: {
    currentPeriod: number;
    state: 'notStarted' | 'playing' | 'ended';
    startedAt: number;
    addedTime: number;
  };
  periodNames: string[];
  onStart?: () => void;
  onStop?: () => void;
}

export const MatchTimeController = ({
  now,
  matchStatus,
  periodNames,
  onStart,
  onStop,
}: MatchTimeControllerProps) => {
  const currentPeriodName = periodNames[matchStatus.currentPeriod - 1];
  const [currentTime, setCurrentTime] = useState(
    getTimerText(matchStatus.startedAt, now),
  );

  const isGameEnded =
    matchStatus.state === 'ended' &&
    matchStatus.currentPeriod === periodNames.length;

  const buttonText = isGameEnded
    ? '게임 종료됨'
    : matchStatus.state === 'notStarted' || matchStatus.state === 'ended'
      ? `${currentPeriodName} 시작`
      : `${currentPeriodName} 종료`;

  useEffect(() => {
    const updateTime = () => {
      if (matchStatus.state === 'playing') {
        setCurrentTime(getTimerText(matchStatus.startedAt, now));
      }
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [matchStatus.state, matchStatus.startedAt, now]);

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
          disabled={isGameEnded}
          isActive={!isGameEnded}
          onClick={matchStatus.state === 'playing' ? onStop : onStart}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
