import { MatchUserResponse } from '@/apis/models';
import { SimplePlayerListContainer, SimplePlayerListItem } from '@/components';
import { PlayerAssignmentAdapterForList } from '@/features/playerLineupEdit';

interface SubPlayerListForEditProps {
  matchId: number;
  players: MatchUserResponse[];
}

export const SubPlayerListForEdit = ({
  matchId,
  players,
}: SubPlayerListForEditProps) => {
  return (
    <PlayerAssignmentAdapterForList<HTMLDivElement>
      targetType='bench'
      matchId={matchId}
      render={({ isDragOver, disabled, ...props }) => (
        <SimplePlayerListContainer
          isEmpty={players.length === 0}
          isDragOver={isDragOver}
          disabled={disabled}
          {...props}
        >
          {players.map(player => (
            <SimplePlayerListItem
              key={player.id}
              player={player}
              isDragOver={false}
              disabled={false}
            />
          ))}
        </SimplePlayerListContainer>
      )}
    />
  );
};
