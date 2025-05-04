import { SyntheticEvent } from 'react';

import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { Player } from '@/components/SubstitutionPlayerList';

import * as styles from './PlayerListItem.css';

export interface ListItemProps {
  player: Player;
}

const setFallbackImageIfLoadFail = (
  e: SyntheticEvent<HTMLImageElement, Event>,
) => {
  e.currentTarget.src = noProfilePlayerImage;
};

export const PlayerListItem = ({
  player: { number, name, position },
}: ListItemProps) => {
  return (
    <li className={styles.rootContainer} draggable={true}>
      <img
        className={styles.profileImage}
        src={noProfilePlayerImage}
        alt=''
        onError={setFallbackImageIfLoadFail}
      />
      <div className={styles.textContainer}>
        <div className={styles.textLeft}>
          <span className={styles.number}>{number}</span>
          <span className={styles.name}>{name}</span>
        </div>
        <span className={styles.position}>{position}</span>
      </div>
    </li>
  );
};
