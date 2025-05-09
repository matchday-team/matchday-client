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

  const disabled = player.sentOff;

  return (
    <li
      className={styles.rootContainer({ disabled })}
      draggable={!disabled}
      onDragStart={disabled ? undefined : handleDragStart}
    >
      <img
        className={styles.profileImage}
        src={player.profileImg ?? noProfilePlayerImage}
        alt=''
        onError={setFallbackImageIfLoadFail}
      />
      <div className={styles.textContainer}>
        <div className={styles.textLeft}>
          <span className={styles.number({ disabled })}>{player.number}</span>
          <span className={styles.name({ disabled })}>{player.name}</span>
        </div>
        <span className={styles.position({ disabled })}>
          {player.matchPosition}
        </span>
      </div>
    </li>
  );
};
