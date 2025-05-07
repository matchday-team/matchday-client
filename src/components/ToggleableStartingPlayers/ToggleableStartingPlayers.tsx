import { useState } from 'react';

import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { PlayerList } from '@/components/PlayerList';
import { PlayerOnFieldGrid } from '@/components/PlayerOnFieldGrid';

import * as styles from './ToggleableStartingPlayers.css';

interface ToggleableStartingPlayersProps {
  team?: TeamResponse;
  players: MatchUserResponse[];
}

export const ToggleableStartingPlayers = ({
  team,
  players,
}: ToggleableStartingPlayersProps) => {
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
        <PlayerOnFieldGrid team={team} players={players} />
      ) : (
        <PlayerList team={team} players={players} />
      )}
    </div>
  );
};
