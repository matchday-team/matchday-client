import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { PlayerSubstitutionAdapter } from '@/features';
import { SubstitutionSourceType, useSelectedPlayerStore } from '@/stores';

import { FieldBackground } from './FieldBackground';
import { EmptyOnFieldGridCell, PlayerOnFieldGridCell } from './FieldGridCell';

interface PlayerOnFieldGridProps {
  mode: SubstitutionSourceType;
  team: TeamResponse;
  players: MatchUserResponse[];
  onSwap: (inPlayerId: number, outPlayerId: number) => void;
}

// TODO: FieldBackground만 재사용 - 현재는 그냥 선수 교체용 컴포넌트로 사용함
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
    <FieldBackground
      render={matchGrid => {
        const player = playerGridMap.get(matchGrid);

        if (!player) {
          return <EmptyOnFieldGridCell key={matchGrid} />;
        }

        return (
          <PlayerSubstitutionAdapter<HTMLDivElement>
            key={matchGrid}
            mode={mode}
            team={team}
            player={player}
            onSwap={onSwap}
            render={({ isDragOver, disabled, ...props }) => (
              <PlayerOnFieldGridCell
                key={matchGrid}
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
      }}
    />
  );
};
