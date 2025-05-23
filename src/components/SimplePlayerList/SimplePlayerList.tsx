import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { PlayerSubstitutionAdapter } from '@/features/playerSubstitution';
import { type SubstitutionSourceType } from '@/stores';

import { SimplePlayerListContainer } from './SimplePlayerListContainer';
import { SimplePlayerListItem } from './SimplePlayerListItem';

interface SimplePlayerListProps {
  mode: SubstitutionSourceType;
  team: TeamResponse;
  players: MatchUserResponse[];
}

export const SimplePlayerList = ({
  mode,
  team,
  players,
}: SimplePlayerListProps) => {
  return (
    <SimplePlayerListContainer isEmpty={players.length === 0}>
      {players.map(player => (
        <PlayerSubstitutionAdapter<HTMLLIElement>
          key={player.id}
          mode={mode}
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
