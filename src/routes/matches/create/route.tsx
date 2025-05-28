import { createFileRoute } from '@tanstack/react-router';

import { usePageTitle } from '@/hooks';

import { MatchCreateForm, MatchCreateFormData } from './-components';
import * as styles from './-components/MatchCreatePage.css';

export const Route = createFileRoute('/matches/create')({
  component: MatchCreatePage,
});

/*
  const { data: teamList } = useSuspenseQuery(teamQuery.listAll);
  const { mutateAsync: createMatch } = useCreateMatchMutation();

  const onSubmit = async (data: MatchCreateRequest) => {
    await createMatch(data);
    // NOTE: 모든 팀의 모든 매치 목록을 갱신할 필요는 없음 -> 한 번에 하는 방법 = ?
    queryClient.invalidateQueries({
      queryKey: matchQuery.list(data.homeTeamId).queryKey,
    });
    queryClient.invalidateQueries({
      queryKey: matchQuery.list(data.awayTeamId).queryKey,
    });
  };
*/
function MatchCreatePage() {
  usePageTitle('매치 생성');

  const handleSubmit = (data: MatchCreateFormData) => {
    console.log('폼 데이터:', data);
  };

  return (
    <div className={styles.rootContainer}>
      <MatchCreateForm onSubmit={handleSubmit} />
    </div>
  );
}
