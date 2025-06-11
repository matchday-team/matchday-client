import { ChevronRightIcon } from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { MemberFilters } from '@/routes/teams/$teamId/players/-components/MemberFilters';
import type {
  Member,
  Position,
} from '@/routes/teams/$teamId/players/-temp-server-types';

import * as styles from './MemberTable.css';

const getPositionStyle = (position: Position): string => {
  switch (position) {
    case 'FW':
      return styles.positionTagFW;
    case 'MF':
      return styles.positionTagMF;
    case 'DF':
      return styles.positionTagDF;
    case 'GK':
      return styles.positionTagGK;
    default:
      return styles.positionTagFW;
  }
};

interface MemberTableProps {
  members: Member[];
  onMemberMoreClick?: (member: Member) => void;
}

export function MemberTable({ members, onMemberMoreClick }: MemberTableProps) {
  return (
    <div className={styles.container}>
      <MemberFilters />

      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.headerRow}>
            <div className={styles.leftHeaderSection}>
              <div className={styles.headerItem}>이름</div>
              <div className={styles.headerItem}>번호</div>
            </div>
            <div className={styles.rightHeaderSection}>
              <div className={styles.headerItem}>포지션</div>
              <div className={styles.headerItem}>주발</div>
              <div className={styles.headerItem}>권한</div>
              <div className={styles.headerItem}>가입일</div>
            </div>
          </div>
        </div>

        <div className={styles.tableBody}>
          {members.map((member, index) => (
            <div key={member.id} className={styles.memberRowContainer}>
              <div className={styles.memberRowContent}>
                <div className={styles.memberRowInner}>
                  <div className={styles.leftSection}>
                    <div className={styles.indexNumber}>{index + 1}</div>
                    <img
                      src={member.profileImage ?? noProfilePlayerImage}
                      className={styles.profileImage}
                      alt=''
                    />
                    <div className={styles.memberName}>{member.name}</div>
                    <div className={styles.memberNumber}>{member.number}</div>
                  </div>
                  <div className={styles.rightSection}>
                    <div
                      className={`${styles.positionTag} ${getPositionStyle(member.position)}`}
                    >
                      <div className={styles.positionText}>
                        {member.position}
                      </div>
                    </div>
                    <div className={styles.footText}>{member.foot}</div>
                    <div className={styles.roleText}>{member.role}</div>
                    <div className={styles.joinDateText}>{member.joinDate}</div>
                    <ChevronRightIcon
                      className={styles.moreIcon}
                      onClick={() => onMemberMoreClick?.(member)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className={styles.tableFooter} />
        </div>
      </div>
    </div>
  );
}
