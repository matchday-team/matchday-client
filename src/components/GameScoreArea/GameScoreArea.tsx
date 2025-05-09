import { MatchScoreResponse, TeamResponse } from '@/apis/models';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { createFallbackImageHandler } from '@/utils';

import * as styles from './GameScoreArea.css';

interface GameScoreAreaProps {
  scores: MatchScoreResponse;
  homeTeam: TeamResponse;
  awayTeam: TeamResponse;
}

export const GameScoreArea = ({
  scores,
  homeTeam,
  awayTeam,
}: GameScoreAreaProps) => {
  return (
    <div className={styles.container}>
      <TeamArea team={homeTeam} isHome />
      <div className={styles.scoreContainer}>
        <span className={styles.scoreText}>{scores.homeScore.goalCount}</span>
        <span className={styles.colonText}>:</span>
        <span className={styles.scoreText}>{scores.awayScore.goalCount}</span>
      </div>
      <TeamArea team={awayTeam} />
    </div>
  );
};

const fallbackImageHandler = createFallbackImageHandler();

const TeamArea = ({
  team,
  isHome,
}: {
  team: TeamResponse;
  isHome?: boolean;
}) => {
  return (
    <div className={styles.teamContainer}>
      <div className={styles.logoWrapper({ isHome })}>
        <img
          src={team.teamImg ?? noProfilePlayerImage}
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
