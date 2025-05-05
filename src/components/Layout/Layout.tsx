import { ReactNode } from 'react';

import { Navbar } from '@/components/Navbar';
import { Sidebar, SidebarProvider } from '@/components/Sidebar';

import * as styles from './layout.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className={styles.layoutContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <Navbar />
          <main className={styles.contentArea}>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
