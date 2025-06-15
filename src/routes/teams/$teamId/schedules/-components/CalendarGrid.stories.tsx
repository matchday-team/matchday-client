import type { Meta, StoryObj } from '@storybook/react';

import { getMockCalendarData } from '@/routes/teams/$teamId/schedules/-mock-data';

import { CalendarGrid } from './CalendarGrid';

const meta = {
  title: 'Routes/Teams/Schedules/CalendarGrid',
  component: CalendarGrid,
  parameters: {
    docs: {
      description: {
        component:
          '캘린더의 날짜 그리드를 표시하는 컴포넌트입니다. 날짜 클릭과 일정 표시 기능을 제공합니다.',
      },
    },
  },
  decorators: [
    Story => (
      <div style={{ width: '952px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    days: { control: 'object' },
    filters: { control: 'object' },
    onDateSelect: { action: 'date selected' },
    year: { control: 'number' },
    month: { control: { type: 'range', min: 1, max: 12 } },
  },
} satisfies Meta<typeof CalendarGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...getMockCalendarData('2025-02-11'),
    onDateSelect: (date: string, dayNumber: number) => {
      console.log('Selected date:', date, 'Day:', dayNumber);
    },
  },
};
