import { useState } from 'react';

import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { PlayerList } from '@/components/PlayerList';
import { PlayerOnFieldGrid } from '@/components/PlayerOnFieldGrid';
import { type SubstitutionSourceType } from '@/stores';

import * as styles from './ToggleableStartingPlayers.css';

interface ToggleableStartingPlayersProps {
  mode: SubstitutionSourceType;
  team: TeamResponse;
  players: MatchUserResponse[];
  onSwap: (inPlayerId: number, outPlayerId: number) => void;
}

export const ToggleableStartingPlayers = ({
  mode,
  team,
  players,
  onSwap,
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
        <PlayerOnFieldGrid
          mode={mode}
          team={team}
          players={players}
          onSwap={onSwap}
        />
      ) : (
        <PlayerList mode={mode} team={team} players={players} onSwap={onSwap} />
      )}
    </div>
  );
};
