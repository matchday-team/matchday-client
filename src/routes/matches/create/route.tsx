import { createFileRoute } from '@tanstack/react-router';
import { SnackbarProvider } from 'notistack';

import { teamQuery } from '@/apis/queries';
import { queryClient } from '@/react-query-provider';

import { MatchCreateForm } from './-components';

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
      autoHideDuration={3000}
    >
      <MatchCreateForm />
    </SnackbarProvider>
  );
}
