import type {
  MatchRecord,
  Member,
} from '@/routes/teams/$teamId/players/-temp-server-types';

import { MatchRecordTable } from './MatchRecordTable';
import * as styles from './PlayerDetailPanel.css';
import { PlayerProfile } from './PlayerProfile';

export interface PlayerDetailPanelProps {
  member: Member;
  matchRecords: MatchRecord[];
}

export function PlayerDetailPanel({
  member,
  matchRecords,
}: PlayerDetailPanelProps) {
  return (
    <div className={styles.rootContainer}>
      <PlayerProfile member={member} />
      <MatchRecordTable matchRecords={matchRecords} />
    </div>
  );
}
