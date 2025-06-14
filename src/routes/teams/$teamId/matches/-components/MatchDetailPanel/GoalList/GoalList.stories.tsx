import { lightThemeRawValues } from '@/styles/theme.css';

import type { Meta, StoryObj } from '@storybook/react';

import { GoalList } from './GoalList';

const meta = {
  title: 'Routes/Teams/Matches/MatchDetailPanel/GoalList',
  component: GoalList,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: lightThemeRawValues.color.primary[800],
        },
      ],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GoalList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    goals: [
      { time: '13', playerName: '호나우두', team: 'home' },
      { time: '41', playerName: '손흥민', team: 'away' },
      { time: '84', playerName: '손흥민', team: 'home' },
      { time: '91', playerName: '손흥민', team: 'away' },
    ],
  },
};

export const SingleGoal: Story = {
  args: {
    goals: [{ time: '23', playerName: '이강인', team: 'home' }],
  },
};

export const ManyGoals: Story = {
  args: {
    goals: [
      { time: '5', playerName: '손흥민', team: 'home' },
      { time: '12', playerName: '이강인', team: 'away' },
      { time: '23', playerName: '황희찬', team: 'home' },
      { time: '34', playerName: '손흥민', team: 'away' },
      { time: '45', playerName: '손흥민', team: 'home' },
      { time: '67', playerName: '황의조', team: 'away' },
      { time: '78', playerName: '손흥민', team: 'home' },
    ],
  },
};

export const NoGoals: Story = {
  args: {
    goals: [],
  },
};
