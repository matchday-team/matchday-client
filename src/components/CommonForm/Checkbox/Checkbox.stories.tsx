import { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { lightThemeVars } from '@/styles/theme.css';

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
  render: args => {
    const [checked, setChecked] = useState(args.checked);
    useEffect(() => {
      setChecked(args.checked);
    }, [args.checked]);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      >
        기본값
      </Checkbox>
    );
  },
  args: {
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  render: args => (
    <Checkbox {...args} checked>
      체크됨
    </Checkbox>
  ),
  args: {
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  render: args => (
    <Checkbox {...args} disabled>
      비활성화
    </Checkbox>
  ),
  args: {
    checked: false,
    disabled: true,
  },
};

export const CheckedAndDisabled: Story = {
  render: args => (
    <Checkbox {...args} checked disabled>
      체크+비활성화
    </Checkbox>
  ),
  args: {
    checked: true,
    disabled: true,
  },
};
