import { createFileRoute } from '@tanstack/react-router';

import { usePageTitle } from '@/hooks';

import {
  NoticeBoard,
  RecentRecords,
  ScheduleCalendar,
  TeamHeader,
} from './-components';
import * as styles from './-route.css';

export const Route = createFileRoute('/teams/$teamId')({
  component: TeamDetailPage,
});

function TeamDetailPage() {
  usePageTitle('팀 프로필');

  return (
    <div className={styles.pageContainer}>
      <div className={styles.outerContainer}>
        <div className={styles.mainCard}>
          <TeamHeader />
          <div className={styles.contentContainer}>
            <div className={styles.topSection}>
              <div className={styles.grid}>
                <div className={styles.recordsSection}>
                  <RecentRecords />
                </div>
                <div className={styles.verticalDivider}></div>
                <div className={styles.scheduleSection}>
                  <ScheduleCalendar />
                </div>
              </div>
            </div>
            <div className={styles.horizontalDivider}></div>
            <NoticeBoard />
          </div>
        </div>
      </div>
    </div>
  );
}
