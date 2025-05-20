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

const player = {
  ...matchRecordMocks.mockPlayersByTeamType('home')[0],
  yellowCards: 0,
  redCards: 0,
  goals: 0,
  assists: 0,
  subIn: false,
};

export const Default: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player,
    onClick: () => {},
    onSwap: () => {},
  },
};

export const Selected: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player,
    isSelected: true,
    onClick: () => {},
    onSwap: () => {},
  },
};

export const SubIn: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player: {
      ...player,
      subIn: true,
    },
    onClick: () => {},
    onSwap: () => {},
  },
};

export const Goals: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player: {
      ...player,
      goals: 1,
    },
    onClick: () => {},
    onSwap: () => {},
  },
};

export const Assists: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player: {
      ...player,
      assists: 1,
    },
    onClick: () => {},
    onSwap: () => {},
  },
};

export const GoalsAndAssists: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player: {
      ...player,
      goals: 1,
      assists: 1,
    },
    onClick: () => {},
    onSwap: () => {},
  },
};

export const YellowCard: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    player: {
      ...player,
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
      ...player,
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
      ...player,
      yellowCards: 0,
      redCards: 1,
    },
    onClick: () => {},
    onSwap: () => {},
  },
};
