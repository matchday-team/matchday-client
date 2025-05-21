import { ReactNode, useCallback, useEffect, useState } from 'react';

import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { SIDEBAR_BREAKPOINT } from '@/constants';
import { debounce } from '@/utils/debounce';

import * as styles from './Layout.css';

const checkIsLargeScreen = (width: number) => width >= SIDEBAR_BREAKPOINT;

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(checkIsLargeScreen(window.innerWidth));

  useEffect(() => {
    const handleResize = debounce(() => {
      const width = window.innerWidth;
      setIsOpen(checkIsLargeScreen(width));
    }, 100);

    handleResize();

    const observer = new window.ResizeObserver(handleResize);
    observer.observe(window.document.body);

    return () => {
      observer.disconnect();
    };
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
