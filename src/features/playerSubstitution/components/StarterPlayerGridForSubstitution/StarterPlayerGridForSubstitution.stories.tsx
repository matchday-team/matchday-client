import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';

import { StarterPlayerGridForSubstitution } from './StarterPlayerGridForSubstitution';

const meta = {
  title: 'Components/PlayerGridForSubstitution',
  component: StarterPlayerGridForSubstitution,
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
} satisfies Meta<typeof StarterPlayerGridForSubstitution>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    matchId: 1,
    team: matchRecordMocks.mockHomeTeam,
    players: matchRecordMocks.mockPlayersByTeamType('home'),
  },
};
