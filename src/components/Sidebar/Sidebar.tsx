import { useMemo } from 'react';

import { useMatches } from '@tanstack/react-router';

import {
  CheckRightIcon,
  HelpCircleIcon,
  HomeIcon,
  LogoIcon,
  LogoTextIcon,
  PlayerIcon,
  RecordIcon,
  SearchIcon,
  SeoulLogo,
  SettingsIcon,
  UserIcon,
} from '@/assets/icons';

import { FooterItemList } from './FooterItem';
import { NavItemList } from './NavItem';
import * as styles from './Sidebar.css';
import { useSidebar } from './SidebarContext';

export function Sidebar() {
  const { isOpen, toggle, showToggle } = useSidebar();
  const matches = useMatches();
  const currentPath = matches[matches.length - 1]?.pathname || '/';

  const navItems = useMemo(
    () => [
      {
        to: '/',
        icon: <HomeIcon className={styles.icon} />,
        label: '홈',
        path: '/',
      },
      {
        to: '.',
        icon: <RecordIcon className={styles.icon} />,
        label: '매치 기록',
        path: '.',
      },
      {
        to: '.',
        icon: <SearchIcon className={styles.icon} />,
        label: '매치 조회',
        path: '.',
      },
      {
        to: '.',
        icon: <PlayerIcon className={styles.icon} />,
        label: '선수 명단',
        path: '.',
      },
    ],
    [],
  );

  const footerItems = useMemo(
    () => [
      {
        to: '.',
        icon: <HelpCircleIcon className={styles.icon} />,
        label: '도움말',
      },
      {
        to: '.',
        icon: <SettingsIcon className={styles.icon} />,
        label: '설정',
      },
    ],
    [],
  );

  return (
    <aside className={styles.container({ isOpen })}>
      {showToggle && (
        <button onClick={toggle} className={styles.toggleButton}>
          <CheckRightIcon
            className={`${styles.rightIcon} ${isOpen ? styles.rotateIcon : ''}`}
          />
        </button>
      )}

      <div className={styles.logo({ isOpen })}>
        <img src={SeoulLogo} alt='FC 서울' className={styles.logoImage} />
        {isOpen && (
          <>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>FC 서울</span>
              <span className={styles.logoSubtitle}>관리자</span>
            </div>
            <div className={styles.adminIcon}>
              <UserIcon className={styles.icon} />
            </div>
          </>
        )}
      </div>

      <div className={styles.nav({ isOpen })}>
        <NavItemList
          items={navItems}
          isOpen={isOpen}
          currentPath={currentPath}
        />
      </div>

      <div className={styles.footer({ isOpen })}>
        <FooterItemList items={footerItems} isOpen={isOpen} />
      </div>

      <div className={styles.matchDayLogo({ isOpen })}>
        <div className={styles.footerItemIcon({ isOpen })}>
          <LogoIcon className={styles.matchDayIcon} />
        </div>
        {isOpen && <LogoTextIcon className={styles.logoTextImage} />}
      </div>
    </aside>
  );
}
