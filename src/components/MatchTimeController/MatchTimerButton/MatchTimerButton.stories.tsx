import { lightThemeVars } from '@/styles/theme.css';

import type { Meta, StoryObj } from '@storybook/react';

import { MatchTimerButton } from './MatchTimerButton';

const meta: Meta<typeof MatchTimerButton> = {
  title: 'Components/MatchTimerButton',
  component: MatchTimerButton,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderLeft: `1px solid ${lightThemeVars.color.primary[100]}`,
          width: 84,
          height: 58,
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
type Story = StoryObj<typeof MatchTimerButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '전반 시작',
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: 'primary',
    children: '시작',
    disabled: true,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: '시작 취소',
  },
};

export const DangerDisabled: Story = {
  args: {
    variant: 'danger',
    children: '시작 취소',
    disabled: true,
  },
};
