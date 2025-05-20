import { useEffect, useRef } from 'react';

import { assignInlineVars } from '@vanilla-extract/dynamic';

import { MatchEventResponse, TeamResponse } from '@/apis/models';

import { EmptyList } from './EmptyList/EmptyList';
import * as styles from './MatchLogList.css';
import { MatchLogListItem } from './MatchLogListItem/MatchLogListItem';
import { teamAwayColor, teamHomeColor } from './colors.css';

interface MatchLogListProps {
  teams: {
    home: TeamResponse;
    away: TeamResponse;
  };
  matchLength: {
    first: number;
    second: number;
  };
  logs: MatchEventResponse[];
}

export const MatchLogList = ({
  teams,
  matchLength,
  logs,
}: MatchLogListProps) => {
  const listElemRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    listElemRef.current?.scrollTo({
      top: listElemRef.current?.scrollHeight ?? 0,
      behavior: 'smooth',
    });
  }, [logs]);

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
      <ul className={styles.logListContainer} ref={listElemRef}>
        {logs.length === 0 ? (
          // FIXME: 디자인이 없어서 임시로 작업
          <EmptyList />
        ) : (
          logs.map(log => (
            <MatchLogListItem
              key={log.id}
              teams={teams}
              matchLength={matchLength}
              log={log}
            />
          ))
        )}
      </ul>
    </div>
  );
};
