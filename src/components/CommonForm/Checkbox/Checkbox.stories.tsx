import { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { lightThemeVars } from '@/styles/theme.css';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'CommonForm/Checkbox',
  component: Checkbox,
  decorators: [
    Story => (
      <div
        style={{
          padding: 24,
          background: lightThemeVars.color.white.background,
          minHeight: 100,
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
    label: { control: 'text' },
    'aria-invalid': { control: 'boolean' },
  },
  args: {
    label: '제한 없음',
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
      />
    );
  },
  args: {
    label: '기본값',
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  render: args => <Checkbox {...args} checked />,
  args: {
    label: '체크됨',
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  render: args => <Checkbox {...args} disabled />,
  args: {
    label: '비활성화',
    checked: false,
    disabled: true,
  },
};
