import {
  MatchUserResponse,
  TeamMemberResponse,
  TeamResponse,
} from '@/apis/models';
import { PlayerListContainer, PlayerListItem } from '@/components';
import {
  PlayerAssignmentAdapterForAllList,
  PlayerAssignmentAdapterForTeamMember,
} from '@/features/playerLineupEdit';
import { useSelectedPlayerStore } from '@/stores';

// NOTE: 컴포넌트를 새로 만들려다가- 빈 값으로 다 채워넣는 것도 방법이란 걸 알게 됨
const convertToMatchUserResponse = (
  player: TeamMemberResponse,
): MatchUserResponse => {
  return {
    id: player.id,
    userId: player.id,
    name: player.name,
    number: player.number ?? 0,
    matchPosition: player.defaultPosition,
    matchGrid: 0,
    goals: 0,
    ownGoals: 0,
    assists: 0,
    yellowCards: 0,
    redCards: 0,
    caution: 0,
    sentOff: false,
    profileImg: null,
    subIn: false,
    subOut: false,
  };
};

interface AllPlayerListForEditProps {
  matchId: number;
  team: TeamResponse;
  players: TeamMemberResponse[];
}

export const AllPlayerListForEdit = ({
  matchId,
  team,
  players,
}: AllPlayerListForEditProps) => {
  const { isSelected, selectedPlayer, selectPlayer } = useSelectedPlayerStore();

  return (
    <PlayerAssignmentAdapterForAllList<HTMLDivElement>
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
            <PlayerAssignmentAdapterForTeamMember<HTMLLIElement>
              key={player.id}
              matchId={matchId}
              team={team}
              player={player}
              render={({ isDragOver, disabled, ...props }) => (
                <PlayerListItem
                  key={player.id}
                  player={convertToMatchUserResponse(player)}
                  isSelected={
                    isSelected && selectedPlayer.player.id === player.id
                  }
                  onClick={() =>
                    selectPlayer({
                      team,
                      player: convertToMatchUserResponse(player),
                    })
                  }
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
