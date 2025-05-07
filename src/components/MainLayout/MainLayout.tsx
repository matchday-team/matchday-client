import { Outlet } from '@tanstack/react-router';

import { Layout, useSidebar } from '@/components';

import * as styles from './MainLayout.css';

export function MainLayout() {
  const { width } = useSidebar();

  return (
    <Layout>
      <main
        className={styles.main}
        style={{
          paddingLeft: width,
          width: `calc(100% - ${width}px)`,
        }}
      >
        <Outlet />
      </main>
    </Layout>
  );
}
