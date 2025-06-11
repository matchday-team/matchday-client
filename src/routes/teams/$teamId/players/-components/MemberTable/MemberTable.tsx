import { ChevronRightIcon } from '@/assets/icons';
import {
  type Foot,
  MemberFilters,
  type Position,
  type Role,
} from '@/routes/teams/$teamId/players/-components';

import * as styles from './MemberTable.css';

interface Member {
  id: number;
  name: string;
  number: string;
  position: Position;
  foot: Foot;
  role: Role;
  joinDate: string;
  profileImage?: string;
}

interface MemberTableProps {
  members?: Member[];
  onMemberMoreClick?: (member: Member) => void;
}

const defaultMembers: Member[] = [
  {
    id: 1,
    name: '손흥민',
    number: '#7',
    position: 'FW',
    foot: '왼발',
    role: '일반',
    joinDate: '2025-04-23',
  },
  {
    id: 2,
    name: '손흥민',
    number: '#7',
    position: 'MF',
    foot: '오른발',
    role: '일반',
    joinDate: '2025-04-23',
  },
  {
    id: 3,
    name: '손흥민',
    number: '#7',
    position: 'DF',
    foot: '양발',
    role: '일반',
    joinDate: '2025-04-23',
  },
  {
    id: 4,
    name: '손흥민',
    number: '#7',
    position: 'GK',
    foot: '양발',
    role: '일반',
    joinDate: '2025-04-23',
  },
  {
    id: 5,
    name: '손흥민',
    number: '#7',
    position: 'FW',
    foot: '양발',
    role: '일반',
    joinDate: '2025-04-23',
  },
  {
    id: 6,
    name: '손흥민',
    number: '#7',
    position: 'FW',
    foot: '양발',
    role: '일반',
    joinDate: '2025-04-23',
  },
  {
    id: 7,
    name: '손흥민',
    number: '#7',
    position: 'FW',
    foot: '양발',
    role: '일반',
    joinDate: '2025-04-23',
  },
  {
    id: 8,
    name: '손흥민',
    number: '#7',
    position: 'FW',
    foot: '양발',
    role: '일반',
    joinDate: '2025-04-23',
  },
];

export function MemberTable({
  members = defaultMembers,
  onMemberMoreClick,
}: MemberTableProps) {
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
                      src={
                        member.profileImage ||
                        'https://cdn.builder.io/api/v1/image/assets/38cbf5816d9b4e569facb33a6b794634/e74f0710b5ab267430e810eabb2122e5690bd3ed?placeholderIfAbsent=true'
                      }
                      className={styles.profileImage}
                      alt={`${member.name} 프로필`}
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
