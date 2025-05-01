import { StartingPlayerOnGrid } from '@/apis/players';

import { FieldBackground } from './FieldBackground';
import { EmptyOnFieldGridCell, PlayerOnFieldGridCell } from './FieldGridCell';
import * as styles from './PlayerOnFieldGrid.css';

interface PlayerOnFieldGridProps {
  players: StartingPlayerOnGrid[];
  selectedPlayerId: number;
  onPlayerSelect: (playerId: number) => void;
}

const TOTAL_CELLS = 30;

export const PlayerOnFieldGrid = ({
  players,
  selectedPlayerId,
  onPlayerSelect,
}: PlayerOnFieldGridProps) => {
  const playerGridMap = new Map(players.map(player => [player.grid, player]));

  return (
    <FieldBackground>
      <div className={styles.grid}>
        {Array.from({ length: TOTAL_CELLS }, (_, idx) => {
          const player = playerGridMap.get(idx);

          if (!player) {
            return <EmptyOnFieldGridCell key={idx} />;
          }

          return (
            <PlayerOnFieldGridCell
              key={idx}
              player={player}
              isSelected={player.id === selectedPlayerId}
              onClick={() => {
                onPlayerSelect?.(player.id);
              }}
            />
          );
        })}
      </div>
    </FieldBackground>
  );
};
