import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { StatCounterItem } from './StatCounterItem';

const meta = {
  title: 'Components/StatCounterItem',
  component: StatCounterItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['grid', 'standalone'],
    },
    disabled: { control: 'boolean' },
    buttonDisabled: { control: 'boolean' },
    colorIntegration: { control: 'boolean' },
  },
} satisfies Meta<typeof StatCounterItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '골',
    value: 1,
    type: 'standalone',
  },
};

export const GridType: Story = {
  args: {
    ...Default.args,
    type: 'grid',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const ButtonDisabled: Story = {
  args: {
    ...Default.args,
    buttonDisabled: true,
  },
};

export const WithoutColorIntegration: Story = {
  args: {
    ...Default.args,
    colorIntegration: false,
  },
};

export const WithStatefulParent: Story = {
  args: Default.args,
  render: args => {
    const [value, setValue] = useState(args.value);

    return (
      <StatCounterItem
        {...args}
        value={value}
        onIncrement={() => setValue(value + 1)}
        onDecrement={() => setValue(value - 1)}
      />
    );
  },
};
