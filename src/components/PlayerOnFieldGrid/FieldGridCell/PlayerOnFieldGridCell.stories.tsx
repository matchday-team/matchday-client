import type { Meta, StoryObj } from '@storybook/react';

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

const commonMockPlayer = {
  id: 1,
  name: '손흥민',
  number: 7,
  profileImageUrl: 'https://example.com/image.jpg',
  position: 'FW',
};

export const Default: Story = {
  args: {
    player: {
      ...commonMockPlayer,
      goals: 1,
      assists: 1,
      fouls: 1,
      yellowCards: 1,
      redCards: 1,
      grid: 1,
    },
  },
};

export const Selected: Story = {
  args: {
    player: {
      ...commonMockPlayer,
      goals: 1,
      assists: 1,
      fouls: 1,
      yellowCards: 1,
      redCards: 1,
      grid: 1,
    },
    isSelected: true,
  },
};

export const NoAssists: Story = {
  args: {
    player: {
      ...commonMockPlayer,
      goals: 1,
      assists: 0,
      fouls: 1,
      yellowCards: 1,
      redCards: 1,
      grid: 1,
    },
  },
};

export const NoGoals: Story = {
  args: {
    player: {
      ...commonMockPlayer,
      goals: 0,
      assists: 1,
      fouls: 1,
      yellowCards: 1,
      redCards: 1,
      grid: 1,
    },
  },
};

export const NoAttackPoints: Story = {
  args: {
    player: {
      ...commonMockPlayer,
      goals: 0,
      assists: 0,
      fouls: 1,
      yellowCards: 1,
      redCards: 1,
      grid: 1,
    },
  },
};
