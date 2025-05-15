import { TeamResponse } from '@/apis/models';
import { MatchUserResponse } from '@/apis/models';
import { useSelectedPlayerStore } from '@/stores';

import { FieldBackground } from './FieldBackground';
import { EmptyOnFieldGridCell, PlayerOnFieldGridCell } from './FieldGridCell';
import * as styles from './PlayerOnFieldGrid.css';

const TOTAL_CELLS = 30;

interface PlayerOnFieldGridProps {
  team?: TeamResponse;
  players: MatchUserResponse[];
  onSwap?: (inPlayerId: number, outPlayerId: number) => void;
}

export const PlayerOnFieldGrid = ({
  team,
  players,
  onSwap,
}: PlayerOnFieldGridProps) => {
  const { isSelected, selectedPlayer, selectPlayer } = useSelectedPlayerStore();

  const playerGridMap = new Map(
    players.map(player => [player.matchGrid, player]),
  );

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
              isSelected={isSelected && selectedPlayer.player.id === player.id}
              onClick={() => {
                // NOTE: 빈 상태임
                if (!team) {
                  return;
                }
                selectPlayer({ team, player });
              }}
              onSwap={onSwap}
            />
          );
        })}
      </div>
    </FieldBackground>
  );
};
