import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { getTeamsQuery } from '@/apis/teams';
import { Button, CommonLoader } from '@/components';
import { queryClient } from '@/react-query-provider';

export const Route = createFileRoute('/')({
  component: HomePage,
  loader: () => queryClient.ensureQueryData(getTeamsQuery),
  pendingComponent: CommonLoader,
});

function HomePage() {
  const { data } = useSuspenseQuery(getTeamsQuery);

  return (
    <div>
      <h3>Home</h3>
      <Button>Click me</Button>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
