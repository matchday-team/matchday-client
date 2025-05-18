import { createFileRoute } from '@tanstack/react-router';

import { teamQuery } from '@/apis/queries';
import { queryClient } from '@/react-query-provider';

import * as styles from './-components/MatchCreatePage.css';
import { MatchModifyView } from './-components/MatchModifyView';

export const Route = createFileRoute('/matches/$matchId/entry')({
  component: MatchEntryPage,
  loader: async () => {
    await queryClient.ensureQueryData(teamQuery.listAllQuery);
  },
});

// 별도 팀 명단 등록으로도 들어올 수 있어야 함
// 팀 명단으로 진입 가능하게
function MatchEntryPage() {
  return (
    <div className={styles.rootContainer}>
      <h1>매치 명단 등록</h1>
      <div className={styles.formsContainer}>
        <MatchModifyView />
      </div>
    </div>
  );
}
