import { MatchUserResponse } from '@/apis/models';
import { SoccerballIcon } from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { useIsDragOver } from '@/hooks';
import { createFallbackImageHandler } from '@/utils/createFallbackImageHandler';

import * as styles from './PlayerOnFieldGridCell.css';
import { commonCellContainer } from './commonStyle.css';

interface PlayerOnFieldGridCellProps {
  player: MatchUserResponse;
  isSelected?: boolean;
  onClick?: () => void;
}

const fallbackImageHandler = createFallbackImageHandler();

export const PlayerOnFieldGridCell = ({
  player,
  isSelected,
  onClick,
}: PlayerOnFieldGridCellProps) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<HTMLDivElement>();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move'; // Q. 필요할까?
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('drop', e, e.dataTransfer.getData('application/json'));

    // NOTE:
    // 1. ws API 호출 (Promise 반환)
    // 2. Promise 대기
    // 3. 성공 시 setQueryData로 업데이트
    // 4. 100% 서버 상태에 의존하기 때문에 현재 구현할 수 없는 기능이긴 함
  };

  return (
    <div
      className={commonCellContainer({ isSelected, isDragOver })}
      onClick={onClick}
      ref={hoverTargetRef}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className={styles.playerImageContainer}>
        <img
          className={styles.playerImage}
          src={player.profileImg ?? noProfilePlayerImage}
          alt=''
          onError={fallbackImageHandler}
        />
        <div className={styles.playerCautionContainer}>
          {player.yellowCards > 0 && <PlayerCaution variant='yellow' />}
          {player.redCards > 0 && <PlayerCaution variant='red' />}
        </div>
        <div className={styles.attackPointContainer}>
          <AttackPointMark count={player.goals} />
          <AttackPointMark count={player.assists} />
        </div>
      </div>
      <div className={styles.playerInfoContainer}>
        <span>{player.number}</span>
        <span>{player.name}</span>
      </div>
    </div>
  );
};

const AttackPointMark = ({ count }: { count: number }) => {
  return (
    <div className={styles.attackPointMarkContainer({ isEmpty: count === 0 })}>
      <SoccerballIcon />
      <span className={styles.attackPointCount}>{count}</span>
    </div>
  );
};

const PlayerCaution = ({ variant }: { variant: 'yellow' | 'red' }) => {
  return <div className={styles.playerCautionCard({ variant })} />;
};
