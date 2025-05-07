import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { MainLayout } from '@/components';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <MainLayout />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
