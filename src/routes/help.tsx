import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/help')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>도움말 페이지 입니다!</div>;
}
