import type { Meta, StoryObj } from '@storybook/react';

import { MatchSchedule } from './MatchSchedule';

const meta = {
  title: 'Components/MatchSchedule',
  component: MatchSchedule,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          width: 300,
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof MatchSchedule>;

export default meta;
type Story = StoryObj<typeof MatchSchedule>;

export const Default: Story = {
  args: {
    items: [
      { label: '장소', value: '한양대학교 대운동장' },
      { label: '날짜', value: '2025-04-16 (수)' },
      { label: '시간', value: '09 : 30 ~ 11 : 30' },
      { label: '주심', value: '김태인' },
      { label: '부심1', value: '김주용' },
      { label: '부심2', value: '주유나' },
      { label: '대기심', value: '김성빈' },
    ],
  },
};
