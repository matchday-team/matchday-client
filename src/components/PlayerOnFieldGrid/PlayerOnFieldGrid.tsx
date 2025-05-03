import { mocked_getPlayersByTeamType } from '@/mocks';
import { TeamType, useSelectedPlayerStore } from '@/stores';

import { FieldBackground } from './FieldBackground';
import { EmptyOnFieldGridCell, PlayerOnFieldGridCell } from './FieldGridCell';
import * as styles from './PlayerOnFieldGrid.css';

const TOTAL_CELLS = 30;

interface PlayerOnFieldGridProps {
  teamType: TeamType;
}

export const PlayerOnFieldGrid = ({ teamType }: PlayerOnFieldGridProps) => {
  const { isSelected, selectedPlayer, selectPlayer } = useSelectedPlayerStore();

  // TODO: Tanstack-query 연동
  const players = mocked_getPlayersByTeamType(teamType);

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
              isSelected={isSelected && selectedPlayer.id === player.id}
              onClick={() => {
                selectPlayer({ teamType, id: player.id });
              }}
            />
          );
        })}
      </div>
    </FieldBackground>
  );
};
