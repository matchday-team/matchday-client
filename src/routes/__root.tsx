import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { MainLayout, SidebarProvider } from '@/components';

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <SidebarProvider>
        <MainLayout />
      </SidebarProvider>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
