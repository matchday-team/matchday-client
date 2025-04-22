import { Link, useMatches } from '@tanstack/react-router';

import {
  CheckRightIcon,
  HelpCircleIcon,
  HomeBlackIcon,
  HomeGreyIcon,
  LogoIcon,
  LogoTextIcon,
  PlayerBlackIcon,
  PlayerGreyIcon,
  SearchBlackIcon,
  SearchGreyIcon,
  SeoulLogo,
  SettingsIcon,
  UserIcon,
} from '@/assets/icons';
import { useSidebar } from '@/components/Sidebar/context';
import * as styles from '@/components/Sidebar/sidebar.css';

export function Sidebar() {
  const { isOpen, width, toggle, showToggle } = useSidebar();
  const matches = useMatches();
  const currentPath = matches[matches.length - 1]?.pathname || '/';

  return (
    <aside className={styles.container} style={{ width: `${width}px` }}>
      {showToggle && (
        <button
          onClick={toggle}
          className={styles.toggleButton}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
          aria-label={isOpen ? 'sidebar close' : 'sidebar open'}
        >
          <img
            src={CheckRightIcon}
            alt='Toggle'
            style={{ width: '12px', height: '12px' }}
          />
        </button>
      )}

      <div className={styles.logo}>
        <img src={SeoulLogo} alt='FC 서울' width={40} height={40} />
        {isOpen && (
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>FC 서울</span>
            <span className={styles.logoSubtitle}>관리자</span>
          </div>
        )}
        {isOpen && (
          <div className={styles.adminIcon}>
            <img
              src={UserIcon}
              alt='Admin'
              style={{ width: '24px', height: '24px' }}
            />
          </div>
        )}
      </div>

      <nav className={styles.nav}>
        <Link
          to='/'
          className={styles.navItem({ active: currentPath === '/' })}
        >
          <img
            src={currentPath === '/' ? HomeBlackIcon : HomeGreyIcon}
            alt='Home'
            style={{ width: '20px', height: '20px' }}
          />
          {isOpen && <span>홈</span>}
        </Link>

        {/* <Link
          to='/record'
          className={styles.navItem({
            active: currentPath === '.',
          })}
        >
          <img
            src={currentPath === '.' ? RecordBlackIcon : RecordGreyIcon}
            alt='Match Record'
            style={{ width: '20px', height: '20px' }}
          />
          {isOpen && <span>매치 기록</span>}
        </Link> */}

        <Link
          to='.'
          className={styles.navItem({
            active: currentPath === '.',
          })}
        >
          <img
            src={currentPath === '.' ? SearchBlackIcon : SearchGreyIcon}
            alt='Match List'
            style={{ width: '20px', height: '20px' }}
          />
          {isOpen && <span>매치 조회</span>}
        </Link>

        <Link
          to='.'
          className={styles.navItem({ active: currentPath === '.' })}
        >
          <img
            src={currentPath === '.' ? PlayerBlackIcon : PlayerGreyIcon}
            alt='Player List'
            style={{ width: '20px', height: '20px' }}
          />
          {isOpen && <span>선수 명단</span>}
        </Link>
      </nav>

      <div className={styles.footer}>
        <Link to='.' className={styles.footerItem}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src={HelpCircleIcon}
              alt='Help'
              style={{ width: '20px', height: '20px' }}
            />
            {isOpen && <span>도움말</span>}
          </div>
          {isOpen && (
            <img
              src={CheckRightIcon}
              alt='Arrow'
              style={{ width: '16px', height: '16px' }}
            />
          )}
        </Link>
        <Link to='.' className={styles.footerItem}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img
              src={SettingsIcon}
              alt='Settings'
              style={{ width: '20px', height: '20px' }}
            />
            {isOpen && <span>설정</span>}
          </div>
          {isOpen && (
            <img
              src={CheckRightIcon}
              alt='Arrow'
              style={{ width: '16px', height: '16px' }}
            />
          )}
        </Link>
      </div>

      <div className={styles.matchDayLogo}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={LogoIcon} alt='Match Day' className={styles.matchDayIcon} />
        </div>
        {isOpen && (
          <img src={LogoTextIcon} alt='Match Day' style={{ height: '14px' }} />
        )}
      </div>
    </aside>
  );
}
