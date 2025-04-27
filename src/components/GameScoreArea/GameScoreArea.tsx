import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { createFallbackImageHandler } from '@/utils';

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

const fallbackImageHandler = createFallbackImageHandler();

const TeamArea = ({ team, isHome }: { team: Team; isHome?: boolean }) => {
  return (
    <div className={styles.teamContainer}>
      <div className={styles.logoWrapper({ isHome })}>
        <img
          src={team.logoImageUrl ?? noProfilePlayerImage}
          alt=''
          className={styles.logo}
          onError={fallbackImageHandler}
        />
      </div>
      <span className={styles.teamName}>{team.name}</span>
      <span className={styles.region}>{isHome ? 'Home' : 'Away'}</span>
    </div>
  );
};
