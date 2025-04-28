import { useEffect, useState } from 'react';

import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { Layout } from '@/components/Layout';
import { SidebarProvider } from '@/components/Sidebar/context';
import {
  NAVBAR_HEIGHT,
  SIDEBAR_BREAKPOINT,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_TOGGLE,
} from '@/constants';
import { lightThemeVars } from '@/styles/theme.css';
>>>>>>> 0af99f3 (fix: 상수들을 UPPER_CASE로 변경)

export const Route = createRootRoute({
  component: Root,
});

function MainLayout() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= SIDEBAR_BREAKPOINT);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentSidebarWidth = isSmallScreen
    ? SIDEBAR_WIDTH_TOGGLE
    : SIDEBAR_WIDTH;

  return (
    <Layout>
      <main
        style={{
          paddingTop: NAVBAR_HEIGHT,
          paddingLeft: currentSidebarWidth,
          backgroundColor: lightThemeVars.color.white.hover,
          minHeight: '100vh',
          width: `calc(100% - ${currentSidebarWidth}px)`,
          marginLeft: 'auto',
        }}
      >
        <Outlet />
      </main>
    </Layout>
  );
}

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
