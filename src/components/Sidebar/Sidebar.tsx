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

import { FooterItem } from './FooterItem';
import { NavItem } from './NavItem';
import { useSidebar } from './context';
import * as styles from './sidebar.css';

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
        {navItems.map(item => (
          <NavItem
            key={item.label}
            to={item.to}
            icon={item.icon}
            label={isOpen ? item.label : undefined}
            isActive={currentPath === item.path}
            isOpen={isOpen}
          />
        ))}
      </div>

      <div className={styles.footer({ isOpen })}>
        {footerItems.map(item => (
          <FooterItem
            key={item.label}
            to={item.to}
            icon={item.icon}
            label={isOpen ? item.label : undefined}
            showArrow={isOpen}
            isOpen={isOpen}
          />
        ))}
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
