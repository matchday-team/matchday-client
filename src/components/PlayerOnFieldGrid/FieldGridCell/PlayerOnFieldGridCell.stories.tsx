import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';
import { lightThemeVars } from '@/styles/theme.css';

import { PlayerOnFieldGridCell } from './PlayerOnFieldGridCell';

const meta = {
  title: 'Components/PlayerOnFieldGridCell',
  component: PlayerOnFieldGridCell,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          backgroundColor: lightThemeVars.color.field.background,
          width: 70,
          height: 77,
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof PlayerOnFieldGridCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      goals: 1,
      assists: 1,
    },
    onClick: () => {},
    onSwap: () => {},
  },
};

export const Selected: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      goals: 1,
      assists: 1,
    },
    isSelected: true,
    onClick: () => {},
    onSwap: () => {},
  },
};

export const NoAssists: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      goals: 1,
      assists: 0,
    },
    onClick: () => {},
    onSwap: () => {},
  },
};

export const NoGoals: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      goals: 0,
      assists: 1,
    },
    onClick: () => {},
    onSwap: () => {},
  },
};

export const NoAttackPoints: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      goals: 0,
      assists: 0,
    },
    onClick: () => {},
    onSwap: () => {},
  },
};

export const NoCards: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      yellowCards: 0,
      redCards: 0,
    },
    onClick: () => {},
    onSwap: () => {},
  },
};

export const YellowCard: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      yellowCards: 1,
      redCards: 0,
    },
    onClick: () => {},
    onSwap: () => {},
  },
};

export const YellowAndRedCard: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      yellowCards: 1,
      redCards: 1,
    },
    onClick: () => {},
    onSwap: () => {},
  },
};

export const DirectRedCard: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      yellowCards: 0,
      redCards: 1,
    },
    onClick: () => {},
    onSwap: () => {},
  },
};
