import { createFileRoute } from '@tanstack/react-router';
import { SnackbarProvider } from 'notistack';

import { MatchCreateForm } from './-components';

export const Route = createFileRoute('/matches/create')({
  component: MatchCreatePage,
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
