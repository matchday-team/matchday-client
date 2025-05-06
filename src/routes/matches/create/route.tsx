import { createFileRoute } from '@tanstack/react-router';
import { SnackbarProvider } from 'notistack';

import { teamQuery } from '@/apis/queries';
import { queryClient } from '@/react-query-provider';

import { MatchCreateForm } from './-components';

// snackbar autoHide 비활성화 옵션이 없어서 하루로 설정
const ONE_DAY = 1000 * 60 * 60 * 24;

export const Route = createFileRoute('/matches/create')({
  component: MatchCreatePage,
  loader: async () => {
    await queryClient.ensureQueryData(teamQuery.listAllQuery);
  },
});

function MatchCreatePage() {
  return (
    <SnackbarProvider
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      maxSnack={3}
      autoHideDuration={ONE_DAY}
    >
      <MatchCreateForm />
    </SnackbarProvider>
  );
}
