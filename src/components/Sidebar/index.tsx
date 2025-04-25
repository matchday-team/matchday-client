import { Link, useMatches } from '@tanstack/react-router';

import * as icons from '@/assets/icons';
import { useSidebar } from '@/components/Sidebar/context';
import * as styles from '@/components/Sidebar/sidebar.css';

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
          <img
            src={icons.CheckRightIcon}
            alt='Toggle'
            className={styles.toggleIcon}
          />
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
              <img
                src={icons.UserIcon}
                alt='Admin'
                className={styles.largeIcon}
              />
            </div>
          </>
        )}
      </div>

      {/* 사이드바 섹션 */}
      <nav className={styles.nav}>
        {isOpen ? (
          <>
            <Link
              to='/'
              className={styles.navItem({ active: currentPath === '/' })}
            >
              <img
                src={
                  currentPath === '/' ? icons.HomeBlackIcon : icons.HomeGreyIcon
                }
                alt='Home'
                className={styles.icon}
              />
              <span>홈</span>
            </Link>

            <Link
              to='.'
              className={styles.navItem({ active: currentPath === '.' })}
            >
              <img
                src={
                  currentPath === '.'
                    ? icons.RecordBlackIcon
                    : icons.RecordGreyIcon
                }
                alt='Match Record'
                className={styles.icon}
              />
              <span>매치 기록</span>
            </Link>

            <Link
              to='.'
              className={styles.navItem({ active: currentPath === '.' })}
            >
              <img
                src={
                  currentPath === '.'
                    ? icons.SearchBlackIcon
                    : icons.SearchGreyIcon
                }
                alt='Match List'
                className={styles.icon}
              />
              <span>매치 조회</span>
            </Link>

            <Link
              to='.'
              className={styles.navItem({ active: currentPath === '.' })}
            >
              <img
                src={
                  currentPath === '.'
                    ? icons.PlayerBlackIcon
                    : icons.PlayerGreyIcon
                }
                alt='Player List'
                className={styles.icon}
              />
              <span>선수 명단</span>
            </Link>
          </>
        ) : (
          <>
            <Link
              to='/'
              className={styles.navItem({ active: currentPath === '/' })}
            >
              <img
                src={
                  currentPath === '/' ? icons.HomeBlackIcon : icons.HomeGreyIcon
                }
                alt='Home'
                className={styles.icon}
              />
            </Link>

            <Link
              to='.'
              className={styles.navItem({ active: currentPath === '.' })}
            >
              <img
                src={
                  currentPath === '.'
                    ? icons.RecordBlackIcon
                    : icons.RecordGreyIcon
                }
                alt='Match Record'
                className={styles.icon}
              />
            </Link>

            <Link
              to='.'
              className={styles.navItem({ active: currentPath === '.' })}
            >
              <img
                src={
                  currentPath === '.'
                    ? icons.SearchBlackIcon
                    : icons.SearchGreyIcon
                }
                alt='Match List'
                className={styles.icon}
              />
            </Link>

            <Link
              to='.'
              className={styles.navItem({ active: currentPath === '.' })}
            >
              <img
                src={
                  currentPath === '.'
                    ? icons.PlayerBlackIcon
                    : icons.PlayerGreyIcon
                }
                alt='Player List'
                className={styles.icon}
              />
            </Link>
          </>
        )}
      </nav>

      {/* 푸터섹션 */}
      <div className={styles.footer}>
        {isOpen ? (
          <>
            <Link to='.' className={styles.footerItem}>
              <div className={styles.footerItemIcon}>
                <img
                  src={icons.HelpCircleIcon}
                  alt='Help'
                  className={styles.icon}
                />
                <span>도움말</span>
              </div>
              <img
                src={icons.CheckRightIcon}
                alt='Arrow'
                className={styles.smallIcon}
              />
            </Link>
            <Link to='.' className={styles.footerItem}>
              <div className={styles.footerItemIcon}>
                <img
                  src={icons.SettingsIcon}
                  alt='Settings'
                  className={styles.icon}
                />
                <span>설정</span>
              </div>
              <img
                src={icons.CheckRightIcon}
                alt='Arrow'
                className={styles.smallIcon}
              />
            </Link>
          </>
        ) : (
          <>
            <Link to='.' className={styles.footerItem}>
              <div className={styles.footerItemIcon}>
                <img
                  src={icons.HelpCircleIcon}
                  alt='Help'
                  className={styles.icon}
                />
              </div>
            </Link>
            <Link to='.' className={styles.footerItem}>
              <div className={styles.footerItemIcon}>
                <img
                  src={icons.SettingsIcon}
                  alt='Settings'
                  className={styles.icon}
                />
              </div>
            </Link>
          </>
        )}
      </div>

      {/* 매치 데이 로고섹션 */}
      <div className={styles.matchDayLogo}>
        <div className={styles.footerItemIcon}>
          <img
            src={icons.LogoIcon}
            alt='Match Day'
            className={styles.matchDayIcon}
          />
        </div>
        {isOpen && (
          <img
            src={icons.LogoTextIcon}
            alt='Match Day'
            className={styles.logoTextImage}
          />
        )}
      </div>
    </aside>
  );
}
