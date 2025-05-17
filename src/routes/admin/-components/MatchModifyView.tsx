import { useState } from 'react';

import { useQuery, useSuspenseQuery } from '@tanstack/react-query';

import { matchRecordQuery, teamQuery } from '@/apis/queries';
import { ToggleableStartingPlayers } from '@/components';

import * as styles from './MatchModifyView.css';
import { UserMatchJoinForm } from './UserMatchJoinForm';

export const MatchModifyView = () => {
  const { data: teamList } = useSuspenseQuery(teamQuery.listAllQuery);
  const [selectedTeamId, setSelectedTeamId] = useState<number>(
    teamList.data[0].id,
  );
  const [selectedMatchId, setSelectedMatchId] = useState<number>(-1); // 필요?
  const { data: matchPlayerList } = useQuery({
    ...matchRecordQuery.playersQuery(selectedMatchId),
    enabled: selectedMatchId !== -1,
  });

  const { data: matchList } = useQuery({
    ...matchRecordQuery.listQuery(selectedTeamId),
    enabled: selectedTeamId !== -1,
  });

  const { data: homeTeam } = useQuery(teamQuery.byIdQuery(selectedTeamId));
  const { data: awayTeam } = useQuery({
    ...teamQuery.byIdQuery(
      // NOTE: 임시로 처리
      matchList?.data.find(match => match.matchId === selectedMatchId)
        ?.awayTeamId ?? -1,
    ),
    enabled: selectedMatchId !== -1,
  });

  if (!homeTeam || !awayTeam) {
    return null;
  }

  return (
    <div className={styles.rootContainer}>
      <UserMatchJoinForm
        selectedTeamId={selectedTeamId}
        matchList={matchList?.data ?? []}
        teamList={teamList.data}
        onSelectTeam={setSelectedTeamId}
        onSelectMatch={setSelectedMatchId}
      />
      <div>
        <h2>home</h2>
        <ToggleableStartingPlayers
          team={homeTeam.data}
          players={matchPlayerList?.data.homeTeam.starters ?? []}
          onSwap={() => {}}
        />
      </div>

      <div>
        <h2>away</h2>
        <ToggleableStartingPlayers
          team={awayTeam.data}
          players={matchPlayerList?.data.awayTeam.starters ?? []}
          onSwap={() => {}}
        />
      </div>
    </div>
  );
};
