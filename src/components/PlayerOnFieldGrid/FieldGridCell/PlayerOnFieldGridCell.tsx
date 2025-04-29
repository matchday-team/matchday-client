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
