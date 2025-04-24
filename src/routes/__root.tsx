import { useEffect, useState } from 'react';

import { Outlet, createRootRoute } from '@tanstack/react-router';

import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { SidebarProvider } from '@/components/Sidebar/context';
import {
  navbarHeight,
  sidebarBreakpoint,
  sidebarWidth,
  sidebarWidthToggle,
} from '@/constants';
import { lightThemeVars } from '@/styles/theme.css';

export const Route = createRootRoute({
  component: Root,
});

function MainLayout() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= sidebarBreakpoint);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentSidebarWidth = isSmallScreen ? sidebarWidthToggle : sidebarWidth;

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main
        style={{
          paddingTop: navbarHeight,
          paddingLeft: currentSidebarWidth,
          backgroundColor: lightThemeVars.color.white.hover,
          minHeight: '100vh',
          width: `calc(100% - ${currentSidebarWidth}px)`,
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
    <SidebarProvider>
      <MainLayout />
    </SidebarProvider>
  );
}
