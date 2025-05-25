import { MatchUserResponse, TeamResponse } from '@/apis/models';
import {
  EmptyOnFieldGridCell,
  FieldBackground,
  PlayerOnFieldGridCell,
} from '@/components';
import { PlayerAssignmentAdapterForStarterGrid } from '@/features/playerLineupEdit';

import { PlayerAssignmentAdapterForEmptyGrid } from './PlayerAssignmentAdapterForEmptyGrid';

interface StarterPlayerGridForEditProps {
  matchId: number;
  team: TeamResponse;
  players: MatchUserResponse[];
}

export const StarterPlayerGridForEdit = ({
  matchId,
  team,
  players,
}: StarterPlayerGridForEditProps) => {
  const playerGridMap = new Map(
    players.map(player => [player.matchGrid, player]),
  );

  return (
    <FieldBackground
      render={matchGrid => {
        const player = playerGridMap.get(matchGrid);

        if (!player) {
          return (
            <PlayerAssignmentAdapterForEmptyGrid<HTMLDivElement>
              key={matchGrid}
              matchId={matchId}
              matchGrid={matchGrid}
              render={({ isDragOver, disabled, ...props }) => (
                <EmptyOnFieldGridCell
                  key={matchGrid}
                  isDragOver={isDragOver}
                  disabled={disabled}
                  {...props}
                />
              )}
            />
          );
        }

        return (
          <PlayerAssignmentAdapterForStarterGrid<HTMLDivElement>
            key={matchGrid}
            matchId={matchId}
            team={team}
            player={player}
            render={({ isDragOver, disabled, ...props }) => (
              <PlayerOnFieldGridCell
                key={matchGrid}
                player={player}
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
