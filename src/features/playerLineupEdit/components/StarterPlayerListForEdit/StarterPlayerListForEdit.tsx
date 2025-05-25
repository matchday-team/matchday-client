import type { MatchUserResponse, TeamResponse } from '@/apis/models';
import { PlayerListContainer, PlayerListItem } from '@/components';
import {
  PlayerAssignmentAdapterForStarterGrid,
  PlayerAssignmentAdapterForStarterList,
} from '@/features/playerLineupEdit';

interface StarterPlayerListForEditProps {
  matchId: number;
  team: TeamResponse;
  players: MatchUserResponse[];
}

export const StarterPlayerListForEdit = ({
  matchId,
  team,
  players,
}: StarterPlayerListForEditProps) => {
  return (
    <PlayerAssignmentAdapterForStarterList<HTMLDivElement>
      render={({ isDragOver, disabled, ...props }) => (
        <PlayerListContainer
          team={team}
          isEmpty={players.length === 0}
          isDragOver={isDragOver}
          disabled={disabled}
          {...props}
        >
          {players.map(player => (
            <PlayerAssignmentAdapterForStarterGrid<HTMLLIElement>
              key={player.id}
              matchId={matchId}
              team={team}
              player={player}
              render={({ isDragOver, disabled, ...props }) => (
                <PlayerListItem
                  key={player.id}
                  player={player}
                  isSelected={false}
                  isDragOver={isDragOver}
                  disabled={disabled}
                  {...props}
                />
              )}
            />
          ))}
        </PlayerListContainer>
      )}
    />
  );
};
