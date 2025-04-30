import { ReactNode, useMemo } from 'react';

import { Link, useMatches } from '@tanstack/react-router';

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

import { useSidebar } from './context';
import * as styles from './sidebar.css';

interface NavItemProps {
  to: string;
  icon: ReactNode;
  label?: string;
  isActive: boolean;
}

function NavItem({ to, icon, label, isActive }: NavItemProps) {
  return (
    <Link to={to} className={styles.navItem({ active: isActive })}>
      {icon}
      {label && <span>{label}</span>}
    </Link>
  );
}

interface FooterItemProps {
  to: string;
  icon: ReactNode;
  label?: string;
  showArrow?: boolean;
}

function FooterItem({ to, icon, label, showArrow }: FooterItemProps) {
  return (
    <Link to={to} className={styles.footerItem}>
      <div className={styles.footerItemIcon}>
        {icon}
        {label && <span>{label}</span>}
      </div>
      {showArrow && <CheckRightIcon className={styles.smallIcon} />}
    </Link>
  );
}

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
    <aside
      className={styles.container({ width: isOpen ? 'default' : 'toggle' })}
    >
      {showToggle && (
        <button onClick={toggle} className={styles.toggleButton({ isOpen })}>
          <CheckRightIcon className={styles.toggleIcon} />
        </button>
      )}

      <div className={styles.logo}>
        <img src={SeoulLogo} alt='FC 서울' className={styles.logoImage} />
        {isOpen && (
          <>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>FC 서울</span>
              <span className={styles.logoSubtitle}>관리자</span>
            </div>
            <div className={styles.adminIcon}>
              <UserIcon className={styles.largeIcon} />
            </div>
          </>
        )}
      </div>

      <nav className={styles.nav}>
        {navItems.map(item => (
          <NavItem
            key={item.label}
            to={item.to}
            icon={item.icon}
            label={isOpen ? item.label : undefined}
            isActive={currentPath === item.path}
          />
        ))}
      </nav>

      <div className={styles.footer}>
        {footerItems.map(item => (
          <FooterItem
            key={item.label}
            to={item.to}
            icon={item.icon}
            label={isOpen ? item.label : undefined}
            showArrow={isOpen}
          />
        ))}
      </div>

      <div className={styles.matchDayLogo}>
        <div className={styles.footerItemIcon}>
          <LogoIcon className={styles.matchDayIcon} />
        </div>
        {isOpen && <LogoTextIcon className={styles.logoTextImage} />}
      </div>
    </aside>
  );
}
