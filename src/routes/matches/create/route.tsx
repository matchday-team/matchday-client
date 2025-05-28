import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { useCreateMatchMutation } from '@/apis/mutations';
import { matchQuery, teamQuery } from '@/apis/queries';
import { usePageTitle } from '@/hooks';

import { MatchCreateForm, MatchCreateFormData } from './-components';
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
      <MatchCreateForm teamList={teamList.data} onSubmit={handleSubmit} />
    </div>
  );
}
