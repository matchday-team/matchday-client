import { useState } from 'react';

import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

import { matchQuery, teamQuery } from '@/apis/queries';
import { PlayerOnFieldGrid } from '@/components';

import * as styles from './MatchModifyView.css';
import { UserMatchJoinForm } from './UserMatchJoinForm';

export const MatchModifyView = () => {
  const { data: teamList } = useSuspenseQuery(teamQuery.listAll);
  const [selectedTeamId, setSelectedTeamId] = useState<number>(
    teamList.data[0].id,
  );
  const [selectedMatchId, setSelectedMatchId] = useState<number>(-1); // 필요?
  const { data: matchPlayerList } = useQuery({
    ...matchQuery.players(selectedMatchId),
    enabled: selectedMatchId !== -1,
  });

  const { data: matchList } = useQuery({
    ...matchQuery.list(selectedTeamId),
    enabled: selectedTeamId !== -1,
  });

  const { data: homeTeam } = useQuery(teamQuery.byId(selectedTeamId));
  const { data: awayTeam } = useQuery({
    ...teamQuery.byId(
      // NOTE: 임시로 처리
      matchList?.data.find(match => match.matchId === selectedMatchId)
        ?.awayTeamId ?? -1,
    ),
    enabled: selectedMatchId !== -1,
  });

  return (
    <div className={styles.rootContainer}>
      <UserMatchJoinForm
        selectedTeamId={selectedTeamId}
        matchList={matchList?.data ?? []}
        teamList={teamList.data}
        onSelectTeam={setSelectedTeamId}
        onSelectMatch={setSelectedMatchId}
      />
      <div className={styles.fieldContainer}>
        <h2>home</h2>
        {homeTeam && (
          <PlayerOnFieldGrid
            mode='starter'
            team={homeTeam.data}
            players={matchPlayerList?.data.homeTeam.starters ?? []}
          />
        )}
      </div>

      <div className={styles.fieldContainer}>
        <h2>away</h2>
        {awayTeam && (
          <PlayerOnFieldGrid
            mode='starter'
            team={awayTeam.data}
            players={matchPlayerList?.data.awayTeam.starters ?? []}
          />
        )}
      </div>
    </div>
  );
};
