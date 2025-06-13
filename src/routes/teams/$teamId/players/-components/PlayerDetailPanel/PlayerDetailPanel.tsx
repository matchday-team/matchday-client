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
  personalInfo: {
    birthDate: string;
    height: string;
    weight: string;
  };
  secondaryPosition: string;
}

export function PlayerDetailPanel({
  member,
  matchRecords,
  personalInfo,
  secondaryPosition,
}: PlayerDetailPanelProps) {
  return (
    <div className={styles.rootContainer}>
      <PlayerProfile
        member={member}
        personalInfo={personalInfo}
        secondaryPosition={secondaryPosition}
      />
      <MatchRecordTable matchRecords={matchRecords} />
    </div>
  );
}
