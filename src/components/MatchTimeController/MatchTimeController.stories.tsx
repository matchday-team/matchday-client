import type { Meta, StoryObj } from '@storybook/react';

import { lightThemeVars } from '@/styles/theme.css';

import { MatchTimeController } from './MatchTimeController';
import { getTimeAgo, getUnixTimestampInSeconds } from './timeUtils';

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
          width: 280,
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

const now = getUnixTimestampInSeconds();

export const Default: Story = {
  args: {
    now,
    matchStatus: {
      currentPeriod: 1,
      state: 'playing',
      startedAt: getTimeAgo({ minutes: 50, seconds: 0, now }),
      addedTime: 5,
    },
    periodNames: ['전반', '후반'],
  },
};

export const NotStarted: Story = {
  args: {
    now,
    matchStatus: {
      currentPeriod: 1,
      state: 'notStarted',
      startedAt: getTimeAgo({ minutes: 0, seconds: 0, now }),
      addedTime: 0,
    },
    periodNames: ['전반', '후반'],
  },
};

export const FirstHalfEnded: Story = {
  args: {
    now,
    matchStatus: {
      currentPeriod: 1,
      state: 'ended',
      startedAt: getTimeAgo({ minutes: 45, seconds: 0, now }),
      addedTime: 0,
    },
    periodNames: ['전반', '후반'],
  },
};

export const SecondHalfPlaying: Story = {
  args: {
    now,
    matchStatus: {
      currentPeriod: 2,
      state: 'playing',
      startedAt: getTimeAgo({ minutes: 60, seconds: 30, now }),
      addedTime: 0,
    },
    periodNames: ['전반', '후반'],
  },
};

export const SecondHalfEnded: Story = {
  args: {
    now,
    matchStatus: {
      currentPeriod: 2,
      state: 'ended',
      startedAt: getTimeAgo({ minutes: 91, seconds: 30, now }),
      addedTime: 1,
    },
    periodNames: ['전반', '후반'],
  },
};

export const Quarter: Story = {
  args: {
    now,
    matchStatus: {
      currentPeriod: 2,
      state: 'playing',
      startedAt: getTimeAgo({ minutes: 8, seconds: 45, now }),
      addedTime: 0,
    },
    periodNames: ['1쿼터', '2쿼터', '3쿼터', '4쿼터'],
  },
};
