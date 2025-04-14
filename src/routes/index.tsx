import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { exampleQueryById } from '@/apis';
import { Button, CommonLoader } from '@/components';
import { queryClient } from '@/react-query-provider';
import { lightThemeClass } from '@/styles/theme.css';

export const Route = createFileRoute('/')({
  component: HomePage,
  loader: () => queryClient.ensureQueryData(exampleQueryById(1)),
  pendingComponent: CommonLoader,
});

function HomePage() {
  const { data } = useSuspenseQuery(exampleQueryById(1));

  return (
    <div className={lightThemeClass}>
      <h3>Home</h3>
      <Button>Click me</Button>
      <p>{data.message}</p>
    </div>
  );
}
