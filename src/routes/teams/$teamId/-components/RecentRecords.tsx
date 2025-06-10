import { ChevronRightIcon } from '@/assets/icons';

import * as styles from './RecentRecords.css';

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

interface RecentRecordsProps {
  matchResults: MatchResult[];
}

export const RecentRecords = ({ matchResults }: RecentRecordsProps) => {
  return (
    <div className={styles.rootContainer}>
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
