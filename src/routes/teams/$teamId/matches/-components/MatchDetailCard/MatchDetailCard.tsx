import { clsx } from 'clsx';

import { XIcon } from '@/assets/icons';
import {
  Goal,
  PlayerStat,
  TeamData,
} from '@/routes/teams/$teamId/matches/-temp-server-types';

import * as styles from './MatchDetailCard.css';
import {
  GoalList,
  MatchDetailLink,
  MatchHeader,
  MatchMetadata,
  PlayerStatsList,
} from './components';

export interface MatchDetailCardProps {
  homeTeam: TeamData;
  awayTeam: TeamData;
  goals: Goal[];
  duration: number; // 경기 시간 (분)
  playersPlayed: number;
  totalPlayers: number;
  date: string;
  location: string;
  players: PlayerStat[];
  className?: string;
}

export function MatchDetailCard({
  homeTeam,
  awayTeam,
  goals,
  duration,
  playersPlayed,
  totalPlayers,
  date,
  location,
  players,
  className,
}: MatchDetailCardProps) {
  return (
    <div className={clsx(styles.rootContainer, className)}>
      <div className={styles.infoContainer}>
        <div className={styles.closeButtonContainer}>
          <button>
            <XIcon className={styles.closeButton} />
          </button>
        </div>
        <MatchHeader homeTeam={homeTeam} awayTeam={awayTeam} />
        <GoalList goals={goals} />
        <MatchMetadata
          duration={duration}
          playersPlayed={playersPlayed}
          totalPlayers={totalPlayers}
          date={date}
          location={location}
        />
        <MatchDetailLink />
      </div>
      <PlayerStatsList players={players} />
    </div>
  );
}
