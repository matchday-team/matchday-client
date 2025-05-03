import { SyntheticEvent } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { StartingPlayer, Team } from '@/apis';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';

import * as styles from './PlayerList.css';
import { PlayerItem } from './PlayerListItem';
import { teamColor } from './TeamColor.css';

interface PlayerListProps {
  team: Team;
  players: StartingPlayer[];
  selectedPlayerId: number | null;
  onPlayerSelect: (playerId: number) => void;
}

export const PlayerList = ({
  team,
  players,
  selectedPlayerId,
  onPlayerSelect,
}: PlayerListProps) => {
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
      {players.length > 0 ? (
        <PlayerListContent
          players={players}
          selectedPlayerId={selectedPlayerId}
          onPlayerSelect={onPlayerSelect}
        />
      ) : (
        <EmptyContent />
      )}
    </div>
  );
};

const PlayerListContent = ({
  players,
  selectedPlayerId,
  onPlayerSelect,
}: {
  players: StartingPlayer[];
  selectedPlayerId: number | null;
  onPlayerSelect: (playerId: number) => void;
}) => (
  <ul className={styles.playerListContainer}>
    {players.map(player => (
      <PlayerItem
        key={player.id}
        player={player}
        isSelected={selectedPlayerId === player.id}
        onClick={() => onPlayerSelect(player.id)}
      />
    ))}
  </ul>
);

const EmptyContent = () => (
  <div className={styles.emptyContainer}>
    <span className={styles.emptyText}>선수 정보가 없습니다</span>
  </div>
);
