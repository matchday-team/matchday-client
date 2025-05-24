import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { PlayerListContainer, PlayerListItem } from '@/components';
import { PlayerLineupEditAdapter } from '@/features/playerLineupEdit';
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
    <PlayerListContainer team={team} isEmpty={players.length === 0}>
      {/* idx 사용은 임시 */}
      {players.map((player, idx) => (
        <PlayerLineupEditAdapter<HTMLLIElement>
          key={player.id}
          mode='starter'
          matchId={matchId}
          matchGrid={idx}
          player={player}
          render={({ isDragOver, disabled, ...props }) => (
            <PlayerListItem
              player={player}
              isSelected={isSelected && selectedPlayer.player.id === player.id}
              onClick={() => selectPlayer({ team, player })}
              isDragOver={isDragOver}
              disabled={disabled}
              {...props}
            />
          )}
        />
      ))}
    </PlayerListContainer>
  );
};
