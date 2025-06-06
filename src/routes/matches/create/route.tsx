import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { useCreateMatchMutation } from '@/apis/mutations';
import { matchQuery, teamQuery } from '@/apis/queries';
import { TEMP_SAVED_MATCH_CREATE_FORM_KEY } from '@/constants';
import { usePageTitle } from '@/hooks';

import {
  MatchCreateForm,
  MatchCreateFormData,
  MatchCreateStepper,
} from './-components';
import * as styles from './-components/MatchCreatePage.css';

export const Route = createFileRoute('/matches/create')({
  component: MatchCreatePage,
});

function MatchCreatePage() {
  usePageTitle('매치 생성');

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: teamList } = useSuspenseQuery(teamQuery.listAll);
  const { mutateAsync: createMatch } = useCreateMatchMutation();

  const handleSubmit = async (data: MatchCreateFormData) => {
    const { data: result } = await createMatch(data);
    await Promise.all([
      queryClient.invalidateQueries({
        queryKey: matchQuery.list(data.homeTeamId).queryKey,
      }),
      queryClient.invalidateQueries({
        queryKey: matchQuery.list(data.awayTeamId).queryKey,
      }),
    ]);

    localStorage.removeItem(TEMP_SAVED_MATCH_CREATE_FORM_KEY);

    navigate({
      to: '/matches/$matchId/players/edit',
      params: {
        matchId: result.toString(),
      },
      search: {
        matchSide: 'home',
      },
    });
  };

  return (
    <div className={styles.rootContainer}>
      <MatchCreateStepper />
      <h2 className={styles.title}>상세 정보 입력</h2>
      <MatchCreateForm teamList={teamList.data} onSubmit={handleSubmit} />
    </div>
  );
}
