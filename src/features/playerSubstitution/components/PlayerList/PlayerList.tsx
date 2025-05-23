import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { PlayerListContainer, PlayerListItem } from '@/components';
import { PlayerSubstitutionAdapter } from '@/features/playerSubstitution';
import { type SubstitutionSourceType, useSelectedPlayerStore } from '@/stores';

interface PlayerListProps {
  mode: SubstitutionSourceType;
  matchId: number;
  team: TeamResponse;
  players: MatchUserResponse[];
}

export const PlayerList = ({
  mode,
  matchId,
  team,
  players,
}: PlayerListProps) => {
  const { isSelected, selectedPlayer, selectPlayer } = useSelectedPlayerStore();

  return (
    <PlayerListContainer team={team} isEmpty={players.length === 0}>
      {players.map(player => (
        <PlayerSubstitutionAdapter<HTMLLIElement>
          key={player.id}
          mode={mode}
          matchId={matchId}
          team={team}
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
