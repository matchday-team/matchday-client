import { MatchEventResponse, TeamResponse } from '@/apis/models';

import * as styles from './MatchLogListItem.css';

interface MatchLogListItemProps {
  teams: {
    home: TeamResponse;
    away: TeamResponse;
  };
  log: MatchEventResponse;
}

export const MatchLogListItem = ({ teams, log }: MatchLogListItemProps) => {
  return (
    <li
      className={styles.rootContainer({
        team: log.teamId === teams.home.id ? 'home' : 'away',
      })}
    >
      <span className={styles.text}>{log.elapsedMinutes}&quot;</span>
      <span className={styles.teamName}>{log.teamName}</span>
      <span className={styles.text}>{log.userName}</span>
      <span className={styles.text}>{log.eventLog}</span>
    </li>
  );
};
