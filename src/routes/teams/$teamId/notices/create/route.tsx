import { createFileRoute } from '@tanstack/react-router';

import { usePageTitle } from '@/hooks';

import { NoticeCreateForm } from './-components';
import * as styles from './-route.css';

export const Route = createFileRoute('/teams/$teamId/notices/create')({
  component: NoticeCreatePage,
});

function NoticeCreatePage() {
  usePageTitle('공지사항');

  return (
    <div className={styles.rootContainer}>
      <NoticeCreateForm />
    </div>
  );
}
