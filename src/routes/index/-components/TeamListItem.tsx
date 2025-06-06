import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';

import { MatchListResponse } from '@/apis/models';
import { userQuery } from '@/apis/queries';
import { PlayerIcon, RecordIcon } from '@/assets/icons';

import * as styles from './TeamListItem.css';

interface TeamListItemProps {
  match: MatchListResponse;
}

export const TeamListItem = ({ match }: TeamListItemProps) => {
  const { data: user } = useSuspenseQuery(userQuery.me);
  const isHomeTeam = user?.teamId === match.homeTeamId;
  const result = isHomeTeam
    ? match.homeScore > match.awayScore
      ? '승'
      : match.homeScore < match.awayScore
        ? '패'
        : '무'
    : match.awayScore > match.homeScore
      ? '승'
      : match.awayScore < match.homeScore
        ? '패'
        : '무';

  return (
    <div className={styles.rootContainer}>
      <span className={styles.item}>{match.awayTeamName}</span>
      <span className={styles.item}>{result}</span>
      <span className={styles.item}>-</span>
      <span className={styles.item}>-</span>
      <span className={styles.item}>{match.stadium}</span>
      <span className={styles.item}>-</span>
      <Link
        to='/matches/$matchId/record'
        params={{ matchId: match.matchId.toString() }}
      >
        <button className={styles.button}>
          <RecordIcon />
        </button>
      </Link>
      <Link
        to='/matches/$matchId/players/edit'
        params={{ matchId: match.matchId.toString() }}
      >
        <button className={styles.button}>
          <PlayerIcon />
        </button>
      </Link>
    </div>
  );
};
