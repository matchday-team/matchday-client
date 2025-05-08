import { createFileRoute } from '@tanstack/react-router';

import { teamQuery } from '@/apis/queries';
import { queryClient } from '@/react-query-provider';

import { MatchCreateForm, UserCreateAndJoinForm } from './-components';
import * as styles from './-components/Admin.css';
import { MatchModifyView } from './-components/MatchModifyView';

export const Route = createFileRoute('/admin')({
  component: AdminPage,
  loader: async () => {
    await queryClient.ensureQueryData(teamQuery.listAllQuery);
  },
});

function AdminPage() {
  return (
    <div className={styles.rootContainer}>
      <h1>MatchDay Admin</h1>
      <div className={styles.formsContainer}>
        <UserCreateAndJoinForm />
        <MatchCreateForm />
        <MatchModifyView />
      </div>
    </div>
  );
}
