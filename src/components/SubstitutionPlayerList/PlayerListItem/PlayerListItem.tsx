import { SyntheticEvent } from 'react';

import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { ChevronDownIcon } from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';

import * as styles from './PlayerListItem.css';

export interface ListItemProps {
  team: TeamResponse;
  player: MatchUserResponse;
}

const displayDashIfZero = (value: number) => {
  return value === 0 ? '-' : value;
};

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

      <div className={styles.textContainer({ disabled })}>
        <div className={styles.textLeft}>
          <span className={styles.number}>{player.number}</span>
          <span className={styles.name}>{player.name}</span>
        </div>
        {disabled && <ChevronDownIcon className={styles.sentOffIcon} />}
        <span className={styles.position}>{player.matchPosition}</span>
      </div>

      <div className={styles.statContainer({ disabled })}>
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
