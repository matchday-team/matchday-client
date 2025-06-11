import {
  MemberStatsSummary,
  MemberTable,
} from '@/routes/teams/$teamId/players/-components';

import * as styles from './MemberManagement.css';

interface MemberManagementProps {
  className?: string;
}

export function MemberManagement({ className }: MemberManagementProps) {
  return (
    <div className={`${styles.container} ${className || ''}`}>
      <MemberStatsSummary />
      <MemberTable />
    </div>
  );
}
