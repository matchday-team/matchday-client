import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';
import { mockHomeTeam } from '@/mocks/matchRecord';

import { ToggleableStartingPlayers } from './ToggleableStartingPlayers';

const meta = {
  title: 'Components/ToggleableStartingPlayers',
  component: ToggleableStartingPlayers,
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
} satisfies Meta<typeof ToggleableStartingPlayers>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: 'starter',
    team: mockHomeTeam,
    players: matchRecordMocks.mockPlayersByTeamType('home'),
    onSwap: () => {},
  },
};
