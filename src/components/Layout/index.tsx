import React from 'react';

import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { SidebarProvider } from '@/components/Sidebar/context';

import * as styles from './layout.css';

interface LayoutProps {
  children: React.ReactNode;
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
