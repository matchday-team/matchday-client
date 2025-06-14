import { ChevronRightIcon } from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { Table, TableColumnsDefinition } from '@/components';
import {
  MemberFilters,
  PositionTag,
} from '@/routes/teams/$teamId/players/-components';
import type { Member } from '@/routes/teams/$teamId/players/-temp-server-types';
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
    actions: null, // 더미 키 추가
  }));

  type TableData = (typeof tableData)[0];

  const columns = {
    index: {
      key: 'index',
      title: '',
      width: 80,
      minWidth: 50,
      render: value => <div className={styles.indexNumber}>{value}</div>,
    },
    name: {
      key: 'name',
      title: '이름',
      width: 80,
      minWidth: 80,
      render: (value, record) => (
        <div className={styles.memberNameContainer}>
          <img
            src={record.profileImage ?? noProfilePlayerImage}
            onError={fallbackImageHandler}
            className={styles.profileImage}
            alt=''
          />
          {value}
        </div>
      ),
    },
    number: {
      key: 'number',
      title: '번호',
      width: 120,
      minWidth: 60,
    },
    position: {
      key: 'position',
      title: '포지션',
      width: 150,
      minWidth: 60,
      render: value => <PositionTag position={value} />,
    },
    foot: {
      key: 'foot',
      title: '주발',
      width: 150,
      minWidth: 60,
    },
    role: {
      key: 'role',
      title: '권한',
      width: 200,
      minWidth: 60,
    },
    joinDate: {
      key: 'joinDate',
      title: '가입일',
      width: 200,
      minWidth: 120,
    },
    actions: {
      key: 'actions',
      title: '',
      width: 100,
      minWidth: 80,
      render: () => <ChevronRightIcon className={styles.moreIcon} />,
    },
  } satisfies TableColumnsDefinition<TableData>;

  return (
    <Table
      columns={columns}
      data={tableData}
      headerActions={<MemberFilters />}
      className={styles.tableOverride}
      rowHeight={68}
      onRowClick={onMemberMoreClick}
    />
  );
}
