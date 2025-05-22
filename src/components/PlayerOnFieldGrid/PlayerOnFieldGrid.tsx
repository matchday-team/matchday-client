import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { PlayerSubstitutionAdapter } from '@/features';
import { type SubstitutionSourceType, useSelectedPlayerStore } from '@/stores';

import { FieldBackground } from './FieldBackground';
import { EmptyOnFieldGridCell, PlayerOnFieldGridCell } from './FieldGridCell';
import * as styles from './PlayerOnFieldGrid.css';

const TOTAL_CELLS = 30;

interface PlayerOnFieldGridProps {
  mode: SubstitutionSourceType;
  team: TeamResponse;
  players: MatchUserResponse[];
  onSwap: (inPlayerId: number, outPlayerId: number) => void;
}

export const PlayerOnFieldGrid = ({
  mode,
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
            <PlayerSubstitutionAdapter<HTMLDivElement>
              key={idx}
              mode={mode}
              team={team}
              player={player}
              onSwap={onSwap}
              render={({ isDragOver, disabled, ...props }) => (
                <PlayerOnFieldGridCell
                  key={idx}
                  player={player}
                  isSelected={
                    isSelected && selectedPlayer.player.id === player.id
                  }
                  onClick={() => {
                    // NOTE: 빈 상태임
                    if (!team) {
                      return;
                    }
                    selectPlayer({ team, player });
                  }}
                  isDragOver={isDragOver}
                  disabled={disabled}
                  {...props}
                />
              )}
            />
          );
        })}
      </div>
    </FieldBackground>
  );
};
