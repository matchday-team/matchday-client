import * as styles from './MatchHeader.css';

export interface TeamData {
  id: number;
  name: string;
  logo: string;
  isHome: boolean;
  teamColor: string;
  score: number;
}

export interface MatchHeaderProps {
  homeTeam: TeamData;
  awayTeam: TeamData;
}

export function MatchHeader({ homeTeam, awayTeam }: MatchHeaderProps) {
  return (
    <div className={styles.rootContainer}>
      <TeamInfo team={homeTeam} type='Home' />

      <div className={styles.scoreSection}>
        <div className={styles.scoreDisplay}>
          <div className={styles.scoreNumber}>{homeTeam.score}</div>
          <div className={styles.scoreColon}>:</div>
          <div className={styles.scoreNumber}>{awayTeam.score}</div>
        </div>
      </div>

      <TeamInfo team={awayTeam} type='Away' />
    </div>
  );
}

interface TeamInfoProps {
  team: TeamData;
  type: 'Home' | 'Away';
}

const TeamInfo = ({ team, type }: TeamInfoProps) => {
  return (
    <div className={styles.teamContainer}>
      <div
        className={styles.teamLogoDoubleBorder}
        style={{
          borderColor: team.teamColor,
        }}
      >
        <img src={team.logo} className={styles.teamLogo} alt='' />
      </div>
      <div className={styles.teamInfoContainer}>
        <div className={styles.teamName}>{team.name}</div>
        <div className={styles.teamTypeLabel}>{type}</div>
      </div>
    </div>
  );
};
