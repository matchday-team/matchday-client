// sidebar 상태관리를 위해 react context 사용
import { createContext, useContext, useEffect, useState } from 'react';

import {
  SIDEBAR_BREAKPOINT,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_TOGGLE,
} from '@/constants';

interface SidebarContextType {
  isOpen: boolean;
  width: number;
  toggle: () => void;
  showToggle: boolean;
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  width: SIDEBAR_WIDTH,
  toggle: () => {},
  showToggle: false,
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [width, setWidth] = useState(SIDEBAR_WIDTH);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const isSmallScreen = viewportWidth <= SIDEBAR_BREAKPOINT;
      setShowToggle(isSmallScreen);

      if (isSmallScreen) {
        setIsOpen(false);
        setWidth(SIDEBAR_WIDTH_TOGGLE);
      } else {
        setIsOpen(true);
        setWidth(SIDEBAR_WIDTH);
      }
    };

    // 초기 설정
    handleResize();

    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);

    // 클린업
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggle = () => {
    if (showToggle) {
      setIsOpen(prev => !prev);
      setWidth(prev =>
        prev === SIDEBAR_WIDTH_TOGGLE ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_TOGGLE,
      );
    }
  };

  return (
    <SidebarContext.Provider value={{ isOpen, width, toggle, showToggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
