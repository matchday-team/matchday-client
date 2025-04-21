import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/match/record')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>매치 기록 입니다!</div>;
}
