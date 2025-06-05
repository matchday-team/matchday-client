import { createFileRoute, useNavigate } from '@tanstack/react-router';

import { useCreateTeamMutation } from '@/apis/mutations/teams';
import { TEMP_SAVED_TEAM_CREATE_FORM_KEY } from '@/constants';

import { TeamCreateForm, type TeamCreateFormData } from './-components';
import * as styles from './-components/TeamCreatePage.css';

export const Route = createFileRoute('/teams/create')({
  component: TeamCreatePage,
});

function TeamCreatePage() {
  const navigate = useNavigate();
  const createTeamMutation = useCreateTeamMutation();

  const handleSubmit = async (data: TeamCreateFormData) => {
    const teamCreateRequest = {
      name: data.teamName,
      teamColor: data.uniformColors.top,
      bottomColor: data.uniformColors.bottom,
      stockingColor: data.uniformColors.socks,
      teamImg: null, // NOTE: 현재 프로필 이미지 업로드가 불가능
    };

    await createTeamMutation.mutateAsync(teamCreateRequest);

    localStorage.removeItem(TEMP_SAVED_TEAM_CREATE_FORM_KEY);

    navigate({ to: '/' });
  };

  return (
    <div className={styles.rootContainer}>
      <TeamCreateForm onSubmit={handleSubmit} />
    </div>
  );
}
