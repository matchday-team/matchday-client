import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';

import { StarterPlayerListForSubstitution } from './StarterPlayerListForSubstitution';

const meta = {
  title: 'Components/StarterPlayerListForSubstitution',
  component: StarterPlayerListForSubstitution,
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
} satisfies Meta<typeof StarterPlayerListForSubstitution>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    matchId: 1,
    team: matchRecordMocks.mockHomeTeam,
    players: matchRecordMocks.mockPlayersByTeamType('home'),
  },
};

export const FullPlayers: Story = {
  args: {
    matchId: 1,
    team: matchRecordMocks.mockHomeTeam,
    players: matchRecordMocks.mockPlayersByTeamType('home'),
  },
};

// FIXME: 추후 msw 모킹으로 재현 필요
export const EmptyPlayers: Story = {
  args: {
    matchId: 1,
    team: matchRecordMocks.mockAwayTeam,
    players: [],
  },
};
