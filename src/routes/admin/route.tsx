import { createFileRoute } from '@tanstack/react-router';

import { UserCreateAndJoinForm } from './-components';

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <UserCreateAndJoinForm />
    </div>
  );
}
