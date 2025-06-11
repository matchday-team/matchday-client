import * as styles from './MemberTableRow.css';

export type Position = 'FW' | 'MF' | 'DF' | 'GK';
export type Foot = '왼발' | '오른발' | '양발';
export type Role = '일반' | '관리자';

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
          <div className={styles.positionText}>{member.position}</div>
        </div>
        <div className={styles.footText}>{member.foot}</div>
        <div className={styles.roleText}>{member.role}</div>
        <div className={styles.joinDateText}>{member.joinDate}</div>
        <img
          src='https://cdn.builder.io/api/v1/image/assets/38cbf5816d9b4e569facb33a6b794634/55c39dcd781d632c0a614aac68f69d1f93101561?placeholderIfAbsent=true'
          className={styles.moreIcon}
          alt='더보기'
          onClick={() => onMoreClick?.(member)}
        />
      </div>
    </div>
  );
}
