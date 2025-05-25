import { createFileRoute } from '@tanstack/react-router';

import { teamQuery } from '@/apis/queries';
import { usePageTitle } from '@/hooks';
import { queryClient } from '@/react-query-provider';

import { PlayersEditView } from './-components';
import * as styles from './-components/MatchPlayerEditPage.css';

export const Route = createFileRoute('/matches/$matchId/players/edit')({
  component: MatchPlayerEditPage,
  loader: async () => {
    await queryClient.ensureQueryData(teamQuery.listAll);
  },
});

function MatchPlayerEditPage() {
  usePageTitle('매치 생성');

  const { matchId: _matchId } = Route.useParams();
  const matchId = Number(_matchId);

  return (
    <div className={styles.rootContainer}>
      <h2 className={styles.title}>팀 명단 설정</h2>
      <div className={styles.editViewRootContainer}>
        <PlayersEditView matchId={matchId} />
      </div>
    </div>
  );
}
