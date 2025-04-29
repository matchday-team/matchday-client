import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { StartingPlayerOnGrid } from '@/apis';

import { PlayerOnFieldGrid } from './PlayerOnFieldGrid';

const meta = {
  title: 'Components/PlayerOnFieldGrid',
  component: PlayerOnFieldGrid,
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
} satisfies Meta<typeof PlayerOnFieldGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const gridPositions = [2, 5, 7, 9, 11, 13, 17, 21, 22, 23, 27];

const mockPlayers: StartingPlayerOnGrid[] = Array.from(
  { length: 11 },
  (_, idx) => ({
    id: idx + 1,
    name: '손흥민',
    number: 99,
    position: 'FW',
    profileImageUrl: 'https://via.placeholder.com/150',
    goals: Math.max(0, 5 - idx),
    assists: Math.max(0, idx - 5),
    fouls: 2,
    yellowCards: idx % 2 === 0 ? 1 : 0,
    redCards: idx % 3 === 0 ? 1 : 0,
    grid: gridPositions[idx],
  }),
);

export const Default: Story = {
  args: {
    players: mockPlayers,
  },
};

export const WithSelectedPlayer: Story = {
  args: {
    players: mockPlayers,
    selectedPlayerId: 1,
  },
};

export const Selectable: Story = {
  args: {
    players: mockPlayers,
  },
  render: () => {
    const defaultSelectedPlayerId = 1;
    const [selectedPlayerId, setSelectedPlayerId] = useState<number>(
      defaultSelectedPlayerId,
    );

    return (
      <PlayerOnFieldGrid
        players={mockPlayers}
        selectedPlayerId={selectedPlayerId}
        onPlayerSelect={setSelectedPlayerId}
      />
    );
  },
};
