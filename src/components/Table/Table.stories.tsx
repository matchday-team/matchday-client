import type { Meta, StoryObj } from '@storybook/react';

import { ChevronRightIcon, MagnifyingGlassIcon } from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { InputWithIcon } from '@/components/CommonForm/InputWithIcon';
import { Select } from '@/components/CommonForm/Select';
import { PositionTag } from '@/routes/teams/$teamId/players/-components/PositionTag/PositionTag';

import { Table } from './Table';
import * as styles from './Table.stories.css';

const meta = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className={styles.storyContainer}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// 샘플 데이터
const sampleMembers = [
  {
    id: 1,
    profileImage: null,
    name: '김철수',
    number: '10',
    position: 'FW',
    foot: '오른발',
    role: '팀장',
    joinDate: '2024-01-15',
  },
  {
    id: 2,
    profileImage: null,
    name: '이영희',
    number: '7',
    position: 'MF',
    foot: '왼발',
    role: '부팀장',
    joinDate: '2024-02-20',
  },
  {
    id: 3,
    profileImage: null,
    name: '박민수',
    number: '3',
    position: 'DF',
    foot: '오른발',
    role: '일반',
    joinDate: '2024-03-10',
  },
  {
    id: 4,
    profileImage: null,
    name: '최지원',
    number: '1',
    position: 'GK',
    foot: '오른발',
    role: '일반',
    joinDate: '2024-01-25',
  },
];

const tableData = sampleMembers.map((member, index) => ({
  ...member,
  index: index + 1,
}));

const columns = {
  index: {
    key: 'index',
    title: '순번',
    width: 80,
    headerAlign: 'center',
    bodyAlign: 'center',
    render: (value: unknown) => (
      <div className={styles.indexNumber}>{String(value)}</div>
    ),
  },
  profileImage: {
    key: 'profileImage',
    title: '프로필',
    width: 80,
    headerAlign: 'center',
    bodyAlign: 'center',
    render: (value: unknown) => (
      <img
        src={value ? String(value) : noProfilePlayerImage}
        className={styles.profileImage}
        alt=''
      />
    ),
  },
  name: {
    key: 'name',
    title: '이름',
    width: 200,
    headerAlign: 'center',
    bodyAlign: 'center',
    render: (value: unknown) => (
      <div className={styles.centerText}>{String(value)}</div>
    ),
  },
  number: {
    key: 'number',
    title: '번호',
    width: 120,
    headerAlign: 'center',
    bodyAlign: 'center',
    render: (value: unknown) => (
      <div className={styles.centerText}>{String(value)}</div>
    ),
  },
  position: {
    key: 'position',
    title: '포지션',
    width: 150,
    headerAlign: 'center',
    bodyAlign: 'center',
    render: (value: unknown) => (
      <PositionTag position={value as 'FW' | 'MF' | 'DF' | 'GK'} />
    ),
  },
  foot: {
    key: 'foot',
    title: '주발',
    width: 150,
    headerAlign: 'center',
    bodyAlign: 'center',
    render: (value: unknown) => (
      <div className={styles.centerText}>{String(value)}</div>
    ),
  },
  role: {
    key: 'role',
    title: '권한',
    width: 200,
    headerAlign: 'center',
    bodyAlign: 'center',
    render: (value: unknown) => (
      <div className={styles.centerText}>{String(value)}</div>
    ),
  },
  joinDate: {
    key: 'joinDate',
    title: '가입일',
    width: 186,
    headerAlign: 'center',
    bodyAlign: 'center',
    render: (value: unknown) => (
      <div className={styles.centerText}>{String(value)}</div>
    ),
  },
  actions: {
    key: 'actions',
    title: '',
    width: 80,
    headerAlign: 'center',
    bodyAlign: 'center',
    render: () => <ChevronRightIcon className={styles.moreIcon} />,
  },
};

const SampleFilters = () => (
  <div className={styles.filtersContainer}>
    <InputWithIcon
      placeholder='이름 검색'
      variant='white-large'
      icon={<MagnifyingGlassIcon />}
      style={{ width: '200px' }}
    />
    <Select
      placeholder='포지션'
      variant='white-large'
      options={[
        { value: 'all', label: '전체' },
        { value: 'FW', label: 'FW' },
        { value: 'MF', label: 'MF' },
        { value: 'DF', label: 'DF' },
        { value: 'GK', label: 'GK' },
      ]}
      style={{ width: '120px' }}
    />
    <Select
      placeholder='주발'
      variant='white-large'
      options={[
        { value: 'all', label: '전체' },
        { value: 'left', label: '왼발' },
        { value: 'right', label: '오른발' },
      ]}
      style={{ width: '120px' }}
    />
    <Select
      placeholder='가입일'
      variant='white-large'
      options={[
        { value: 'all', label: '전체' },
        { value: 'recent', label: '최신순' },
        { value: 'oldest', label: '오래된순' },
      ]}
      style={{ width: '120px' }}
    />
  </div>
);

export const Default: Story = {
  args: {
    columns,
    data: tableData,
  },
};

export const WithHeaderActions: Story = {
  args: {
    columns,
    data: tableData,
    headerActions: <SampleFilters />,
  },
};

export const EmptyTable: Story = {
  args: {
    columns,
    data: [],
  },
};

export const SingleRow: Story = {
  args: {
    columns,
    data: [tableData[0]],
  },
};

export const WithCustomRowHeight: Story = {
  args: {
    columns,
    data: tableData,
    rowHeight: 80,
  },
};
