import {
  MatchEventResponse,
  MatchHalfTimeRequestHalfType,
  TeamResponse,
} from '@/apis/models';
import { MatchEventNameMap } from '@/constants';

import * as styles from './MatchLogListItem.css';

interface MatchLogListItemProps {
  teams: {
    home: TeamResponse;
    away: TeamResponse;
  };
  matchLength: {
    first: number;
    second: number;
  };
  log: MatchEventResponse;
}

export const MatchLogListItem = ({
  teams,
  matchLength,
  log,
}: MatchLogListItemProps) => {
  return (
    <li
      className={styles.rootContainer({
        team: log.teamId === teams.home.id ? 'home' : 'away',
      })}
    >
      <span className={styles.time}>
        {log.halfType === MatchHalfTimeRequestHalfType.FIRST_HALF
          ? log.elapsedMinutes
          : log.elapsedMinutes + matchLength.first}
        &quot;
      </span>
      <span className={styles.teamName}>{log.teamName}</span>
      <span className={styles.name}>
        {log.userName === 'UNKNOWN' ? '-' : log.userName}
      </span>
      <span className={styles.event}>{MatchEventNameMap[log.eventLog]}</span>
    </li>
  );
};
