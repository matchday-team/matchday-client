import { createFileRoute } from '@tanstack/react-router';

import { MatchRecordLayout } from './-components';

export const Route = createFileRoute('/matches/record')({
  component: MatchRecordPage,
});

function MatchRecordPage() {
  return (
    <MatchRecordLayout
      team1={<div>Team 1</div>}
      team2={<div>Team 2</div>}
      stats={<div>Stats</div>}
      info={<div>Info</div>}
    />
  );
}
