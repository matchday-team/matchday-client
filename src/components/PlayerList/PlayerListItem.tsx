import { ComponentPropsWithRef, SyntheticEvent } from 'react';

import { MatchUserResponse } from '@/apis/models';
import { ChevronDownIcon } from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { PlayerReceivedCard } from '@/components';
import { StringUtils } from '@/utils';

import * as styles from './PlayerListItem.css';

export interface PlayerListItemProps extends ComponentPropsWithRef<'li'> {
  isSelected: boolean;
  player: MatchUserResponse;
  isDragOver: boolean;
  disabled: boolean;
}

export const PlayerListItem = ({
  isSelected,
  player,
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
        <span className={styles.number}>
          {StringUtils.displayDashIfZero(player.goals)}
        </span>
        <span className={styles.number}>
          {StringUtils.displayDashIfZero(player.assists)}
        </span>
        <PlayerReceivedCard
          yellowCards={player.yellowCards}
          redCards={player.redCards}
        />
      </div>
    </li>
  );
};
