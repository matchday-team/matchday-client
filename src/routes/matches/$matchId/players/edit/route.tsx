import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

import { teamQuery } from '@/apis/queries';
import { MatchCreateStepper } from '@/components';
import { usePageTitle } from '@/hooks';
import { queryClient } from '@/react-query-provider';

import { PlayersEditView } from './-components';
import * as styles from './-components/MatchPlayerEditPage.css';

// search params 스키마 정의
const searchSchema = z.object({
  matchSide: z.enum(['home', 'away']).optional().default('home'), // 홈팀/어웨이팀 구분
});

export const Route = createFileRoute('/matches/$matchId/players/edit')({
  component: MatchPlayerEditPage,
  validateSearch: searchSchema,
  loader: async () => {
    await queryClient.ensureQueryData(teamQuery.listAll);
  },
});

function MatchPlayerEditPage() {
  usePageTitle('매치 생성');

  // params에서 matchId 가져오기
  const { matchId: matchIdParam } = Route.useParams();
  const matchId = Number(matchIdParam);

  // search params에서 matchSide 구분 가져오기
  const { matchSide } = Route.useSearch();

  return (
    <div className={styles.rootContainer}>
      <MatchCreateStepper currentStep={matchSide === 'home' ? 2 : 3} />
      <h2 className={styles.title}>
        {matchSide === 'home' ? '홈팀' : '상대팀'} 명단 설정
      </h2>
      <div className={styles.editViewRootContainer}>
        <PlayersEditView matchId={matchId} matchSide={matchSide} />
      </div>
    </div>
  );
}
