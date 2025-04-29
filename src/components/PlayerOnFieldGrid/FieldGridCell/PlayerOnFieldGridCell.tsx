import { StartingPlayerOnGrid } from '@/apis';
import { SoccerballIcon } from '@/assets/icons';
import { createFallbackImageHandler } from '@/utils/createFallbackImageHandler';

import * as styles from './PlayerOnFieldGridCell.css';
import { commonCellContainer } from './commonStyle.css';

interface PlayerOnFieldGridCellProps {
  player: StartingPlayerOnGrid;
  isSelected?: boolean;
  onClick?: () => void;
}

const fallbackImageHandler = createFallbackImageHandler();

export const PlayerOnFieldGridCell = ({
  player,
  isSelected,
  onClick,
}: PlayerOnFieldGridCellProps) => {
  return (
    <div className={commonCellContainer({ isSelected })} onClick={onClick}>
      <div className={styles.playerImageContainer}>
        <img
          className={styles.playerImage}
          src={player.profileImageUrl}
          alt={player.name}
          onError={fallbackImageHandler}
        />
        <div className={styles.attackPointContainer}>
          <AttackPointMark count={1} />
          <AttackPointMark count={1} />
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
  if (count === 0) return null;

  return (
    <div className={styles.attackPointMarkContainer}>
      <SoccerballIcon />
      <span className={styles.attackPointCount}>{count}</span>
    </div>
  );
};
