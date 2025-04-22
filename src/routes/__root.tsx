import { useEffect, useState } from 'react';

import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

import { MainLayout, SidebarProvider } from '@/components';

export const Route = createRootRoute({
  component: Root,
});

function MainLayout() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1440);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main
        style={{
          paddingTop: '64px',
          paddingLeft: isSmallScreen ? '60px' : '360px',
          backgroundColor: lightThemeVars.color.white.hover,
          minHeight: '100vh',
          width: isSmallScreen ? 'calc(100% - 62px)' : 'calc(100% - 360px)',
          marginLeft: 'auto',
        }}
      >
        <Outlet />
      </main>
    </div>
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
