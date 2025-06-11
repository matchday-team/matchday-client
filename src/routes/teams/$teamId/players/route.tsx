import { createFileRoute } from '@tanstack/react-router';

import { MemberManagement } from './-components';

export const Route = createFileRoute('/teams/$teamId/players')({
  component: RouteComponent,
});

function RouteComponent() {
  return <MemberManagement />;
}
