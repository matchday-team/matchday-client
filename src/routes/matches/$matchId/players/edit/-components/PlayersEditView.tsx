import { lightThemeVars } from '@/styles/theme.css';

import { useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { matchQuery, teamQuery } from '@/apis/queries';
import {
  AllPlayerListForEdit,
  StarterPlayerGridForEdit,
  StarterPlayerListForEdit,
  SubPlayerListForEdit,
} from '@/features/playerLineupEdit';

import * as styles from './PlayersEditView.css';

interface PlayersEditViewProps {
  matchId: number;
  matchSide: 'home' | 'away';
}

export const PlayersEditView = ({
  matchId,
  matchSide,
}: PlayersEditViewProps) => {
  const navigate = useNavigate();
  const { data: matchInfo } = useSuspenseQuery(matchQuery.info(matchId));
  const { homeTeamId, awayTeamId } = matchInfo.data;
  const currentTeamId = matchSide === 'home' ? homeTeamId : awayTeamId;

  const { data: currentTeamData } = useSuspenseQuery(
    teamQuery.byId(currentTeamId),
  );
  const { data: matchPlayers } = useSuspenseQuery(matchQuery.players(matchId));
  const { data: teamMembers } = useSuspenseQuery(
    teamQuery.memberList(currentTeamId),
  );

  const currentTeamPlayers =
    matchSide === 'home'
      ? matchPlayers.data.homeTeam
      : matchPlayers.data.awayTeam;

  const teamWithoutTeamColor = {
    ...currentTeamData.data,
    teamColor: lightThemeVars.color.primary[100],
  };

  const allPlayers = teamMembers.data.teamMemberResponses;

  const allIdlePlayers = allPlayers.filter(
    player =>
      !currentTeamPlayers.starters.some(
        starter => starter.userId === player.id,
      ) &&
      !currentTeamPlayers.substitutes.some(sub => sub.userId === player.id),
  );

  const handleNext = () => {
    if (matchSide === 'home') {
      navigate({
        to: '/matches/$matchId/players/edit',
        params: {
          matchId: matchId.toString(),
        },
        search: {
          matchSide: 'away',
        },
      });
    } else {
      navigate({
        to: '/',
      });
    }
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.allPlayersRootContainer}>
        <span className={styles.listTopDescription}>* 전체 선수 명단</span>
        <div className={styles.allPlayersContainer}>
          <AllPlayerListForEdit
            matchId={matchId}
            team={teamWithoutTeamColor}
            players={allIdlePlayers}
          />
        </div>
        <span className={styles.listBottomDescription}>
          * 상대팀을 등록하지 않을 경우 빈칸으로 적용됩니다.
        </span>
      </div>
      <div className={styles.fieldContainer}>
        <StarterPlayerGridForEdit
          matchId={matchId}
          team={teamWithoutTeamColor}
          players={currentTeamPlayers.starters}
        />
      </div>
      <div className={styles.matchPlayerListRootContainer}>
        <div className={styles.starterListContainer}>
          <StarterPlayerListForEdit
            matchId={matchId}
            team={teamWithoutTeamColor}
            players={currentTeamPlayers.starters}
          />
        </div>
        <div className={styles.subListContainer}>
          <SubPlayerListForEdit
            matchId={matchId}
            team={teamWithoutTeamColor}
            players={currentTeamPlayers.substitutes}
          />
        </div>
        <button className={styles.nextButton} onClick={handleNext}>
          다음으로
        </button>
      </div>
    </div>
  );
};
