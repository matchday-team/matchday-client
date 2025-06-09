import { lightThemeVars } from '@/styles/theme.css';

import type { Meta, StoryObj } from '@storybook/react';

import { matchRecordMocks } from '@/mocks';

import { PlayerOnFieldGridCell } from './PlayerOnFieldGridCell';

const meta = {
  title: 'Components/PlayerGrid/PlayerOnFieldGridCell',
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
    player,
    isDragOver: false,
    disabled: false,
    isSelected: false,
    onClick: () => {},
  },
};

export const Selected: Story = {
  args: {
    player,
    isSelected: true,
    isDragOver: false,
    disabled: false,
    onClick: () => {},
  },
};

export const SubIn: Story = {
  args: {
    player: {
      ...player,
      subIn: true,
    },
    isDragOver: false,
    disabled: false,
    isSelected: false,
    onClick: () => {},
  },
};

export const Goals: Story = {
  args: {
    player: {
      ...player,
      goals: 1,
    },
    isDragOver: false,
    disabled: false,
    isSelected: false,
    onClick: () => {},
  },
};

export const Assists: Story = {
  args: {
    player: {
      ...player,
      assists: 1,
    },
    isDragOver: false,
    disabled: false,
    isSelected: false,
    onClick: () => {},
  },
};

export const GoalsAndAssists: Story = {
  args: {
    player: {
      ...player,
      goals: 1,
      assists: 1,
    },
    isDragOver: false,
    disabled: false,
    isSelected: false,
    onClick: () => {},
  },
};

export const YellowCard: Story = {
  args: {
    player: {
      ...player,
      yellowCards: 1,
      redCards: 0,
    },
    isDragOver: false,
    disabled: false,
    isSelected: false,
    onClick: () => {},
  },
};

export const YellowAndRedCard: Story = {
  args: {
    player: {
      ...player,
      yellowCards: 1,
      redCards: 1,
    },
    isDragOver: false,
    disabled: false,
    isSelected: false,
    onClick: () => {},
  },
};

export const DirectRedCard: Story = {
  args: {
    player: {
      ...player,
      yellowCards: 0,
      redCards: 1,
    },
    isDragOver: false,
    disabled: false,
    isSelected: false,
    onClick: () => {},
  },
};
