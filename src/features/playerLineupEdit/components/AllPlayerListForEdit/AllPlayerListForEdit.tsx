import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { PlayerListContainer, PlayerListItem } from '@/components';
import { PlayerAssignmentAdapterForList } from '@/features/playerLineupEdit';
import { useSelectedPlayerStore } from '@/stores';

interface AllPlayerListForEditProps {
  matchId: number;
  team: TeamResponse;
  players: MatchUserResponse[];
}

export const AllPlayerListForEdit = ({
  matchId,
  team,
  players,
}: AllPlayerListForEditProps) => {
  const { isSelected, selectedPlayer, selectPlayer } = useSelectedPlayerStore();

  return (
    <PlayerAssignmentAdapterForList<HTMLDivElement>
      targetType='all'
      matchId={matchId}
      render={({ isDragOver, disabled, ...props }) => (
        <PlayerListContainer
          team={team}
          isEmpty={players.length === 0}
          isDragOver={isDragOver}
          disabled={disabled}
          {...props}
        >
          {players.map(player => (
            <PlayerListItem
              key={player.id}
              player={player}
              isSelected={isSelected && selectedPlayer.player.id === player.id}
              onClick={() => selectPlayer({ team, player })}
              isDragOver={false}
              disabled={false}
            />
          ))}
        </PlayerListContainer>
      )}
    />
  );
};
