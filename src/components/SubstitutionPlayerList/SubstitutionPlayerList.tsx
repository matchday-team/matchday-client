import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { PlayerSubstitutionAdapter } from '@/features/playerSubstitution';
import { type SubstitutionSourceType } from '@/stores';

import { SubstitutionPlayerListContainer } from './SubstitutionPlayerListContainer';
import { SubstitutionPlayerListItem } from './SubstitutionPlayerListItem';

interface SubstitutionPlayerListProps {
  mode: SubstitutionSourceType;
  team: TeamResponse;
  players: MatchUserResponse[];
}

export const SubstitutionPlayerList = ({
  mode,
  team,
  players,
}: SubstitutionPlayerListProps) => {
  return (
    <SubstitutionPlayerListContainer isEmpty={players.length === 0}>
      {players.map(player => (
        <PlayerSubstitutionAdapter<HTMLLIElement>
          key={player.id}
          mode={mode}
          team={team}
          player={player}
          render={({ isDragOver, disabled, ...props }) => (
            <SubstitutionPlayerListItem
              player={player}
              isDragOver={isDragOver}
              disabled={disabled}
              {...props}
            />
          )}
        />
      ))}
    </SubstitutionPlayerListContainer>
  );
};
