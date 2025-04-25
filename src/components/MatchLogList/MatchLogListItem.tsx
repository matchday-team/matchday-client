import { MatchLog, Team } from '@/apis';

import * as styles from './MatchLogListItem.css';

interface MatchLogListItemProps {
  teams: {
    home: Team;
    away: Team;
  };
  log: MatchLog;
}

export const MatchLogListItem = ({ teams, log }: MatchLogListItemProps) => {
  return (
    <li
      className={styles.rootContainer({
        team: log.team.id === teams.home.id ? 'home' : 'away',
      })}
    >
      {/* 시간 표시 기능 부분은 나중에 진행 */}
      <span className={styles.text}>01&quot;</span>
      <span className={styles.teamName}>{log.team.name}</span>
      <span className={styles.text}>{log.player.name}</span>
      <span className={styles.text}>{log.action}</span>
    </li>
  );
};
