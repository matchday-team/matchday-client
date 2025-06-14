import { XIcon } from '@/assets/icons';
import { MatchParticipatedPlayerList } from '@/routes/teams/$teamId/matches/-components/MatchParticipatedPlayerList';
import {
  Goal,
  PlayerStat,
  TeamData,
} from '@/routes/teams/$teamId/matches/-temp-server-types';

import { GoalList } from './GoalList';
import { MatchDetailLink } from './MatchDetailLink';
import * as styles from './MatchDetailPanel.css';
import { MatchHeader } from './MatchHeader';
import { MatchMetadata } from './MatchMetadata';

export interface MatchDetailPanelProps {
  homeTeam: TeamData;
  awayTeam: TeamData;
  goals: Goal[];
  duration: number;
  playersPlayed: number;
  totalPlayers: number;
  date: string;
  location: string;
  players: PlayerStat[];
}

export function MatchDetailPanel({
  homeTeam,
  awayTeam,
  goals,
  duration,
  playersPlayed,
  totalPlayers,
  date,
  location,
  players,
}: MatchDetailPanelProps) {
  return (
    <div className={styles.rootContainer}>
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
      <MatchParticipatedPlayerList
        players={players}
        homeTeam={homeTeam}
        awayTeam={awayTeam}
      />
    </div>
  );
}
