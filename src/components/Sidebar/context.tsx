import { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  SIDEBAR_BREAKPOINT,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_SMALL,
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

export function SidebarProvider({ children }: { children: ReactNode }) {
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
    if (!showToggle) return;
    setIsOpen(prev => !prev);
    setWidth(prev =>
      prev === SIDEBAR_WIDTH_SMALL ? SIDEBAR_WIDTH : SIDEBAR_WIDTH_SMALL,
    );
  }, [showToggle]);

  return (
    <SidebarContext.Provider value={{ isOpen, width, toggle, showToggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
