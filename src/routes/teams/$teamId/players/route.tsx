import { createFileRoute } from '@tanstack/react-router';

import {
  MemberStatsSummary,
  MemberTable,
} from '@/routes/teams/$teamId/players/-components';

import { mockMembers } from './-mock-data';
import * as styles from './-route.css';

export const Route = createFileRoute('/teams/$teamId/players')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={styles.rootContainer}>
      <MemberStatsSummary />
      <MemberTable members={mockMembers} />
    </div>
  );
}
