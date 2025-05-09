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
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      goals: 1,
      assists: 1,
    },
  },
};

export const Selected: Story = {
  args: {
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      goals: 1,
      assists: 1,
    },
    isSelected: true,
  },
};

export const NoAssists: Story = {
  args: {
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      goals: 1,
      assists: 0,
    },
  },
};

export const NoGoals: Story = {
  args: {
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      goals: 0,
      assists: 1,
    },
  },
};

export const NoAttackPoints: Story = {
  args: {
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      goals: 0,
      assists: 0,
    },
  },
};

export const NoCards: Story = {
  args: {
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      yellowCards: 0,
      redCards: 0,
    },
  },
};

export const YellowCard: Story = {
  args: {
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      yellowCards: 1,
      redCards: 0,
    },
  },
};

export const YellowAndRedCard: Story = {
  args: {
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      yellowCards: 1,
      redCards: 1,
    },
  },
};

export const DirectRedCard: Story = {
  args: {
    player: {
      ...matchRecordMocks.mockPlayersByTeamType('home')[0],
      yellowCards: 0,
      redCards: 1,
    },
  },
};
