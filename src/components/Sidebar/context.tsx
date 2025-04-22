// sidebar 상태관리를 위해 react context 사용
import { createContext, useContext, useEffect, useState } from 'react';

interface SidebarContextType {
  isOpen: boolean;
  width: number;
  toggle: () => void;
  showToggle: boolean;
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  width: 360,
  toggle: () => {},
  showToggle: false,
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [width, setWidth] = useState(360);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const isSmallScreen = viewportWidth <= 1440;
      setShowToggle(isSmallScreen);

      if (isSmallScreen) {
        setIsOpen(false);
        setWidth(60);
      } else {
        setIsOpen(true);
        setWidth(360);
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
      setWidth(prev => (prev === 60 ? 360 : 60));
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
