import { createFileRoute } from '@tanstack/react-router';
import { SnackbarProvider } from 'notistack';

import { teamQuery } from '@/apis/queries';
import { queryClient } from '@/react-query-provider';

import { MatchCreateForm, UserCreateAndJoinForm } from './-components';
import * as styles from './-components/Admin.css';
import { UserMatchJoinForm } from './-components/UserMatchJoinForm';

// snackbar autoHide 비활성화 옵션이 없어서 하루로 설정
const ONE_DAY = 1000 * 60 * 60 * 24;

export const Route = createFileRoute('/admin')({
  component: AdminPage,
  loader: async () => {
    await queryClient.ensureQueryData(teamQuery.listAllQuery);
  },
});

function AdminPage() {
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      maxSnack={3}
      autoHideDuration={ONE_DAY}
    >
      <div className={styles.rootContainer}>
        <UserMatchJoinForm />
        <UserCreateAndJoinForm />
        <MatchCreateForm />
      </div>
    </SnackbarProvider>
  );
}
