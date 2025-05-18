import { createFileRoute } from '@tanstack/react-router';

import { teamQuery } from '@/apis/queries';
import { queryClient } from '@/react-query-provider';

import { UserCreateAndJoinForm } from './-components';
import * as styles from './-components/UserCreatePage.css';

export const Route = createFileRoute('/users/create')({
  component: UserCreatePage,
  loader: async () => {
    await queryClient.ensureQueryData(teamQuery.listAllQuery);
  },
});

function UserCreatePage() {
  return (
    <div className={styles.rootContainer}>
      <h1>유저 생성</h1>
      <div className={styles.formsContainer}>
        <UserCreateAndJoinForm />
      </div>
    </div>
  );
}
