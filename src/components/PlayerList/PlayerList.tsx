import { SyntheticEvent } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { MatchUserResponse, TeamResponse } from '@/apis/models';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { useSelectedPlayerStore } from '@/stores';

import * as styles from './PlayerList.css';
import { PlayerItem } from './PlayerListItem';
import { teamColor } from './TeamColor.css';

interface PlayerListProps {
  team?: TeamResponse;
  players: MatchUserResponse[];
}

export const PlayerList = ({ team, players }: PlayerListProps) => {
  const setFallbackImageIfLoadFail = (
    e: SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    e.currentTarget.src = noProfilePlayerImage;
  };

  // NOTE: 아예 빈 상태는 team 없이도 표시 가능
  if (!team) {
    return (
      <div className={styles.rootContainer}>
        <EmptyContent />
      </div>
    );
  }

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
          <span className={styles.stat}>파울</span>
        </div>
      </div>
      {players.length > 0 ? (
        <PlayerListContent team={team} players={players} />
      ) : (
        <EmptyContent />
      )}
    </div>
  );
};

const PlayerListContent = ({
  team,
  players,
}: {
  team: TeamResponse;
  players: MatchUserResponse[];
}) => {
  const { isSelected, selectedPlayer, selectPlayer } = useSelectedPlayerStore();

  return (
    <ul className={styles.playerListContainer}>
      {players.map(player => (
        <PlayerItem
          key={player.id}
          player={player}
          isSelected={isSelected && selectedPlayer.player.id === player.id}
          onClick={() => selectPlayer({ team, player })}
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
