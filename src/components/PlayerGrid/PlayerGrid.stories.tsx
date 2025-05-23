import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';

import { PlayerGrid } from './PlayerGrid';

const meta = {
  title: 'Components/PlayerGrid',
  component: PlayerGrid,
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
} satisfies Meta<typeof PlayerGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: 'starter',
    team: matchRecordMocks.mockHomeTeam,
    players: matchRecordMocks.mockPlayersByTeamType('home'),
  },
};
