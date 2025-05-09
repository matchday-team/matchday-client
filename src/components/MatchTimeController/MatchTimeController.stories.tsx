import type { Meta, StoryObj } from '@storybook/react';

import { lightThemeVars } from '@/styles/theme.css';

import { MatchTimeController } from './MatchTimeController';

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

export const Default: Story = {
  args: {
    timerText: '17:00',
    currentPeriod: 'first',
    isPlaying: true,
    addedTime: 0,
  },
};

export const NotStarted: Story = {
  args: {
    timerText: '00:00',
    currentPeriod: 'not-started',
    isPlaying: false,
    addedTime: 0,
  },
};

export const FirstHalfEnded: Story = {
  args: {
    timerText: '45:00',
    currentPeriod: 'half-time',
    isPlaying: false,
    addedTime: 3,
  },
};

export const SecondHalfPlaying: Story = {
  args: {
    timerText: '61:37',
    currentPeriod: 'second',
    isPlaying: true,
    addedTime: 0,
  },
};

export const SecondHalfEnded: Story = {
  args: {
    timerText: '90:00',
    currentPeriod: 'end',
    isPlaying: false,
    addedTime: 6,
  },
};
