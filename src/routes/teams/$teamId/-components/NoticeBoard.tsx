import { ChevronRightIcon } from '@/assets/icons';
import type { Notice } from '@/routes/teams/$teamId/-temp-server-types';

import * as styles from './NoticeBoard.css';

interface NoticeBoardProps {
  notices: Notice[];
}

export const NoticeBoard = ({ notices }: NoticeBoardProps) => {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>공지사항</h2>
        <div className={styles.moreSection}>
          <span className={styles.moreText}>자세히 보기</span>
          <ChevronRightIcon className={styles.chevronIcon} />
        </div>
      </div>
      <div className={styles.noticeList}>
        {notices.map((notice, index) => (
          <NoticeItem key={index} notice={notice} />
        ))}
      </div>
    </div>
  );
};

interface NoticeItemProps {
  notice: Notice;
}

const NoticeItem = ({ notice }: NoticeItemProps) => {
  return (
    <div className={styles.noticeItem}>
      <div className={styles.noticeContent}>
        <div className={styles.bullet}></div>
        <span className={styles.noticeTitle}>{notice.title}</span>
      </div>
      <div className={styles.noticeInfo}>
        <div className={styles.authorContainer}>
          <span className={styles.authorText}>{notice.author}</span>
        </div>
        <span className={styles.dateText}>{notice.date}</span>
      </div>
    </div>
  );
};
