import { SyntheticEvent } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';

import * as styles from './PlayerList.css';
import { PlayerItem, StartingPlayer } from './PlayerListItem';
import { teamColor } from './TeamColor.css';

export interface Team {
  id: number;
  name: string;
  teamColor: string;
  logoImageUrl: string;
}

interface PlayerListProps {
  team: Team;
  players: StartingPlayer[];
}

export const PlayerList = ({ team, players }: PlayerListProps) => {
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
            src={team.logoImageUrl}
            alt=''
            onError={setFallbackImageIfLoadFail}
          />
          <div className={styles.teamName}>{team.name}</div>
        </div>
        <div className={styles.statContainer}>
          <span className={styles.stat}>득점</span>
          <span className={styles.stat}>어시스트</span>
          <span className={styles.stat}>파울</span>
        </div>
      </div>
      <ul className={styles.playerListContainer}>
        {players.map(player => (
          <PlayerItem key={player.id} player={player} isSelected={false} />
        ))}
      </ul>
    </div>
  );
};
