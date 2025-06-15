import type { Meta, StoryObj } from '@storybook/react';

import { getMockCalendarData } from '@/routes/teams/$teamId/schedules/-mock-data';

import ScheduleCalendar from './ScheduleCalendar';

const meta = {
  title: 'Routes/Teams/Schedules/ScheduleCalendar',
  component: ScheduleCalendar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '전체 캘린더를 표시하는 메인 컴포넌트입니다. 헤더와 그리드를 포함하며 날짜 선택과 필터링 기능을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'object' },
    onDateSelect: { action: 'date selected' },
    onMonthChange: { action: 'month changed' },
    onFilterToggle: { action: 'filter toggled' },
  },
  decorators: [
    Story => (
      <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ScheduleCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: getMockCalendarData('2025-02-11'),
    onDateSelect: () => {},
    onMonthChange: () => {},
    onFilterToggle: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: '기본 상태의 캘린더입니다. 2월 11일이 선택되어 있습니다.',
      },
    },
  },
};

export const EmptyMonth: Story = {
  args: {
    data: {
      year: 2025,
      month: 3,
      days: Array.from({ length: 42 }, (_, i) => ({
        date: (i % 31) + 1,
        isCurrentMonth: i >= 6 && i < 37,
        isToday: false,
        isSelected: false,
        schedules: [],
      })),
      filters: [
        { category: '대회/리그', count: 0, isActive: true },
        { category: '친선 매치', count: 0, isActive: true },
        { category: '기타', count: 0, isActive: true },
      ],
    },
    onDateSelect: () => {},
    onMonthChange: () => {},
    onFilterToggle: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: '일정이 없는 3월의 캘린더입니다.',
      },
    },
  },
};
