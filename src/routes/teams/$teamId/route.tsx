import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { teamQuery } from '@/apis/queries';
import { usePageTitle } from '@/hooks';
import { queryClient } from '@/react-query-provider';

import {
  NoticeBoard,
  RecentRecords,
  ScheduleCalendar,
  TeamHeader,
} from './-components';
import {
  calendarDays,
  createTeamAndMatch,
  currentMonth,
  notices,
} from './-mock-data';
import * as styles from './-route.css';
import type { MatchResult, TeamInfo } from './-temp-server-types';

export const Route = createFileRoute('/teams/$teamId')({
  component: TeamDetailPage,
  loader: ({ params }) => {
    const teamId = Number(params.teamId);

    return queryClient.ensureQueryData(teamQuery.byId(teamId));
  },
});

function TeamDetailPage() {
  const { teamId } = Route.useParams();
  usePageTitle('팀 프로필');

  const { data: teamResponse } = useSuspenseQuery(
    teamQuery.byId(Number(teamId)),
  );

  const {
    teamInfo,
    matchResults,
  }: { teamInfo: TeamInfo; matchResults: MatchResult[] } =
    createTeamAndMatch(teamResponse);

  return (
    <div className={styles.rootContainer}>
      <div className={styles.mainCard}>
        <TeamHeader teamInfo={teamInfo} />
        <div className={styles.bodyContainer}>
          <div className={styles.leftContainer}>
            <RecentRecords matchResults={matchResults} />
            <div className={styles.horizontalDivider}></div>
            <NoticeBoard notices={notices} />
          </div>
          <div className={styles.verticalDivider}></div>
          <div className={styles.rightContainer}>
            <ScheduleCalendar
              currentMonth={currentMonth}
              calendarDays={calendarDays}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
