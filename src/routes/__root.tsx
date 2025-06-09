import { Outlet, createRootRoute, redirect } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { OverlayProvider } from 'overlay-kit';

import { Layout } from '@/components';
import { useLoggedInUserStore } from '@/stores';

export const Route = createRootRoute({
  component: Root,
  // NOTE: 빠른 구현을 위해 임시로 _root에서 모든 경로에 대해 로그인 요청함
  // 제대로 구현한다면 _auth 레이아웃을 통해 체크
  beforeLoad: async context => {
    if (context.location.pathname === '/login') {
      return;
    }

    const { isLoggedIn } = useLoggedInUserStore.getState();
    if (!isLoggedIn) {
      throw redirect({ to: '/login' });
    }
  },
});

function Root() {
  return (
    <OverlayProvider>
      <Layout>
        <Outlet />
      </Layout>
      <TanStackRouterDevtools />
    </OverlayProvider>
  );
}
