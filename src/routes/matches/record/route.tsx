import { createFileRoute } from '@tanstack/react-router';

import { PlayerList } from '@/components';
import { dummyPlayerOfTeam1, dummyTeam1 } from '@/mocks';

import { MatchRecordLayout } from './-components';

export const Route = createFileRoute('/matches/record')({
  component: MatchRecordPage,
});

// TO DO: 예시용 스타일로, 추후 제거 필요
const s = (height: number | string) => ({
  height,
  backgroundColor: '#F2F3F7',
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)',
  borderRadius: 10,
  borderBottom: '1px solid #E5E5EC',
});

function MatchRecordPage() {
  return (
    <MatchRecordLayout
      team1={
        <div style={s('100%')}>
          <PlayerList team={dummyTeam1} players={dummyPlayerOfTeam1} />
        </div>
      }
      team2={<div style={s('100%')}>Team 2</div>}
      teamStats={<div style={s(528)}>Stats</div>}
      selectedPlayer={<div style={s(302)}>Selected Player</div>}
      timer={<div style={s(116)}>Timer</div>}
      info={<div style={s(200)}>Info</div>}
      log={<div style={s(264)}>Log</div>}
      memo={<div style={s(204)}>Memo</div>}
    />
  );
}
