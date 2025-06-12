import { useState } from 'react';

import { createFileRoute } from '@tanstack/react-router';

import {
  MemberStatsSummary,
  MemberTable,
  PlayerDetailPanel,
} from '@/routes/teams/$teamId/players/-components';

import {
  mockMatchRecords,
  mockMembers,
  mockPersonalInfo,
  mockSecondaryPosition,
} from './-mock-data';
import * as styles from './-route.css';
import type { Member } from './-temp-server-types';

export const Route = createFileRoute('/teams/$teamId/players')({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleMemberMoreClick = (member: Member) => {
    setSelectedMember(member);
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <MemberStatsSummary />
          <MemberTable
            members={mockMembers}
            onMemberMoreClick={handleMemberMoreClick}
          />
        </div>
        {selectedMember && (
          <div className={styles.rightContent}>
            <PlayerDetailPanel
              member={selectedMember}
              matchRecords={mockMatchRecords}
              personalInfo={mockPersonalInfo}
              secondaryPosition={mockSecondaryPosition}
            />
          </div>
        )}
      </div>
    </div>
  );
}
