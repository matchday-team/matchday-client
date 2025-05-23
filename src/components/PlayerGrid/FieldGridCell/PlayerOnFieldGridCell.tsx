import { type ComponentPropsWithRef } from 'react';

import { MatchUserResponse } from '@/apis/models';
import {
  ChevronDownIcon,
  FootballShoeIcon,
  SoccerballIcon,
} from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { createFallbackImageHandler } from '@/utils/createFallbackImageHandler';

import * as styles from './PlayerOnFieldGridCell.css';
import { commonCellContainer } from './commonStyle.css';

interface PlayerOnFieldGridCellProps extends ComponentPropsWithRef<'div'> {
  isDragOver: boolean;
  disabled: boolean;
  player: MatchUserResponse;
  isSelected?: boolean;
  onClick: () => void;
}

const fallbackImageHandler = createFallbackImageHandler();

export const PlayerOnFieldGridCell = ({
  isDragOver,
  disabled,
  player,
  isSelected,
  onClick,
  ...props
}: PlayerOnFieldGridCellProps) => {
  console.log('isDragOver:', isDragOver);
  return (
    <div
      className={commonCellContainer({
        isSelected,
        isDragOver,
        disabled,
      })}
      onClick={onClick}
      draggable={!disabled}
      {...props}
    >
      <div className={styles.playerImageContainer}>
        <img
          className={styles.playerImage}
          src={player.profileImg ?? noProfilePlayerImage}
          alt=''
          onError={fallbackImageHandler}
        />
        <div className={styles.subInContainer({ visible: player.subIn })}>
          <ChevronDownIcon className={styles.subInIcon} />
        </div>
        <div className={styles.playerCautionContainer}>
          {player.yellowCards > 0 && <PlayerCaution variant='yellow' />}
          {player.redCards > 0 && <PlayerCaution variant='red' />}
        </div>
        <div className={styles.attackPointContainer}>
          <AttackPointMark type='goal' count={player.goals} />
          <AttackPointMark type='ownGoal' count={player.ownGoals} />
          <AttackPointMark type='assist' count={player.assists} />
        </div>
      </div>
      <div className={styles.playerInfoContainer}>
        <span>{player.number}</span>
        <span>{player.name}</span>
      </div>
    </div>
  );
};

const AttackPointMark = ({
  type,
  count,
}: {
  type: 'goal' | 'assist' | 'ownGoal';
  count: number;
}) => {
  if (type === 'ownGoal') {
    return (
      <div className={styles.ownGoalContainer({ visible: count > 0 })}>
        <SoccerballIcon />
      </div>
    );
  }

  return (
    <div className={styles.attackPointMarkContainer({ isEmpty: count === 0 })}>
      {type === 'goal' ? <SoccerballIcon /> : <FootballShoeIcon />}
      <span className={styles.attackPointCount}>{count}</span>
    </div>
  );
};

const PlayerCaution = ({ variant }: { variant: 'yellow' | 'red' }) => {
  return <div className={styles.playerCautionCard({ variant })} />;
};
