import type { Meta, StoryObj } from '@storybook/react';

import { lightThemeVars } from '@/styles/theme.css';

import { MatchTimeController } from './MatchTimeController';
import { getTimeAgo } from './timeUtils';

const meta: Meta<typeof MatchTimeController> = {
  title: 'Components/MatchTimeController',
  component: MatchTimeController,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          padding: 100,
          backgroundColor: lightThemeVars.color.white.background,
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MatchTimeController>;

export const Default: Story = {
  args: {
    matchStatus: {
      currentPeriod: 1,
      state: 'playing',
      startedAt: getTimeAgo({ minutes: 50 }),
      addedTime: 5,
    },
    periodNames: ['전반', '후반'],
  },
};

export const NotStarted: Story = {
  args: {
    matchStatus: {
      currentPeriod: 1,
      state: 'end',
      startedAt: getTimeAgo({ minutes: 45 }),
      addedTime: 0,
    },
    periodNames: ['전반', '후반'],
  },
};

export const FirstHalfEnded: Story = {
  args: {
    matchStatus: {
      currentPeriod: 1,
      state: 'end',
      startedAt: getTimeAgo({ minutes: 45 }),
      addedTime: 0,
    },
    periodNames: ['전반', '후반'],
  },
};

export const SecondHalfPlaying: Story = {
  args: {
    matchStatus: {
      currentPeriod: 2,
      state: 'playing',
      startedAt: getTimeAgo({ minutes: 60, seconds: 30 }),
      addedTime: 0,
    },
    periodNames: ['전반', '후반'],
  },
};

export const Quarter: Story = {
  args: {
    matchStatus: {
      currentPeriod: 2,
      state: 'playing',
      startedAt: getTimeAgo({ minutes: 8, seconds: 45 }),
      addedTime: 0,
    },
    periodNames: ['1쿼터', '2쿼터', '3쿼터', '4쿼터'],
  },
};
