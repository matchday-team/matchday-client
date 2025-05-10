import { ReactNode } from 'react';

import { Layout, useSidebar } from '@/components';

import * as styles from './MainLayout.css';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
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
        {children}
      </main>
    </Layout>
  );
}
