import { Link, useMatches } from '@tanstack/react-router';

import * as icons from '@/assets/icons';

import { useSidebar } from './context';
import * as styles from './sidebar.css';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
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
  icon: React.ReactNode;
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
      {showArrow && <icons.CheckRightIcon className={styles.smallIcon} />}
    </Link>
  );
}

export function Sidebar() {
  const { isOpen, toggle, showToggle } = useSidebar();
  const matches = useMatches();
  const currentPath = matches[matches.length - 1]?.pathname || '/';

  return (
    <aside
      className={styles.container({ width: isOpen ? 'default' : 'toggle' })}
    >
      {showToggle && (
        <button onClick={toggle} className={styles.toggleButton({ isOpen })}>
          <icons.CheckRightIcon className={styles.toggleIcon} />
        </button>
      )}

      {/* 관리자 섹션 */}
      <div className={styles.logo}>
        <img src={icons.SeoulLogo} alt='FC 서울' className={styles.logoImage} />
        {isOpen && (
          <>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>FC 서울</span>
              <span className={styles.logoSubtitle}>관리자</span>
            </div>
            <div className={styles.adminIcon}>
              <icons.UserIcon className={styles.largeIcon} />
            </div>
          </>
        )}
      </div>

      {/* Sidebar Nav */}
      <nav className={styles.nav}>
        <NavItem
          to='/'
          icon={<icons.HomeIcon className={styles.icon} />}
          label={isOpen ? '홈' : undefined}
          isActive={currentPath === '/'}
        />
        <NavItem
          to='.'
          icon={<icons.RecordIcon className={styles.icon} />}
          label={isOpen ? '매치 기록' : undefined}
          isActive={currentPath === '.'}
        />
        <NavItem
          to='.'
          icon={<icons.SearchIcon className={styles.icon} />}
          label={isOpen ? '매치 조회' : undefined}
          isActive={currentPath === '.'}
        />
        <NavItem
          to='.'
          icon={<icons.PlayerIcon className={styles.icon} />}
          label={isOpen ? '선수 명단' : undefined}
          isActive={currentPath === '.'}
        />
      </nav>

      {/* footer */}
      <div className={styles.footer}>
        <FooterItem
          to='.'
          icon={<icons.HelpCircleIcon className={styles.icon} />}
          label={isOpen ? '도움말' : undefined}
          showArrow={isOpen}
        />
        <FooterItem
          to='.'
          icon={<icons.SettingsIcon className={styles.icon} />}
          label={isOpen ? '설정' : undefined}
          showArrow={isOpen}
        />
      </div>

      {/* Match Day Logo */}
      <div className={styles.matchDayLogo}>
        <div className={styles.footerItemIcon}>
          <icons.LogoIcon className={styles.matchDayIcon} />
        </div>
        {isOpen && <icons.LogoTextIcon className={styles.logoTextImage} />}
      </div>
    </aside>
  );
}
