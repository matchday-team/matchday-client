import type { Meta, StoryObj } from '@storybook/react';

import { CalendarHeader } from './CalendarHeader';

const meta = {
  title: 'Routes/Teams/Schedules/CalendarHeader',
  component: CalendarHeader,
  parameters: {
    docs: {
      description: {
        component:
          '캘린더의 헤더 영역을 담당하는 컴포넌트입니다. 월 네비게이션과 필터 기능을 제공합니다.',
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
    year: { control: 'number' },
    month: { control: { type: 'range', min: 1, max: 12 } },
    filters: { control: 'object' },
    onPreviousMonth: { action: 'previous month clicked' },
    onNextMonth: { action: 'next month clicked' },
    onFilterToggle: { action: 'filter toggled' },
  },
} satisfies Meta<typeof CalendarHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    year: 2025,
    month: 2,
    filters: [
      { category: '대회/리그', count: 11, isActive: true },
      { category: '친선 매치', count: 3, isActive: true },
      { category: '기타', count: 6, isActive: true },
    ],
    onPreviousMonth: () => {},
    onNextMonth: () => {},
    onFilterToggle: () => {},
  },
};
