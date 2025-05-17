import { SyntheticEvent } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { MatchUserResponse, TeamResponse } from '@/apis/models';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { useSelectedPlayerStore } from '@/stores';

import * as styles from './PlayerList.css';
import { PlayerItem } from './PlayerListItem';
import { teamColor } from './TeamColor.css';

interface PlayerListProps {
  team: TeamResponse;
  players: MatchUserResponse[];
  onSwap?: (inPlayerId: number, outPlayerId: number) => void;
}

export const PlayerList = ({ team, players, onSwap }: PlayerListProps) => {
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
      {players.length > 0 ? (
        <PlayerListContent team={team} players={players} onSwap={onSwap} />
      ) : (
        <EmptyContent />
      )}
    </div>
  );
};

const PlayerListContent = ({
  team,
  players,
  onSwap,
}: {
  team: TeamResponse;
  players: MatchUserResponse[];
  onSwap?: (inPlayerId: number, outPlayerId: number) => void;
}) => {
  const { isSelected, selectedPlayer, selectPlayer } = useSelectedPlayerStore();

  return (
    <ul className={styles.playerListContainer}>
      {players.map(player => (
        <PlayerItem
          key={player.id}
          team={team}
          player={player}
          isSelected={isSelected && selectedPlayer.player.id === player.id}
          onClick={() => selectPlayer({ team, player })}
          onSwap={onSwap}
        />
      ))}
    </ul>
  );
};

const EmptyContent = () => (
  <div className={styles.emptyContainer}>
    <span className={styles.emptyText}>선수 정보가 없습니다</span>
  </div>
);
