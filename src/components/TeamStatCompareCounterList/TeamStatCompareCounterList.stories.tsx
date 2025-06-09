import { lightThemeVars } from '@/styles/theme.css';

import type { Meta, StoryObj } from '@storybook/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import {
  teamAwayColor,
  teamHomeColor,
} from '@/components/MatchLogList/colors.css';

import { TeamStatCompareCounterList } from './TeamStatCompareCounterList';

const meta = {
  title: 'Components/TeamStatCompareCounterList',
  component: TeamStatCompareCounterList,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          width: 320,
          ...assignInlineVars({
            [teamHomeColor]: lightThemeVars.color.soccer.red,
            [teamAwayColor]: '#003A70',
          }),
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof TeamStatCompareCounterList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxValue: 30,
    homeTeamStat: {
      goalCount: 12,
      validShotCount: 8,
      cornerKickCount: 5,
      offsideCount: 2,
      foulCount: 10,
      warningCount: 3,
      shotCount: 12,
      ownGoalCount: 0,
    },
    awayTeamStat: {
      goalCount: 8,
      validShotCount: 4,
      cornerKickCount: 7,
      offsideCount: 3,
      foulCount: 14,
      warningCount: 2,
      shotCount: 8,
      ownGoalCount: 0,
    },
  },
};

export const Empty: Story = {
  args: {
    maxValue: 30,
    homeTeamStat: {
      goalCount: 0,
      validShotCount: 0,
      cornerKickCount: 0,
      offsideCount: 0,
      foulCount: 0,
      warningCount: 0,
      shotCount: 0,
      ownGoalCount: 0,
    },
    awayTeamStat: {
      goalCount: 0,
      validShotCount: 0,
      cornerKickCount: 0,
      offsideCount: 0,
      foulCount: 0,
      warningCount: 0,
      shotCount: 0,
      ownGoalCount: 0,
    },
  },
};

export const Max20: Story = {
  args: {
    maxValue: 20,
    homeTeamStat: {
      goalCount: 10,
      validShotCount: 5,
      cornerKickCount: 5,
      offsideCount: 2,
      foulCount: 12,
      warningCount: 2,
      shotCount: 10,
      ownGoalCount: 0,
    },
    awayTeamStat: {
      goalCount: 10,
      validShotCount: 5,
      cornerKickCount: 5,
      offsideCount: 2,
      foulCount: 12,
      warningCount: 2,
      shotCount: 10,
      ownGoalCount: 0,
    },
  },
};
