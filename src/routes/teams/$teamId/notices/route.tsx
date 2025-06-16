import { createFileRoute } from '@tanstack/react-router';

import { usePageTitle } from '@/hooks';

import { NoticeSearchFilter, NoticeTable } from './-components';
import { mockNotices } from './-mock-data';
import * as styles from './-route.css';

export const Route = createFileRoute('/teams/$teamId/notices')({
  component: TeamNoticesPage,
});

function TeamNoticesPage() {
  usePageTitle('공지사항');

  return (
    <div className={styles.rootContainer}>
      <div className={styles.pageContainer}>
        <div className={styles.tableContainer}>
          <NoticeSearchFilter />
          <NoticeTable notices={mockNotices} />
        </div>
      </div>
      <div className={styles.scrollbar} />
    </div>
  );
}
