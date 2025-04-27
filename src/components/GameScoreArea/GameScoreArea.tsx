import * as styles from './GameScoreArea.css';

interface Team {
  name: string;
  logoImageUrl?: string;
}

interface GameScoreAreaProps {
  scores: {
    home: number;
    away: number;
  };
  homeTeam: Team;
  awayTeam: Team;
}

export const GameScoreArea = ({
  scores,
  homeTeam,
  awayTeam,
}: GameScoreAreaProps) => {
  return (
    <div className={styles.container}>
      <TeamArea team={homeTeam} isHome />
      <div className={styles.score}>
        {scores.home} : {scores.away}
      </div>
      <TeamArea team={awayTeam} />
    </div>
  );
};

const TeamArea = ({ team, isHome }: { team: Team; isHome?: boolean }) => {
  return (
    <div key={team.name} className={styles.teamContainer}>
      <div className={styles.logoWrapper({ isHome })}>
        <img src={team.logoImageUrl} alt={team.name} className={styles.logo} />
      </div>
      <span className={styles.teamName}>{team.name}</span>
      <span className={styles.region}>{isHome ? 'Home' : 'Away'}</span>
    </div>
  );
};
