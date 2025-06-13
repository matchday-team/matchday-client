import { ChevronRightIcon } from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { Table, type TableColumn } from '@/components';
import {
  MemberFilters,
  PositionTag,
} from '@/routes/teams/$teamId/players/-components';
import type {
  Member,
  Position,
} from '@/routes/teams/$teamId/players/-temp-server-types';
import { createFallbackImageHandler } from '@/utils/createFallbackImageHandler';

import * as styles from './MemberTable.css';

const fallbackImageHandler = createFallbackImageHandler();

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
      key: 'name',
      title: '이름',
      width: 80,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: (value, record) => (
        <div className={styles.memberNameContainer}>
          <img
            src={(value as string) ?? noProfilePlayerImage}
            onError={fallbackImageHandler}
            className={styles.profileImage}
            alt=''
          />
          <div className={styles.memberName}>{value as string}</div>
        </div>
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
      render: value => <PositionTag position={value as Position} />,
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
      title: '상세 보기',
      width: 100,
      headerAlign: 'center',
      bodyAlign: 'center',
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
