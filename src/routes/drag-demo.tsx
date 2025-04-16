import { createFileRoute } from '@tanstack/react-router';

import { Grid } from '@/components';

export const Route = createFileRoute('/drag-demo')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Grid />;
}
