import { useMatch } from '@tanstack/react-router';

import { usePageTitleStore } from '@/stores';

import * as styles from './Navbar.css';

interface NavbarProps {
  isOpen: boolean;
}

export function Navbar({ isOpen }: NavbarProps) {
  const { title } = usePageTitleStore();
  const matchRecordPage = useMatch({
    from: '/matches/$matchId/record',
    shouldThrow: false,
  });
  const isRecordPage = Boolean(matchRecordPage);

  return (
    <header className={styles.navbar({ isOpen })}>
      <h1 className={styles.title}>{title}</h1>
      {/* FIXME: 나중엔 Navbar Action Button 영역으로 전역 상태로 구성하기 */}
      {isRecordPage && (
        <button className={styles.signUpButton} onClick={() => {}}>
          내보내기
        </button>
      )}
    </header>
  );
}
