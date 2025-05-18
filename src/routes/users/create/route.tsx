import { useEffect } from 'react';

import { createFileRoute } from '@tanstack/react-router';

import { teamQuery } from '@/apis/queries';
import { queryClient } from '@/react-query-provider';
import { usePageTitleStore } from '@/stores';

import { UserCreateAndJoinForm } from './-components';
import * as styles from './-components/UserCreatePage.css';

export const Route = createFileRoute('/users/create')({
  component: UserCreatePage,
  loader: async () => {
    await queryClient.ensureQueryData(teamQuery.listAllQuery);
  },
});

function UserCreatePage() {
  const { setTitle } = usePageTitleStore();
  useEffect(() => {
    setTitle('유저 생성');
  }, []);

  return (
    <div className={styles.rootContainer}>
      <div className={styles.formsContainer}>
        <UserCreateAndJoinForm />
      </div>
    </div>
  );
}
