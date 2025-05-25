import type { MatchUserResponse, TeamResponse } from '@/apis/models';
import { SimplePlayerListContainer, SimplePlayerListItem } from '@/components';

import { PlayerAssignmentAdapterForSubItem } from './PlayerAssignmentAdapterForSubItem';
import { PlayerAssignmentAdapterForSubList } from './PlayerAssignmentAdapterForSubList';

interface SubPlayerListForEditProps {
  matchId: number;
  team: TeamResponse;
  players: MatchUserResponse[];
}

export const SubPlayerListForEdit = ({
  matchId,
  team,
  players,
}: SubPlayerListForEditProps) => {
  return (
    <PlayerAssignmentAdapterForSubList<HTMLDivElement>
      matchId={matchId}
      render={({ isDragOver, disabled, ...props }) => (
        <SimplePlayerListContainer
          isEmpty={players.length === 0}
          isDragOver={isDragOver}
          disabled={disabled}
          {...props}
        >
          {players.map(player => (
            <PlayerAssignmentAdapterForSubItem<HTMLLIElement>
              key={player.id}
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
      )}
    />
  );
};
