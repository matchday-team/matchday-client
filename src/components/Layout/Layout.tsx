import { ReactNode, useCallback, useEffect, useState } from 'react';

import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import {
  SIDEBAR_BREAKPOINT,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_SMALL,
} from '@/constants';

import * as styles from './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [width, setWidth] = useState(SIDEBAR_WIDTH);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= SIDEBAR_BREAKPOINT;
      setShowToggle(isSmallScreen);
      setIsOpen(!isSmallScreen);
      setWidth(isSmallScreen ? SIDEBAR_WIDTH_SMALL : SIDEBAR_WIDTH);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
    setWidth(prev =>
      prev === SIDEBAR_WIDTH_SMALL ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_SMALL,
    );
  }, []);

  return (
    <div className={styles.layoutContainer}>
      <Sidebar isOpen={isOpen} toggle={toggle} showToggle={showToggle} />
      <div className={styles.mainContent}>
        <Navbar width={width} />
        <main className={styles.contentArea}>
          <main
            className={styles.contentAreaNested}
            style={{
              paddingLeft: width,
              width: `calc(100% - ${width}px)`,
            }}
          >
            {children}
          </main>
        </main>
      </div>
    </div>
  );
}
