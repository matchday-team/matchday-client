import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';

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
    matchInfo: matchRecordMocks.mockMatchInfo,
  },
};

export const LongLocation: Story = {
  args: {
    matchInfo: {
      ...matchRecordMocks.mockMatchInfo,
      stadium: '서울특별시 성동구 왕십리로 222 한양대학교 대운동장',
    },
  },
};
