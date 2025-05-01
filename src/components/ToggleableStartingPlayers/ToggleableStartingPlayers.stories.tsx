import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { gridMockPlayers } from '@/mocks';

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
    team: {
      id: 1,
      name: '홈팀',
      logoImageUrl: 'https://via.placeholder.com/150',
      teamColor: '#000000',
    },
    players: gridMockPlayers,
    selectedPlayerId: 1,
    onPlayerSelect: playerId => {
      console.log('선수 선택:', playerId);
    },
  },
};

export const Toggleable: Story = {
  args: {
    team: {
      id: 2,
      name: '원정팀',
      logoImageUrl: 'https://via.placeholder.com/150',
      teamColor: '#000000',
    },
    players: gridMockPlayers,
    selectedPlayerId: 2,
    onPlayerSelect: () => {},
  },
  render: args => {
    const [selectedPlayerId, setSelectedPlayerId] = useState(
      args.selectedPlayerId,
    );

    return (
      <ToggleableStartingPlayers
        {...args}
        selectedPlayerId={selectedPlayerId}
        onPlayerSelect={setSelectedPlayerId}
      />
    );
  },
};
