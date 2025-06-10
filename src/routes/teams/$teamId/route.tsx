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
import * as styles from './-route.css';

export const Route = createFileRoute('/teams/$teamId')({
  component: TeamDetailPage,
  loader: ({ params }) => {
    const teamId = Number(params.teamId);

    return queryClient.ensureQueryData(teamQuery.byId(teamId));
  },
});

interface TeamInfo {
  name: string;
  description: string;
  logoUrl: string | null;
  leader: string;
  foundedYear: number;
  region: string;
  memberCount: number;
  uniformColors: {
    top: string;
    bottom: string;
    socks: string;
  };
}

interface MatchResult {
  date: string;
  duration: string;
  homeTeam: {
    name: string;
    logo: string;
    score: number;
  };
  awayTeam: {
    name: string;
    logo: string;
    score: number;
  };
}

interface Notice {
  title: string;
  author: string;
  date: string;
}

interface CalendarDay {
  day: number;
  isCurrentMonth: boolean;
  isSelected?: boolean;
  hasEvent?: boolean;
}

function TeamDetailPage() {
  const { teamId } = Route.useParams();
  usePageTitle('팀 프로필');

  const { data: teamResponse } = useSuspenseQuery(
    teamQuery.byId(Number(teamId)),
  );

  const teamInfo: TeamInfo = {
    name: teamResponse.data.name,
    description: `${teamResponse.data.name}의 팀 소개입니다.`,
    logoUrl: teamResponse.data.teamImg,
    leader: '팀 리더',
    foundedYear: 2025,
    region: '지역 정보',
    memberCount: 43,
    uniformColors: {
      top: teamResponse.data.teamColor,
      bottom: teamResponse.data.bottomColor,
      socks: teamResponse.data.stockingColor,
    },
  };

  const matchResults: MatchResult[] = [
    {
      date: '2025-04-23',
      duration: '96"',
      homeTeam: {
        name: 'FC 서울',
        logo: '/api/placeholder/44/44',
        score: 1,
      },
      awayTeam: {
        name: 'FC 수원',
        logo: '/api/placeholder/44/44',
        score: 2,
      },
    },
    {
      date: '2025-04-01',
      duration: '90"',
      homeTeam: {
        name: 'FC 서울',
        logo: '/api/placeholder/44/44',
        score: 1,
      },
      awayTeam: {
        name: 'FC 수원',
        logo: '/api/placeholder/44/44',
        score: 1,
      },
    },
    {
      date: '2025-03-21',
      duration: '94"',
      homeTeam: {
        name: 'FC 서울',
        logo: '/api/placeholder/44/44',
        score: 3,
      },
      awayTeam: {
        name: 'FC 수원',
        logo: '/api/placeholder/44/44',
        score: 0,
      },
    },
  ];

  const notices: Notice[] = [
    {
      title: '신입 선수 모집 안내 (2025년 봄 시즌)',
      author: '홍명보',
      date: '2025-04-12',
    },
    {
      title: '주말 정기 연습 일정 변경 안내 – 장소 및 시간을 꼭 확인해주세요!',
      author: '홍명보',
      date: '2025-03-27',
    },
    {
      title: '우리 동네 대표로 출전! 지역 친선 경기 참가자 모집합니다',
      author: '홍명보',
      date: '2025-03-24',
    },
  ];

  const calendarDays: CalendarDay[] = [
    // 이전 달 날짜들 (3월 29-31일)
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 31, isCurrentMonth: false },
    // 현재 달 날짜들 (4월)
    { day: 1, isCurrentMonth: true },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true },
    { day: 4, isCurrentMonth: true, hasEvent: true },
    { day: 5, isCurrentMonth: true },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true },
    { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true, hasEvent: true },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true },
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true, isSelected: true, hasEvent: true },
    { day: 18, isCurrentMonth: true },
    { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true, hasEvent: true },
    { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true, hasEvent: true },
    { day: 23, isCurrentMonth: true },
    { day: 24, isCurrentMonth: true },
    { day: 25, isCurrentMonth: true },
    { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true },
    { day: 29, isCurrentMonth: true },
    { day: 30, isCurrentMonth: true },
    // 다음 달 날짜들 (5월 1-3일)
    { day: 1, isCurrentMonth: false },
    { day: 2, isCurrentMonth: false },
    { day: 3, isCurrentMonth: false },
  ];

  const currentMonth = '2025-04';

  return (
    <div className={styles.pageContainer}>
      <div className={styles.outerContainer}>
        <div className={styles.mainCard}>
          <TeamHeader teamInfo={teamInfo} />
          <div className={styles.contentContainer}>
            <div className={styles.topSection}>
              <div className={styles.grid}>
                <div className={styles.recordsSection}>
                  <RecentRecords matchResults={matchResults} />
                </div>
                <div className={styles.verticalDivider}></div>
                <div className={styles.scheduleSection}>
                  <ScheduleCalendar
                    currentMonth={currentMonth}
                    calendarDays={calendarDays}
                  />
                </div>
              </div>
            </div>
            <div className={styles.horizontalDivider}></div>
            <NoticeBoard notices={notices} />
          </div>
        </div>
      </div>
    </div>
  );
}
