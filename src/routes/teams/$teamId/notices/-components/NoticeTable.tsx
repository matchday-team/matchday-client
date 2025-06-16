import { ChevronRightIcon } from '@/assets/icons';
import type { Notice } from '@/routes/teams/$teamId/notices/-temp-server-types';

import * as styles from './NoticeTable.css';

interface NoticeTableProps {
  notices: Notice[];
}

export const NoticeTable = ({ notices }: NoticeTableProps) => {
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.headerRow}>
            <div className={styles.titleHeader}>제목</div>
            <div className={styles.headerGroup}>
              <div className={styles.authorHeader}>작성자</div>
              <div className={styles.dateHeader}>가입일</div>
            </div>
          </div>
        </div>
        {notices.map(notice => (
          <div key={notice.id} className={styles.tableRow}>
            <div className={styles.rowContent}>
              <div className={styles.contentSection}>
                <div className={styles.contentContainer}>
                  <div className={styles.titleRow}>
                    <div className={styles.pinIndicator} />
                    <div className={styles.noticeTitle}>{notice.title}</div>
                  </div>
                  <div className={styles.noticeContent}>{notice.content}</div>
                </div>
              </div>
              <div className={styles.authorCell}>{notice.author}</div>
              <div className={styles.dateCell}>{notice.createdAt}</div>
              <ChevronRightIcon className={styles.chevronIcon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
