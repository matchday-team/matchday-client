import type { Meta, StoryObj } from '@storybook/react';

import { MatchMetadata } from './MatchMetadata';

const meta = {
  title: 'Routes/Teams/Matches/MatchDetailCard/Components/MatchMetadata',
  component: MatchMetadata,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#1C263C',
        },
      ],
    },
  },
  decorators: [
    Story => (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#1C263C',
          width: 300,
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof MatchMetadata>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    duration: 103,
    playersPlayed: 13,
    totalPlayers: 16,
    date: '2025-04-23',
    location: '서울 성동구 왕십리로 22',
  },
};

export const ExtraTime: Story = {
  args: {
    duration: 126,
    playersPlayed: 15,
    totalPlayers: 18,
    date: '2025-05-15',
    location: '서울월드컵경기장',
  },
};

export const ShortMatch: Story = {
  args: {
    duration: 90,
    playersPlayed: 11,
    totalPlayers: 16,
    date: '2025-03-10',
    location: '수원월드컵경기장',
  },
};

export const LongLocation: Story = {
  args: {
    duration: 95,
    playersPlayed: 14,
    totalPlayers: 16,
    date: '2025-06-01',
    location:
      '서울특별시 성동구 왕십리로 222-1 한양대학교 대운동장 인조잔디구장',
  },
};

export const FullSquad: Story = {
  args: {
    duration: 90,
    playersPlayed: 18,
    totalPlayers: 18,
    date: '2025-07-20',
    location: '잠실종합운동장',
  },
};
