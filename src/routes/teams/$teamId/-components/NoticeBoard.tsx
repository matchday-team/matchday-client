import * as styles from './NoticeBoard.css';

// 커스텀 아이콘 컴포넌트
const ChevronRightIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
    <path
      d='M9 18L15 12L9 6'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

interface Notice {
  title: string;
  author: string;
  date: string;
}

const notices: Notice[] = [
  {
    title: '신입 선수 모집 안내 (2025년 봄 시즌)',
    author: '홍명보',
    date: '2025-04-12',
  },
  {
    title: '주말 정기 연습 일정 변경 안내 – 장소 및 시간을 꼭 확인해주세요!',
    author: '홍명보',
    date: '2025-03-27',
  },
  {
    title: '우리 동네 대표로 출전! 지역 친선 경기 참가자 모집합니다',
    author: '홍명보',
    date: '2025-03-24',
  },
];

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

export const NoticeBoard = () => {
  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <div className={styles.header}>
        <h2 className={styles.title}>공지사항</h2>
        <div className={styles.moreSection}>
          <span className={styles.moreText}>자세히 보기</span>
          <ChevronRightIcon />
        </div>
      </div>

      {/* 공지사항 목록 */}
      <div className={styles.noticeList}>
        {notices.map((notice, index) => (
          <NoticeItem key={index} notice={notice} />
        ))}
      </div>
    </div>
  );
};
