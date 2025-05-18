import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { matchRecordQuery, teamQuery, userQuery } from '@/apis/queries';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { CommonLoader } from '@/components';
import { usePageTitle } from '@/hooks';
import { queryClient } from '@/react-query-provider';
import { createFallbackImageHandler } from '@/utils';

import { TeamList } from './-components';
import * as styles from './-components/MyTeamMatchListPage.css';

const fallbackImageHandler = createFallbackImageHandler();

export const Route = createFileRoute('/')({
  component: MyTeamMatchListPage,
  loader: () => {
    return queryClient.ensureQueryData(userQuery.meQuery);
  },
});

function MyTeamMatchListPage() {
  usePageTitle('매치 리스트');

  const { data: user } = useSuspenseQuery(userQuery.meQuery);
  const { data: team } = useQuery({
    ...teamQuery.byIdQuery(user!.teamId!),
    enabled: Boolean(user?.teamId),
  });
  const { data: matchList, isLoading } = useQuery({
    ...matchRecordQuery.listQuery(user!.teamId!),
    enabled: Boolean(user?.teamId),
  });

  // NOTE: enabled 때문에 타입 가드가 안 됨
  if (isLoading || !matchList || !team) {
    return <CommonLoader />;
  }

  console.log('matches:', matchList);

  return (
    <div className={styles.rootContainer}>
      <div className={styles.header}>
        <div className={styles.team}>
          <div className={styles.logoContainer}>
            <img
              src={team.data.teamImg ?? noProfilePlayerImage}
              alt=''
              className={styles.logo}
              onError={fallbackImageHandler}
            />
          </div>
          <div className={styles.headerTitle}>{team.data.name}</div>
        </div>
        <div className={styles.headerListContainer}>
          <div className={styles.headerListItemContainer}>
            <span className={styles.headerListHeader}>출전 경기 수</span>
            <span className={styles.headerListItem}>-</span>
          </div>
          <div className={styles.headerListItemContainer}>
            <span className={styles.headerListHeader}>최다 출전</span>
            <span className={styles.headerListItem}>-</span>
          </div>
          <div className={styles.headerListItemContainer}>
            <span className={styles.headerListHeader}>승 / 패 / 무</span>
            <span className={styles.headerListItem}>승:- 패:- 무:-</span>
          </div>
          <div className={styles.headerListItemContainer}>
            <span className={styles.headerListHeader}>최근 경기</span>
            <span className={styles.headerListItem}>- - - - -</span>
          </div>
          <div className={styles.headerListItemContainer}>
            <span className={styles.headerListHeader}>득 / 실</span>
            <span className={styles.headerListItem}>득: - 실: -</span>
          </div>
        </div>
      </div>
      <div className={styles.listContainer}>
        <TeamList matchList={matchList.data} />
      </div>
    </div>
  );
}
