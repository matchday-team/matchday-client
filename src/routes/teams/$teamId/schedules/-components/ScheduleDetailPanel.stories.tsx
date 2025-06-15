import type { Meta, StoryObj } from '@storybook/react';

import { getMockScheduleDetailData } from '@/routes/teams/$teamId/schedules/-mock-data';

import ScheduleDetailPanel from './ScheduleDetailPanel';

const mockDataWithSchedules = getMockScheduleDetailData('2025-02-11');

const meta = {
  title: 'Routes/Teams/Schedules/ScheduleDetailPanel',
  component: ScheduleDetailPanel,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '선택된 날짜의 일정 세부 정보를 표시하는 패널 컴포넌트입니다. 일정 목록과 생성 버튼을 포함합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'object' },
    onCreateSchedule: { action: 'create schedule clicked' },
    onEditSchedule: { action: 'edit schedule clicked' },
  },
  decorators: [
    Story => (
      <div style={{ width: '400px', height: '600px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScheduleDetailPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: mockDataWithSchedules,
  },
  parameters: {
    docs: {
      description: {
        story: '여러 개의 일정이 있는 날짜의 패널입니다.',
      },
    },
  },
};

export const SingleSchedule: Story = {
  args: {
    data: {
      selectedDate: '2025-02-10',
      dayOfWeek: '월',
      schedules: [
        {
          id: '1',
          title: '지역 리그 1차전',
          location: '잠실종합운동장',
          startTime: '오후 02:00',
          endTime: '오후 04:00',
          category: '대회/리그',
          date: '2025-02-10',
        },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story: '하나의 일정만 있는 날짜의 패널입니다.',
      },
    },
  },
};

export const EmptyState: Story = {
  args: {
    data: {
      selectedDate: '2025-02-12',
      dayOfWeek: '수',
      schedules: [],
    },
  },
  parameters: {
    docs: {
      description: {
        story: '일정이 없는 날짜의 패널입니다. 빈 상태 메시지가 표시됩니다.',
      },
    },
  },
};
