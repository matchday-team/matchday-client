import { useEffect } from 'react';

import { createFileRoute } from '@tanstack/react-router';

import { teamQuery } from '@/apis/queries';
import { queryClient } from '@/react-query-provider';
import { usePageTitleStore } from '@/stores';

import { MatchCreateForm } from './-components';
import * as styles from './-components/MatchCreatePage.css';

export const Route = createFileRoute('/matches/create')({
  component: MatchCreatePage,
  loader: async () => {
    await queryClient.ensureQueryData(teamQuery.listAllQuery);
  },
});

// 별도 팀 명단 등록으로도 들어올 수 있어야 함
// 팀 명단으로 진입 가능하게
function MatchCreatePage() {
  const { setTitle } = usePageTitleStore();
  useEffect(() => {
    setTitle('매치 생성');
  }, []);

  return (
    <div className={styles.rootContainer}>
      <div className={styles.formsContainer}>
        <MatchCreateForm />
      </div>
    </div>
  );
}
