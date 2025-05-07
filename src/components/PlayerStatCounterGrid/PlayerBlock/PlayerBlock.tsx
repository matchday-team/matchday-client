import { SyntheticEvent } from 'react';

import { MatchUserResponse, TeamResponse } from '@/apis/models';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';

import * as styles from './PlayerBlock.css';

export interface PlayerBlockProps {
  team: TeamResponse;
  player: MatchUserResponse;
}

// FIXME: noTeam 이미지도 필요
const setFallbackImageIfLoadFail = (
  e: SyntheticEvent<HTMLImageElement, Event>,
) => {
  e.currentTarget.src = noProfilePlayerImage;
};

export const PlayerBlock = ({
  team, // FIXME: profileImgUrl 조회에 필요함
  player: { number, name, matchPosition },
}: PlayerBlockProps) => {
  const logoImageUrl = 'https://via.placeholder.com/150';

  return (
    <li className={styles.rootContainer}>
      <div className={styles.leftContainer}>
        <img
          className={styles.profileImage}
          // src={profileImageUrl}
          src='https://via.placeholder.com/150'
          alt=''
          onError={setFallbackImageIfLoadFail}
        />
        <span className={styles.number}>{number}</span>
        <span className={styles.name}>{name}</span>
      </div>
      <div className={styles.rightContainer}>
        <span className={styles.position}>{matchPosition}</span>
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
