import { lightThemeVars } from '@/styles/theme.css';

import type { Meta, StoryObj } from '@storybook/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { selectedTeamColorVar } from '@/features/matchRecord/styles';
import { matchRecordMocks } from '@/mocks';

import { TeamStatCounterGrid } from './TeamStatCounterGrid';

const meta = {
  title: 'Components/TeamStatCounterGrid',
  component: TeamStatCounterGrid,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={assignInlineVars({
          [selectedTeamColorVar]: lightThemeVars.color.soccer.red,
        })}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof TeamStatCounterGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    stats: {
      goalCount: 13,
      shotCount: 2,
      validShotCount: 4,
      cornerKickCount: 1,
      offsideCount: 0,
      foulCount: 24,
      warningCount: 10,
      ownGoalCount: 0,
    },
  },
};

export const Empty: Story = {
  args: {
    team: matchRecordMocks.mockHomeTeam,
    stats: {
      goalCount: 0,
      shotCount: 0,
      validShotCount: 0,
      cornerKickCount: 0,
      offsideCount: 0,
      foulCount: 0,
      warningCount: 0,
      ownGoalCount: 0,
    },
  },
};
