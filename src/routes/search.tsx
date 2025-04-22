import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/search')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>매치 조회 입니다!</div>;
}
