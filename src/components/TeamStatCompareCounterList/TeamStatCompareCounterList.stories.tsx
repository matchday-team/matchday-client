import type { Meta, StoryObj } from '@storybook/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import {
  teamAwayColor,
  teamHomeColor,
} from '@/components/MatchLogList/colors.css';
import { lightThemeVars } from '@/styles/theme.css';

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
      슈팅: 12,
      '유효 슈팅': 8,
      '코너 킥': 5,
      '오프 사이드': 2,
      파울: 10,
      경고: 3,
    },
    awayTeamStat: {
      슈팅: 8,
      '유효 슈팅': 4,
      '코너 킥': 7,
      '오프 사이드': 3,
      파울: 14,
      경고: 2,
    },
  },
};

export const Empty: Story = {
  args: {
    maxValue: 30,
    homeTeamStat: {
      슈팅: 0,
      '유효 슈팅': 0,
      '코너 킥': 0,
      '오프 사이드': 0,
      파울: 0,
      경고: 0,
    },
    awayTeamStat: {
      슈팅: 0,
      '유효 슈팅': 0,
      '코너 킥': 0,
      '오프 사이드': 0,
      파울: 0,
      경고: 0,
    },
  },
};

export const Max20: Story = {
  args: {
    maxValue: 20,
    homeTeamStat: {
      슈팅: 10,
      '유효 슈팅': 5,
      '코너 킥': 5,
      '오프 사이드': 2,
      파울: 12,
      경고: 2,
    },
    awayTeamStat: {
      슈팅: 10,
      '유효 슈팅': 5,
      '코너 킥': 5,
      '오프 사이드': 2,
      파울: 12,
      경고: 2,
    },
  },
};
