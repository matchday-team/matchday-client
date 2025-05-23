import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { SimplePlayerListContainer, SimplePlayerListItem } from '@/components';
import { PlayerSubstitutionAdapter } from '@/features/playerSubstitution';

interface SubPlayerListForSubstitutionProps {
  matchId: number;
  team: TeamResponse;
  players: MatchUserResponse[];
}

export const SubPlayerListForSubstitution = ({
  matchId,
  team,
  players,
}: SubPlayerListForSubstitutionProps) => {
  return (
    <SimplePlayerListContainer isEmpty={players.length === 0}>
      {players.map(player => (
        <PlayerSubstitutionAdapter<HTMLLIElement>
          key={player.id}
          mode='bench'
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
