import { useState } from 'react';

import { createFileRoute } from '@tanstack/react-router';

import { DetailCollapsibleLayout } from '@/components';
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
      <DetailCollapsibleLayout
        isOpen={!!selectedMember}
        defaultChildren={
          <>
            <MemberStatsSummary />
            <MemberTable
              members={mockMembers}
              onMemberMoreClick={handleMemberMoreClick}
            />
          </>
        }
        detailChildren={
          selectedMember && (
            <PlayerDetailPanel
              member={selectedMember}
              matchRecords={mockMatchRecords}
            />
          )
        }
      />
    </div>
  );
}
