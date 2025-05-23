import { PropsWithChildren, SyntheticEvent } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { TeamResponse } from '@/apis/models';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';

import * as styles from './PlayerListContainer.css';
import { teamColor } from './TeamColor.css';

interface PlayerListContainerProps extends PropsWithChildren {
  team: TeamResponse;
  isEmpty: boolean;
}

export const PlayerListContainer = ({
  team,
  isEmpty,
  children,
}: PlayerListContainerProps) => {
  const setFallbackImageIfLoadFail = (
    e: SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    e.currentTarget.src = noProfilePlayerImage;
  };

  return (
    <div
      className={styles.rootContainer}
      style={assignInlineVars({
        [teamColor]: team.teamColor,
      })}
    >
      <div className={styles.header}>
        <div className={styles.teamInfo}>
          <img
            className={styles.teamLogo}
            src={team.teamImg ?? noProfilePlayerImage}
            alt=''
            onError={setFallbackImageIfLoadFail}
          />
          <div className={styles.teamName}>{team.name}</div>
        </div>
        <div className={styles.statContainer}>
          <span className={styles.stat}>득점</span>
          <span className={styles.stat}>어시스트</span>
          <span className={styles.stat}>경고</span>
        </div>
      </div>
      {isEmpty ? <EmptyContent /> : children}
    </div>
  );
};

const EmptyContent = () => (
  <div className={styles.emptyContainer}>
    <span className={styles.emptyText}>선수 정보가 없습니다</span>
  </div>
);
