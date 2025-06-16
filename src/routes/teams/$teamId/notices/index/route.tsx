import { createFileRoute } from '@tanstack/react-router';

import { usePageTitle } from '@/hooks';

import { NoticeSearchFilter, NoticeTable } from './-components';
import { mockNotices } from './-mock-data';
import * as styles from './-route.css';
import type { Notice } from './-temp-server-types';

export const Route = createFileRoute('/teams/$teamId/notices/')({
  component: TeamNoticesPage,
});

function TeamNoticesPage() {
  usePageTitle('공지사항');

  const handleNoticeClick = (notice: Notice) => {
    console.log('공지사항 클릭:', notice);
  };

  return (
    <div className={styles.rootContainer}>
      <NoticeTable
        notices={mockNotices}
        onNoticeClick={handleNoticeClick}
        headerActions={<NoticeSearchFilter />}
      />
    </div>
  );
}
