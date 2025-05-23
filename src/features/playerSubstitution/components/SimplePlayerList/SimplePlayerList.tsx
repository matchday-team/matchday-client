import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { SimplePlayerListContainer, SimplePlayerListItem } from '@/components';
import { PlayerSubstitutionAdapter } from '@/features/playerSubstitution';
import { type SubstitutionSourceType } from '@/stores';

interface SimplePlayerListProps {
  mode: SubstitutionSourceType;
  matchId: number;
  team: TeamResponse;
  players: MatchUserResponse[];
}

export const SimplePlayerList = ({
  mode,
  matchId,
  team,
  players,
}: SimplePlayerListProps) => {
  return (
    <SimplePlayerListContainer isEmpty={players.length === 0}>
      {players.map(player => (
        <PlayerSubstitutionAdapter<HTMLLIElement>
          key={player.id}
          mode={mode}
          matchId={matchId}
          team={team}
          player={player}
          render={({ isDragOver, disabled, ...props }) => (
            <SimplePlayerListItem
              player={player}
              isDragOver={isDragOver}
              disabled={disabled}
              {...props}
            />
          )}
        />
      ))}
    </SimplePlayerListContainer>
  );
};
