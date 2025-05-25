import { useSuspenseQuery } from '@tanstack/react-query';

import { matchQuery, teamQuery } from '@/apis/queries';
import {
  AllPlayerListForEdit,
  StarterPlayerGridForEdit,
  StarterPlayerListForEdit,
  SubPlayerListForEdit,
} from '@/features/playerLineupEdit';
import { lightThemeVars } from '@/styles/theme.css';

import * as styles from './PlayersEditView.css';

export const PlayersEditView = ({ matchId }: { matchId: number }) => {
  const { data: matchInfo } = useSuspenseQuery(matchQuery.info(matchId));
  const { homeTeamId } = matchInfo.data;
  const { data: homeTeam } = useSuspenseQuery(teamQuery.byId(homeTeamId));
  const { data: matchPlayers } = useSuspenseQuery(matchQuery.players(matchId));
  const { data: teamMembers } = useSuspenseQuery(
    teamQuery.memberList(homeTeamId),
  );
  const allPlayers = teamMembers.data.teamMemberResponses;

  // FIXME: 빠르게 짤 순 있는데 최선인진 모르겠음
  const homeTeamWithoutTeamColor = {
    ...homeTeam.data,
    teamColor: lightThemeVars.color.primary[100],
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.allPlayersRootContainer}>
        <span className={styles.listTopDescription}>* 전체 선수 명단</span>
        <div className={styles.allPlayersContainer}>
          <AllPlayerListForEdit
            matchId={matchId}
            team={homeTeamWithoutTeamColor}
            players={allPlayers}
          />
        </div>
        <span className={styles.listBottomDescription}>
          * 상대팀을 등록하지 않을 경우 빈칸으로 적용됩니다.
        </span>
      </div>
      <div className={styles.fieldContainer}>
        {/* (득점, 어시스트, 경고) 부분 수정 필요 */}
        <StarterPlayerGridForEdit
          matchId={matchId}
          team={homeTeamWithoutTeamColor}
          players={matchPlayers.data.homeTeam.starters}
        />
      </div>
      <div className={styles.matchPlayerListRootContainer}>
        <div className={styles.starterListContainer}>
          {/* 팀 프로필 사진 + 팀 이름 부분 수정 필요 (-> 선발 선수 명단, 대기 선수 명단) */}
          <StarterPlayerListForEdit
            matchId={matchId}
            team={homeTeamWithoutTeamColor}
            players={matchPlayers.data.homeTeam.starters}
          />
        </div>
        <div className={styles.subListContainer}>
          <SubPlayerListForEdit
            matchId={matchId}
            team={homeTeamWithoutTeamColor}
            players={matchPlayers.data.homeTeam.substitutes}
          />
        </div>
        <button className={styles.nextButton}>다음으로</button>
      </div>
    </div>
  );
};
