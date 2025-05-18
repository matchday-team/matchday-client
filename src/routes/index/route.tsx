import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { matchRecordQuery, userQuery } from '@/apis/queries';
import { CommonLoader } from '@/components';
import { usePageTitle } from '@/hooks';
import { queryClient } from '@/react-query-provider';

import { TeamList } from './-components';
import * as styles from './-components/MyTeamMatchListPage.css';

export const Route = createFileRoute('/')({
  component: MyTeamMatchListPage,
  loader: () => {
    return queryClient.ensureQueryData(userQuery.meQuery);
  },
});

function MyTeamMatchListPage() {
  usePageTitle('매치 리스트');

  const { data: user } = useSuspenseQuery(userQuery.meQuery);
  const { data: matchList, isLoading } = useQuery({
    ...matchRecordQuery.listQuery(user!.teamId!),
    enabled: Boolean(user?.teamId),
  });

  // NOTE: enabled 때문에 타입 가드가 안 됨
  if (isLoading || !matchList) {
    return <CommonLoader />;
  }

  console.log('matches:', matchList);

  return (
    <div className={styles.rootContainer}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>FC서울</div>
      </div>
      <div className={styles.listContainer}>
        <TeamList matchList={matchList.data} />
      </div>
    </div>
  );
}
