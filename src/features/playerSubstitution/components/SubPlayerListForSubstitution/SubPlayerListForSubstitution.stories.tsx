import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';

import { SubPlayerListForSubstitution } from './SubPlayerListForSubstitution';

const meta = {
  title: 'Components/SubPlayerListForSubstitution',
  component: SubPlayerListForSubstitution,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 338,
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof SubPlayerListForSubstitution>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    matchId: 1,
    team: matchRecordMocks.mockHomeTeam,
    players: matchRecordMocks.mockSubPlayersByTeamType('home'),
  },
};

// FIXME: Query 연동 후 msw 활용한 mock 필요
export const Empty: Story = {
  args: {
    matchId: 1,
    team: matchRecordMocks.mockHomeTeam,
    players: [],
  },
};

export const DisabledPlayers: Story = {
  args: {
    matchId: 1,
    team: matchRecordMocks.mockHomeTeam,
    players: matchRecordMocks.mockSubPlayersByTeamType('home').map(player => ({
      ...player,
      sentOff: true,
    })),
  },
};
