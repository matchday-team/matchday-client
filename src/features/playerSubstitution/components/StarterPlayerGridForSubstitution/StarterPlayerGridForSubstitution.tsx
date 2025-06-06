import { MatchUserResponse, TeamResponse } from '@/apis/models';
import {
  EmptyOnFieldGridCell,
  FieldBackground,
  PlayerOnFieldGridCell,
} from '@/components';
import { PlayerSubstitutionAdapter } from '@/features/playerSubstitution';
import { useSelectedPlayerStore } from '@/stores';

interface StarterPlayerGridForSubstitutionProps {
  matchId: number;
  team: TeamResponse;
  players: MatchUserResponse[];
}

// TODO: FieldBackground만 재사용 - 현재는 그냥 선수 교체용 컴포넌트로 사용함
export const StarterPlayerGridForSubstitution = ({
  matchId,
  team,
  players,
}: StarterPlayerGridForSubstitutionProps) => {
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
            mode='starter'
            matchId={matchId}
            team={team}
            player={player}
            render={({ isDragOver, disabled, ...props }) => (
              <PlayerOnFieldGridCell
                key={matchGrid}
                player={player}
                isSelected={
                  isSelected && selectedPlayer.player.id === player.id
                }
                onClick={() => {
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
