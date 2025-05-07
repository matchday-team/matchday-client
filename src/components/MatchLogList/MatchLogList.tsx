import { assignInlineVars } from '@vanilla-extract/dynamic';

import { MatchEventResponse, TeamResponse } from '@/apis/models';

import { EmptyList } from './EmptyList/EmptyList';
import * as styles from './MatchLogList.css';
import { MatchLogListItem } from './MatchLogListItem/MatchLogListItem';
import { teamAwayColor } from './colors.css';
import { teamHomeColor } from './colors.css';

interface MatchLogListProps {
  teams: {
    home: TeamResponse;
    away: TeamResponse;
  };
  logs: MatchEventResponse[];
}

export const MatchLogList = ({ teams, logs }: MatchLogListProps) => {
  return (
    <div
      className={styles.rootContainer}
      style={assignInlineVars({
        [teamHomeColor]: teams.home.teamColor,
        [teamAwayColor]: teams.away.teamColor,
      })}
    >
      <div className={styles.header}>
        <div className={styles.title}>경기 로그</div>
      </div>
      <ul className={styles.logListContainer}>
        {logs.length === 0 ? (
          // FIXME: 디자인이 없어서 임시로 작업
          <EmptyList />
        ) : (
          logs.map(log => (
            <MatchLogListItem key={log.id} teams={teams} log={log} />
          ))
        )}
      </ul>
    </div>
  );
};
