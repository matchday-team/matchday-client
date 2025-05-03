import { SyntheticEvent } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { StartingPlayerOnGrid } from '@/apis';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { mocked_getPlayersByTeamType, mocked_getTeamByType } from '@/mocks';
import { TeamType, useSelectedPlayerStore } from '@/stores';

import * as styles from './PlayerList.css';
import { PlayerItem } from './PlayerListItem';
import { teamColor } from './TeamColor.css';

interface PlayerListProps {
  teamType: TeamType;
}

export const PlayerList = ({ teamType }: PlayerListProps) => {
  // TODO: Tanstack-query 연동
  const team = mocked_getTeamByType(teamType);
  const players = mocked_getPlayersByTeamType(teamType);

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
        <PlayerListContent teamType={teamType} players={players} />
      ) : (
        <EmptyContent />
      )}
    </div>
  );
};

const PlayerListContent = ({
  teamType,
  players,
}: {
  teamType: TeamType;
  players: StartingPlayerOnGrid[];
}) => {
  const { isSelected, selectedPlayer, selectPlayer } = useSelectedPlayerStore();

  return (
    <ul className={styles.playerListContainer}>
      {players.map(player => (
        <PlayerItem
          key={player.id}
          player={player}
          isSelected={isSelected && selectedPlayer.id === player.id}
          onClick={() => selectPlayer({ teamType, id: player.id })}
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
