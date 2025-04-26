import { SyntheticEvent } from 'react';

import { StartingPlayer, Team } from '@/apis';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';

import * as styles from './PlayerBlock.css';

export interface ListItemProps {
  team: Team;
  player: StartingPlayer;
}

// FIXME: noTeam 이미지도 필요
const setFallbackImageIfLoadFail = (
  e: SyntheticEvent<HTMLImageElement, Event>,
) => {
  e.currentTarget.src = noProfilePlayerImage;
};

export const PlayerBlock = ({
  team: { logoImageUrl },
  player: { number, name, position, profileImageUrl },
}: ListItemProps) => {
  return (
    <li className={styles.rootContainer}>
      <div className={styles.leftContainer}>
        <img
          className={styles.profileImage}
          src={profileImageUrl}
          alt=''
          onError={setFallbackImageIfLoadFail}
        />
        <span className={styles.number}>{number}</span>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.rightContainer}>
        <span className={styles.position}>{position}</span>
        <img
          src={logoImageUrl}
          alt=''
          className={styles.teamLogo}
          onError={setFallbackImageIfLoadFail}
        />
      </div>
    </li>
  );
};
