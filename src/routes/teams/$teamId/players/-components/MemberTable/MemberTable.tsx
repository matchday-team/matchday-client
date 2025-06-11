import { ChevronRightIcon } from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { Table, type TableColumn } from '@/components';
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
  const tableData = members.map((member, index) => ({
    ...member,
    index: index + 1,
  }));

  const columns: TableColumn<(typeof tableData)[0]>[] = [
    {
      key: 'index',
      title: '',
      width: 80,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: value => (
        <div className={styles.indexNumber}>{value as string}</div>
      ),
    },
    {
      key: 'profileImage',
      title: '',
      width: 80,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: (value, record) => (
        <img
          src={(value as string) ?? noProfilePlayerImage}
          className={styles.profileImage}
          alt=''
        />
      ),
    },
    {
      key: 'name',
      title: '이름',
      width: 200,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: value => (
        <div className={styles.memberName}>{value as string}</div>
      ),
    },
    {
      key: 'number',
      title: '번호',
      width: 120,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: value => (
        <div className={styles.memberNumber}>{value as string}</div>
      ),
    },
    {
      key: 'position',
      title: '포지션',
      width: 150,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: (value, record) => (
        <div
          className={`${styles.positionTag} ${getPositionStyle(value as Position)}`}
        >
          <div className={styles.positionText}>{value as string}</div>
        </div>
      ),
    },
    {
      key: 'foot',
      title: '주발',
      width: 150,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: value => <div className={styles.footText}>{value as string}</div>,
    },
    {
      key: 'role',
      title: '권한',
      width: 200,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: value => <div className={styles.roleText}>{value as string}</div>,
    },
    {
      key: 'joinDate',
      title: '가입일',
      width: 186,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: value => (
        <div className={styles.joinDateText}>{value as string}</div>
      ),
    },
    {
      key: 'actions',
      title: '',
      width: 80,
      headerAlign: 'center',
      bodyAlign: 'right',
      render: (_, record) => (
        <ChevronRightIcon
          className={styles.moreIcon}
          onClick={() => onMemberMoreClick?.(record as Member)}
        />
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      data={tableData}
      headerActions={<MemberFilters />}
      className={styles.tableOverride}
      rowHeight={68}
    />
  );
}
