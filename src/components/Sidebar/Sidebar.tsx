import { useMemo } from 'react';

import { useSuspenseQuery } from '@tanstack/react-query';

import { userQuery } from '@/apis/queries';
import {
  CheckRightIcon,
  HelpCircleIcon,
  HomeIcon,
  LogoIcon,
  LogoTextIcon,
  PlayerIcon,
  RecordIcon,
  SeoulLogo,
  SettingsIcon,
  SoccerBallBoxyIcon,
  UserIcon,
} from '@/assets/icons';
import { useUserSettingsModalStore } from '@/stores';

import { FooterItemList } from './FooterItem';
import { NavItemList } from './NavItem';
import * as styles from './Sidebar.css';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

export function Sidebar({ isOpen, toggle }: SidebarProps) {
  const { open } = useUserSettingsModalStore();
  const { data: user } = useSuspenseQuery(userQuery.me);

  const navItems = [
    {
      to: '/',
      icon: <HomeIcon className={styles.icon} />,
      label: '팀 매치 리스트',
    },
    {
      to: `/teams/${user?.teamId}`,
      icon: <HomeIcon className={styles.icon} />,
      label: '팀 프로필',
    },
    {
      to: '/matches/create',
      icon: <RecordIcon className={styles.icon} />,
      label: '매치 등록',
    },
    {
      to: '/teams/create',
      icon: <SoccerBallBoxyIcon className={styles.icon} />,
      label: '팀 등록',
    },
    {
      to: '/users/create',
      icon: <PlayerIcon className={styles.icon} />,
      label: '[임시] 임시 유저 등록',
    },
  ];

  const footerItems = useMemo(
    () => [
      {
        to: '.',
        icon: <HelpCircleIcon className={styles.icon} />,
        label: '도움말',
        disabled: true,
      },
      {
        to: '.',
        icon: <SettingsIcon className={styles.icon} />,
        label: '설정',
        disabled: false,
        onClick: open,
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
        hello
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
        <NavItemList items={navItems} isOpen={isOpen} />
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
