import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/players')({
  component: PlayerListPage,
});

function PlayerListPage() {
  return <div>선수 명단 페이지</div>;
}
