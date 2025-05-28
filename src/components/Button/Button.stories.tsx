import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'danger'],
    },
    children: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '팀 생성하기',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: '팀 삭제하기',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: '팀 생성하기',
    disabled: true,
  },
};
