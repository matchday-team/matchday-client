import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { useCreateTeamMutation } from '@/apis/mutations/teams';

import { TeamCreateForm, type TeamCreateFormData } from './-components';
import * as styles from './-components/TeamCreatePage.css';

export const Route = createFileRoute('/teams/create')({
  component: TeamCreatePage,
});

function TeamCreatePage() {
  const navigate = useNavigate();
  const createTeamMutation = useCreateTeamMutation();

  const handleSubmit = async (data: TeamCreateFormData) => {
    try {
      // 1. 팀 생성 (이미지 없이)
      const teamCreateRequest = {
        name: data.teamName,
        teamColor: data.uniformColors.top,
        bottomColor: data.uniformColors.bottom,
        stockingColor: data.uniformColors.socks,
        teamImg: null, // 일단 null로 생성
      };

      await createTeamMutation.mutateAsync(teamCreateRequest);

      navigate({ to: '/' });
    } catch (error) {
      console.error('팀 생성 실패:', error);
    }
  };

  return (
    <div className={styles.rootContainer}>
      <TeamCreateForm onSubmit={handleSubmit} />
    </div>
  );
}
