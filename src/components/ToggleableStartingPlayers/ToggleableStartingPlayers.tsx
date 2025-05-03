import { useState } from 'react';

import { PlayerList } from '@/components/PlayerList';
import { PlayerOnFieldGrid } from '@/components/PlayerOnFieldGrid';
import { TeamType } from '@/stores';

import * as styles from './ToggleableStartingPlayers.css';

interface ToggleableStartingPlayersProps {
  teamType: TeamType;
}

export const ToggleableStartingPlayers = ({
  teamType,
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
        <PlayerOnFieldGrid teamType={teamType} />
      ) : (
        <PlayerList teamType={teamType} />
      )}
    </div>
  );
};
