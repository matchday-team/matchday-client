import { SyntheticEvent } from 'react';

import { MatchUserResponse, TeamResponse } from '@/apis/models';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';

import * as styles from './PlayerListItem.css';

export interface ListItemProps {
  team: TeamResponse;
  player: MatchUserResponse;
}

const setFallbackImageIfLoadFail = (
  e: SyntheticEvent<HTMLImageElement, Event>,
) => {
  e.currentTarget.src = noProfilePlayerImage;
};

// TODO: team 추후에 사용하기
export const PlayerListItem = ({ player }: ListItemProps) => {
  const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
    e.dataTransfer.setData('application/json', JSON.stringify(player));
  };

  return (
    <li
      className={styles.rootContainer}
      draggable={true}
      onDragStart={handleDragStart}
    >
      <img
        className={styles.profileImage}
        src={player.profileImg}
        alt=''
        onError={setFallbackImageIfLoadFail}
      />
      <div className={styles.textContainer}>
        <div className={styles.textLeft}>
          <span className={styles.number}>{player.number}</span>
          <span className={styles.name}>{player.name}</span>
        </div>
        <span className={styles.position}>{player.matchPosition}</span>
      </div>
    </li>
  );
};
