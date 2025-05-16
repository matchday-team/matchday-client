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
  onSwap?: (inPlayerId: number, outPlayerId: number) => void;
}

const fallbackImageHandler = createFallbackImageHandler();

export const PlayerOnFieldGridCell = ({
  player,
  isSelected,
  onClick,
  onSwap,
}: PlayerOnFieldGridCellProps) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<HTMLDivElement>();

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('application/json', JSON.stringify(player));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const rawData = e.dataTransfer.getData('application/json');
    const playerComingIn = JSON.parse(rawData) as MatchUserResponse;

    console.log('handleDrop - playerComingIn:', playerComingIn, player);

    onSwap?.(playerComingIn.id, player.id);
  };

  return (
    <div
      className={commonCellContainer({ isSelected, isDragOver })}
      onClick={onClick}
      ref={hoverTargetRef}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      draggable={true}
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
