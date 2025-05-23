import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';

import { PlayerListForSubstitution } from './PlayerListForSubstitution';

const meta = {
  title: 'Components/PlayerList',
  component: PlayerListForSubstitution,
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
} satisfies Meta<typeof PlayerListForSubstitution>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: 'starter',
    matchId: 1,
    team: matchRecordMocks.mockHomeTeam,
    players: matchRecordMocks.mockPlayersByTeamType('home'),
  },
};

export const FullPlayers: Story = {
  args: {
    mode: 'starter',
    matchId: 1,
    team: matchRecordMocks.mockHomeTeam,
    players: matchRecordMocks.mockPlayersByTeamType('home'),
  },
};

// FIXME: 추후 msw 모킹으로 재현 필요
export const EmptyPlayers: Story = {
  args: {
    mode: 'starter',
    matchId: 1,
    team: matchRecordMocks.mockAwayTeam,
    players: [],
  },
};
