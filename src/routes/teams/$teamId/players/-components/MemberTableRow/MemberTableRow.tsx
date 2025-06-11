import { ChevronRightIcon } from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import type {
  Member,
  Position,
} from '@/routes/teams/$teamId/players/-temp-server-types';

import * as styles from './MemberTableRow.css';

interface MemberTableRowProps {
  member: Member;
  index: number;
  onMoreClick?: (member: Member) => void;
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

export function MemberTableRow({
  member,
  index,
  onMoreClick,
}: MemberTableRowProps) {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.indexNumber}>{index}</div>
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
          <div className={styles.positionText}>{member.position}</div>
        </div>
        <div className={styles.footText}>{member.foot}</div>
        <div className={styles.roleText}>{member.role}</div>
        <div className={styles.joinDateText}>{member.joinDate}</div>
        <button
          className={styles.moreIcon}
          onClick={() => onMoreClick?.(member)}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
