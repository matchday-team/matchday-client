import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';

import { PlayerList } from './PlayerList';

const meta = {
  title: 'Components/PlayerList',
  component: PlayerList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ width: 354, height: 462 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PlayerList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    players: matchRecordMocks.mockPlayersByTeamType('home'),
    onSwap: () => {},
  },
};

export const FullPlayers: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    players: matchRecordMocks.mockPlayersByTeamType('home'),
    onSwap: () => {},
  },
};

// FIXME: 추후 msw 모킹으로 재현 필요
export const EmptyPlayers: Story = {
  args: {
    team: matchRecordMocks.mockAwayTeam,
    players: [],
    onSwap: () => {},
  },
};
