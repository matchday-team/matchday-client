import { createFileRoute } from '@tanstack/react-router';

import { TeamCreateForm, type TeamCreateFormData } from './-components';

export const Route = createFileRoute('/teams/create')({
  component: TeamCreatePage,
});

function TeamCreatePage() {
  const handleSubmit = (data: TeamCreateFormData) => {
    console.log('팀 생성 데이터:', data);
  };

  return <TeamCreateForm onSubmit={handleSubmit} />;
}
