import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';

import { PlayerGridForSubstitution } from './PlayerGridForSubstitution';

const meta = {
  title: 'Components/PlayerGridForSubstitution',
  component: PlayerGridForSubstitution,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div style={{ width: 354, height: 462 }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof PlayerGridForSubstitution>;

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
