import { useState } from 'react';

import { StartingPlayerOnGrid, Team } from '@/apis';
import { PlayerList } from '@/components/PlayerList';
import { PlayerOnFieldGrid } from '@/components/PlayerOnFieldGrid';

import * as styles from './ToggleableStartingPlayers.css';

export const ToggleableStartingPlayers = ({
  team,
  players,
  selectedPlayerId,
  onPlayerSelect,
}: {
  team: Team;
  players: StartingPlayerOnGrid[];
  selectedPlayerId: number;
  onPlayerSelect: (playerId: number) => void;
}) => {
  const [isGridView, setIsGridView] = useState(true);

  return (
    <div className={styles.rootContainer}>
      <button
        className={styles.toggleButton}
        onClick={() => setIsGridView(prev => !prev)}
      >
        {isGridView ? '리스트 보기' : '포메이션 보기'}
      </button>
      {isGridView ? (
        <PlayerOnFieldGrid
          players={players}
          selectedPlayerId={selectedPlayerId}
          onPlayerSelect={onPlayerSelect}
        />
      ) : (
        <PlayerList
          team={team}
          players={players}
          selectedPlayerId={selectedPlayerId}
          onPlayerSelect={onPlayerSelect}
        />
      )}
    </div>
  );
};
