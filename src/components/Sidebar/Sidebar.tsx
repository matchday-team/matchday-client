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

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

export function Sidebar({ isOpen, toggle }: SidebarProps) {
  const matches = useMatches();
  const currentPath = matches[matches.length - 1]?.pathname || '/';
  const navItems = useMemo(
    () => [
      {
        to: '/',
        icon: <HomeIcon className={styles.icon} />,
        label: '홈 (매치 리스트)',
        path: '/',
      },
      {
        to: '/matches/56/record',
        icon: <RecordIcon className={styles.icon} />,
        label: '매치 기록 (id: 56)',
        path: '/matches/56/record',
      },
      {
        to: '/matches/56',
        icon: <SearchIcon className={styles.icon} />,
        label: '매치 조회 (id: 56)',
        path: '/matches/56',
      },
      {
        to: '/matches/create',
        icon: <RecordIcon className={styles.icon} />,
        label: '매치 생성',
        path: '/matches/create',
      },
      {
        to: '/matches/56/entry',
        icon: <PlayerIcon className={styles.icon} />,
        label: '명단 등록 (id: 56)',
        path: '/matches/56/entry',
      },
      {
        to: '/users/create',
        icon: <PlayerIcon className={styles.icon} />,
        label: '유저 생성',
        path: '/users/create',
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
      <button onClick={toggle} className={styles.toggleButton}>
        <CheckRightIcon
          className={`${styles.rightIcon} ${isOpen ? styles.rotateIcon : ''}`}
        />
      </button>

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
