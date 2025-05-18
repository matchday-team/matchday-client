import { ReactNode, useCallback, useEffect, useState } from 'react';

import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { SIDEBAR_BREAKPOINT } from '@/constants';

import * as styles from './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= SIDEBAR_BREAKPOINT;
      setIsOpen(!isSmallScreen);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <div className={styles.layoutContainer}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <div className={styles.mainContent}>
        <Navbar isOpen={isOpen} />
        <main className={styles.contentArea}>{children}</main>
      </div>
    </div>
  );
}
