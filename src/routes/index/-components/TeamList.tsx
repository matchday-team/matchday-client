import { MatchListResponse } from '@/apis/models';

import * as styles from './TeamList.css';
import { TeamListItem } from './TeamListItem';

export const TeamList = ({ matchList }: { matchList: MatchListResponse[] }) => {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.listHeader}>
        <span className={styles.listHeaderItem}>상대팀</span>
        <span className={styles.listHeaderItem}>경기 결과</span>
        <span className={styles.listHeaderItem}>경기 시간</span>
        <span className={styles.listHeaderItem}>출전 선수</span>
        <span className={styles.listHeaderItem}>장소</span>
        <span className={styles.listHeaderItem}>일시</span>
        <span className={styles.listHeaderItem}>이동</span>
      </div>
      <div className={styles.listContainer}>
        {matchList.map(match => (
          <TeamListItem key={match.matchId} match={match} />
        ))}
      </div>
    </div>
  );
};
