import * as styles from './MatchTimeController.css';
import { MatchTimerButton } from './MatchTimerButton';

// TODO: 로직 소유 경계는 고민이 필요
const periodNames = {
  'not-started': '전반',
  first: '전반',
  'half-time': '후반',
  second: '후반',
  end: '후반',
};

interface MatchTimeControllerProps {
  timerText: string;
  currentPeriod: 'not-started' | 'first' | 'half-time' | 'second' | 'end';
  isPlaying: boolean;
  addedTime: number;
  onStart?: () => void;
  onStop?: () => void;
  onReset?: () => void;
}

export const MatchTimeController = ({
  timerText: timerText,
  currentPeriod,
  isPlaying,
  addedTime,
  onStart,
  onStop,
  onReset,
}: MatchTimeControllerProps) => {
  const isGameEnded = currentPeriod === 'end';
  const isPlayingFirstHalf = currentPeriod === 'first';

  const buttonText = isGameEnded
    ? '게임 종료됨'
    : isPlaying
      ? `${periodNames[currentPeriod]} 종료`
      : `${periodNames[currentPeriod]} 시작`;

  return (
    <div className={styles.container}>
      <div className={styles.timeSection}>
        <div className={styles.timeDisplay}>
          {
            <span className={styles.additionalTime}>
              {periodNames[currentPeriod]} {addedTime > 0 && `+${addedTime}"`}
            </span>
          }
        </div>
        <span className={styles.mainTime}>{timerText}</span>
      </div>
      <div className={styles.controlSection}>
        <MatchTimerButton
          variant='primary'
          onClick={isPlaying ? onStop : onStart}
          disabled={isGameEnded}
        >
          {buttonText}
        </MatchTimerButton>
        {/* 정말 취소하시겠습니까? modal 필요 - 현재는 confirm으로 진행 */}
        <MatchTimerButton
          variant='danger'
          disabled={!isPlayingFirstHalf}
          onClick={onReset}
        >
          시작 취소
        </MatchTimerButton>
      </div>
    </div>
  );
};
