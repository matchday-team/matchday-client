import { useSuspenseQuery } from '@tanstack/react-query';

import { MatchUserResponse, TeamMemberResponse } from '@/apis/models';
import { matchQuery, teamQuery } from '@/apis/queries';
import { PlayerList, PlayerOnFieldGrid } from '@/components';
import { lightThemeVars } from '@/styles/theme.css';

import * as styles from './PlayersEditView.css';

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

export const PlayersEditView = ({ matchId }: { matchId: number }) => {
  const { data: matchInfo } = useSuspenseQuery(matchQuery.info(matchId));
  const { homeTeamId } = matchInfo.data;
  const { data: homeTeam } = useSuspenseQuery(teamQuery.byId(homeTeamId));
  const { data: matchPlayers } = useSuspenseQuery(matchQuery.players(matchId));
  const { data: teamMembers } = useSuspenseQuery(
    teamQuery.memberList(homeTeamId),
  );
  const allPlayers = teamMembers.data.teamMemberResponses.map(
    convertToMatchUserResponse,
  );
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
          <PlayerList
            team={homeTeamWithoutTeamColor}
            players={allPlayers}
            onSwap={() => {}}
          />
        </div>
        <span className={styles.listBottomDescription}>
          * 상대팀을 등록하지 않을 경우 빈칸으로 적용됩니다.
        </span>
      </div>
      <div className={styles.fieldContainer}>
        <PlayerOnFieldGrid
          team={homeTeamWithoutTeamColor}
          players={matchPlayers.data.homeTeam.starters}
          onSwap={() => {}}
        />
      </div>
      <div className={styles.matchPlayerListRootContainer}>
        <div className={styles.starterListContainer}>
          <PlayerList
            team={homeTeamWithoutTeamColor}
            players={matchPlayers.data.homeTeam.starters}
            onSwap={() => {}}
          />
        </div>
        <div className={styles.subListContainer}>
          <PlayerList
            team={homeTeamWithoutTeamColor}
            players={matchPlayers.data.homeTeam.substitutes}
            onSwap={() => {}}
          />
        </div>
        <button className={styles.nextButton}>다음으로</button>
      </div>
    </div>
  );
};
