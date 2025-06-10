import * as styles from './RecentRecords.css';

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

interface MatchResult {
  date: string;
  duration: string;
  homeTeam: {
    name: string;
    logo: string;
    score: number;
  };
  awayTeam: {
    name: string;
    logo: string;
    score: number;
  };
}

const matchResults: MatchResult[] = [
  {
    date: '2025-04-23',
    duration: '96"',
    homeTeam: {
      name: 'FC 서울',
      logo: '/api/placeholder/44/44',
      score: 1,
    },
    awayTeam: {
      name: 'FC 수원',
      logo: '/api/placeholder/44/44',
      score: 2,
    },
  },
  {
    date: '2025-04-01',
    duration: '90"',
    homeTeam: {
      name: 'FC 서울',
      logo: '/api/placeholder/44/44',
      score: 1,
    },
    awayTeam: {
      name: 'FC 수원',
      logo: '/api/placeholder/44/44',
      score: 1,
    },
  },
  {
    date: '2025-03-21',
    duration: '94"',
    homeTeam: {
      name: 'FC 서울',
      logo: '/api/placeholder/44/44',
      score: 3,
    },
    awayTeam: {
      name: 'FC 수원',
      logo: '/api/placeholder/44/44',
      score: 0,
    },
  },
];

interface MatchResultCardProps {
  match: MatchResult;
}

const MatchResultCard = ({ match }: MatchResultCardProps) => {
  const homeWon = match.homeTeam.score > match.awayTeam.score;
  const awayWon = match.awayTeam.score > match.homeTeam.score;

  return (
    <div className={styles.matchCard}>
      {/* 날짜 및 경기 시간 */}
      <div className={styles.matchInfo}>
        <span className={styles.matchDate}>{match.date}</span>
        <span className={styles.matchDuration}>{match.duration}</span>
      </div>

      {/* 경기 결과 */}
      <div className={styles.matchResult}>
        {/* 홈팀 */}
        <div className={styles.teamRow}>
          <div className={styles.teamInfo}>
            <div className={styles.teamLogo}>
              <img
                src={match.homeTeam.logo}
                alt={`${match.homeTeam.name} logo`}
                className={styles.logoImage}
              />
            </div>
            <span
              className={homeWon ? styles.teamNameWinner : styles.teamNameLoser}
            >
              {match.homeTeam.name}
            </span>
          </div>
          <span className={homeWon ? styles.scoreWinner : styles.scoreLoser}>
            {match.homeTeam.score}
          </span>
        </div>

        {/* 원정팀 */}
        <div className={styles.teamRow}>
          <div className={styles.teamInfo}>
            <div className={styles.teamLogo}>
              <img
                src={match.awayTeam.logo}
                alt={`${match.awayTeam.name} logo`}
                className={styles.logoImage}
              />
            </div>
            <span
              className={awayWon ? styles.teamNameWinner : styles.teamNameLoser}
            >
              {match.awayTeam.name}
            </span>
          </div>
          <span className={awayWon ? styles.scoreWinner : styles.scoreLoser}>
            {match.awayTeam.score}
          </span>
        </div>
      </div>
    </div>
  );
};

export const RecentRecords = () => {
  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <div className={styles.header}>
        <h2 className={styles.title}>최근 기록</h2>
        <div className={styles.moreSection}>
          <span className={styles.moreText}>자세히 보기</span>
          <ChevronRightIcon />
        </div>
      </div>

      {/* 경기 결과 */}
      <div className={styles.matchGrid}>
        {matchResults.map((match, index) => (
          <MatchResultCard key={index} match={match} />
        ))}
      </div>
    </div>
  );
};
