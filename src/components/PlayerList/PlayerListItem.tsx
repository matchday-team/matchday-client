import { SyntheticEvent } from 'react';

import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';

import * as styles from './PlayerListItem.css';

export interface StartingPlayer {
  id: number;
  name: string;
  number: number;
  position: string;
  profileImageUrl: string;
  goals: number;
  assists: number;
  fouls: number;
}

interface PlayerItemProps {
  isSelected: boolean;
  player: StartingPlayer;
}

const displayDashIfZero = (value: number) => {
  return value === 0 ? '-' : value;
};

export const PlayerItem = ({ player }: PlayerItemProps) => {
  const setFallbackImageIfLoadFail = (
    e: SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    e.currentTarget.src = noProfilePlayerImage;
  };

  return (
    <li className={styles.rootContainer}>
      <div className={styles.infoContainer}>
        <img
          className={styles.profileImage}
          src={player.profileImageUrl}
          alt=''
          onError={setFallbackImageIfLoadFail}
        />
        <span className={styles.number}>{player.number}</span>
        <span className={styles.commonText}>{player.name}</span>
      </div>
      <span className={styles.position}>{player.position}</span>
      <div className={styles.statContainer}>
        <span className={styles.number}>{displayDashIfZero(player.goals)}</span>
        <span className={styles.number}>
          {displayDashIfZero(player.assists)}
        </span>
        <span className={styles.number}>{displayDashIfZero(player.fouls)}</span>
      </div>
    </li>
  );
};
