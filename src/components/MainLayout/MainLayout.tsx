import { useEffect, useState } from 'react';

import { Outlet } from '@tanstack/react-router';

import { Layout } from '@/components';
import {
  NAVBAR_HEIGHT,
  SIDEBAR_BREAKPOINT,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_SMALL,
} from '@/constants';
import { lightThemeVars } from '@/styles/theme.css';

export function MainLayout() {
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
    ? SIDEBAR_WIDTH_SMALL
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
