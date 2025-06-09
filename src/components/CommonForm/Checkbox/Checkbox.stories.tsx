import { lightThemeVars } from '@/styles/theme.css';

import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'CommonForm/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          padding: 24,
          background: lightThemeVars.color.white.background,
          minHeight: 50,
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    checked: false,
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    children: '기본값',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    children: '체크됨',
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    children: '비활성화',
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    children: '체크+비활성화',
  },
};
