import { Outlet } from '@tanstack/react-router';

import { Layout, useSidebar } from '@/components';
import { NAVBAR_HEIGHT } from '@/constants';
import { lightThemeVars } from '@/styles/theme.css';

export function MainLayout() {
  const { width } = useSidebar();
  const currentSidebarWidth = width;

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
