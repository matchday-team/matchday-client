import { useState } from 'react';

import type { MatchUserResponse, TeamResponse } from '@/apis/models';
import { PlayerOnFieldGrid } from '@/components';
import { PlayerList } from '@/components/PlayerList';
import { type SubstitutionSourceType } from '@/stores';

import * as styles from './ToggleableStartingPlayers.css';

interface ToggleableStartingPlayersProps {
  mode: SubstitutionSourceType;
  team: TeamResponse;
  players: MatchUserResponse[];
}

export const ToggleableStartingPlayers = ({
  mode,
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
        <PlayerOnFieldGrid mode={mode} team={team} players={players} />
      ) : (
        <PlayerList mode={mode} team={team} players={players} />
      )}
    </div>
  );
};
