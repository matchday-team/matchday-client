import { useState } from 'react';

import { createFileRoute } from '@tanstack/react-router';

import { usePageTitle } from '@/hooks';
import {
  MemberStatsSummary,
  MemberTable,
  PlayerDetailPanel,
} from '@/routes/teams/$teamId/players/-components';

import { mockMatchRecords, mockMembers } from './-mock-data';
import * as styles from './-route.css';
import type { Member } from './-temp-server-types';

export const Route = createFileRoute('/teams/$teamId/players')({
  component: RouteComponent,
});

function RouteComponent() {
  usePageTitle('멤버 관리');

  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleMemberMoreClick = (member: Member) => {
    setSelectedMember(member);
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.collapsibleContainer}>
        <div className={styles.defaultContainer}>
          <MemberStatsSummary />
          <MemberTable
            members={mockMembers}
            onMemberMoreClick={handleMemberMoreClick}
          />
        </div>
        {selectedMember && (
          <div className={styles.detailContainer}>
            <PlayerDetailPanel
              member={selectedMember}
              matchRecords={mockMatchRecords}
            />
          </div>
        )}
      </div>
    </div>
  );
}
