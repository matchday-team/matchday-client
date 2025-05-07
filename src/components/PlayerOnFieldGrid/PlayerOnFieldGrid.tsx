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
}

export const PlayerOnFieldGrid = ({
  team,
  players,
}: PlayerOnFieldGridProps) => {
  const { isSelected, selectedPlayer, selectPlayer } = useSelectedPlayerStore();

  // FIXME: matchGrid 수정 전까지 어쩔 수 없음
  const playerGridMap = new Map(
    players.map(player => [Math.floor(Math.random() * 30), player]),
  );

  console.log(players, playerGridMap);

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
            />
          );
        })}
      </div>
    </FieldBackground>
  );
};
