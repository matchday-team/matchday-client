import type { ComponentPropsWithRef, SyntheticEvent } from 'react';

import type { MatchUserResponse } from '@/apis/models';
import { ChevronDownIcon } from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';

import * as styles from './SubstitutionPlayerListItem.css';

export interface SubstitutionPlayerListItemProps
  extends ComponentPropsWithRef<'li'> {
  player: MatchUserResponse;
  isDragOver: boolean;
  disabled: boolean;
}

const displayDashIfZero = (value: number) => {
  return value === 0 ? '-' : value;
};

const setFallbackImageIfLoadFail = (
  e: SyntheticEvent<HTMLImageElement, Event>,
) => {
  e.currentTarget.src = noProfilePlayerImage;
};

export const SubstitutionPlayerListItem = ({
  player,
  isDragOver,
  disabled,
  ...props
}: SubstitutionPlayerListItemProps) => {
  return (
    <li
      className={styles.rootContainer({ disabled, isDragOver })}
      draggable={!disabled}
      {...props}
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
        {player.subOut && <ChevronDownIcon className={styles.sentOffIcon} />}
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
