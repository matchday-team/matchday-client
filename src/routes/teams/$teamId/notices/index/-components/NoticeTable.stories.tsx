import { lightThemeVars } from '@/styles/theme.css';

import type { Meta, StoryObj } from '@storybook/react';

import { NoticeTable } from './NoticeTable';

const meta = {
  title: 'Routes/Teams/Notices/NoticeTable',
  component: NoticeTable,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div
        style={{
          width: 1336,
          backgroundColor: lightThemeVars.color.white.background,
          padding: 20,
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    notices: {
      control: false,
    },
  },
} satisfies Meta<typeof NoticeTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockNotices = [
  {
    id: 1,
    title: '경기 장소 및 시간 변경 안내',
    content:
      '안녕하세요. 팀원 여러분께 안내드립니다. 당초 예정되어 있던 이번 주 경기의 장소와 시간이 다음과 같이 변경되었습니다.',
    author: '홍명보',
    createdAt: '2025-04-23',
    isPinned: true,
  },
  {
    id: 2,
    title: '정기 훈련 일정 안내',
    content:
      '다음 주부터 정기 훈련 일정이 변경됩니다. 매주 화요일과 목요일 오후 7시부터 9시까지 진행됩니다.',
    author: '이강인',
    createdAt: '2025-04-22',
  },
  {
    id: 3,
    title: '팀 단합 대회 참가 신청',
    content:
      '다음 달 열리는 지역 단합 대회에 참가하고자 합니다. 참가를 희망하시는 분들은 댓글로 의사를 표현해 주세요.',
    author: '손흥민',
    createdAt: '2025-04-21',
  },
  {
    id: 4,
    title: '새로운 유니폼 디자인 투표',
    content:
      '새 시즌을 위한 유니폼 디자인을 선정하고자 합니다. 첨부된 3가지 디자인 중 마음에 드는 것을 선택해 주세요.',
    author: '김민재',
    createdAt: '2025-04-20',
  },
  {
    id: 5,
    title: '훈련 장비 구매 안내',
    content:
      '팀 훈련용 장비를 새로 구매할 예정입니다. 필요한 장비가 있으시면 코치진에게 말씀해 주세요.',
    author: '황희찬',
    createdAt: '2025-04-19',
  },
];

export const Default: Story = {
  args: {
    notices: mockNotices,
  },
};

export const EmptyList: Story = {
  args: {
    notices: [],
  },
};

export const SingleNotice: Story = {
  args: {
    notices: [mockNotices[0]],
  },
};

export const LongContentNotices: Story = {
  args: {
    notices: [
      {
        ...mockNotices[0],
        title:
          '매우 긴 제목을 가진 공지사항입니다. 이 제목이 어떻게 표시되는지 확인해봅시다',
        content:
          '이것은 매우 긴 내용을 가진 공지사항입니다. 이 내용이 한 줄로 제한되어 말줄임표로 표시되는지 확인해봅시다. 더 많은 텍스트를 추가해서 실제로 긴 내용이 어떻게 처리되는지 테스트해봅시다.',
      },
      ...mockNotices.slice(1, 3),
    ],
  },
};
