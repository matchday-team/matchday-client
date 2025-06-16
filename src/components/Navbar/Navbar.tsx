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
  const teamNoticePage = useMatch({
    from: '/teams/$teamId/notices/',
    shouldThrow: false,
  });
  const teamNoticeCreatePage = useMatch({
    from: '/teams/$teamId/notices/create',
    shouldThrow: false,
  });
  const isRecordPage = Boolean(matchRecordPage);
  const isTeamNoticePage = Boolean(teamNoticePage);
  const isTeamNoticeCreatePage = Boolean(teamNoticeCreatePage);

  return (
    <header className={styles.navbar({ isOpen })}>
      <h1 className={styles.title}>{title}</h1>
      {/* FIXME: 나중엔 Navbar Action Button 영역으로 전역 상태로 구성하기 */}
      {(isRecordPage || isTeamNoticePage || isTeamNoticeCreatePage) && (
        <button className={styles.primaryActionButton} onClick={() => {}}>
          {isTeamNoticeCreatePage
            ? '저장하기'
            : isTeamNoticePage
              ? '작성하기'
              : '내보내기'}
        </button>
      )}
    </header>
  );
}
