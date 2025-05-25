import { ComponentPropsWithRef, SyntheticEvent } from 'react';

import { MatchUserResponse } from '@/apis/models';
import { ChevronDownIcon } from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';

import * as styles from './PlayerListItem.css';

export interface PlayerListItemProps extends ComponentPropsWithRef<'li'> {
  isSelected: boolean;
  player: MatchUserResponse;
  isDragOver: boolean;
  disabled: boolean;
}

const displayDashIfZero = (value: number) => {
  return value === 0 ? '-' : value;
};

export const PlayerListItem = ({
  isSelected,
  player,
  onClick,
  isDragOver,
  disabled,
  ...props
}: PlayerListItemProps) => {
  const setFallbackImageIfLoadFail = (
    e: SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    e.currentTarget.src = noProfilePlayerImage;
  };

  return (
    <li
      className={styles.rootContainer({ isSelected, isDragOver, disabled })}
      draggable={!disabled}
      {...props}
    >
      <div className={styles.infoContainer}>
        <img
          className={styles.profileImage}
          src={player.profileImg ?? noProfilePlayerImage}
          alt=''
          onError={setFallbackImageIfLoadFail}
        />
        <span className={styles.number}>{player.number}</span>
        <span className={styles.name}>{player.name}</span>
        <ChevronDownIcon
          className={styles.subInIcon({ visible: player.subIn })}
        />
        <span className={styles.position}>{player.matchPosition}</span>
      </div>
      <div className={styles.statContainer}>
        <span className={styles.number}>{displayDashIfZero(player.goals)}</span>
        <span className={styles.number}>
          {displayDashIfZero(player.assists)}
        </span>
        <div className={styles.cautionContainer}>
          <div
            className={styles.playerCautionCard({
              variant: player.yellowCards > 0 ? 'yellow' : 'empty',
            })}
          />
          <div
            className={styles.playerCautionCard({
              variant: player.redCards > 0 ? 'red' : 'empty',
            })}
          />
        </div>
      </div>
    </li>
  );
};
