import type { Meta, StoryObj } from '@storybook/react';

import { TinyBarChart } from './TinyBarChart';

const meta = {
  title: 'Components/TinyBarChart',
  component: TinyBarChart,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div style={{ width: 280, padding: 20 }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof TinyBarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 70,
    maxValue: 100,
    isLeft: false,
    color: '#FF9500',
  },
};

export const Zero: Story = {
  args: {
    value: 0,
    maxValue: 100,
    isLeft: false,
    color: '#FF9500',
  },
};

export const MaxValue: Story = {
  args: {
    value: 100,
    maxValue: 100,
    isLeft: false,
    color: '#FF9500',
  },
};

export const LeftSide: Story = {
  args: {
    value: 70,
    maxValue: 100,
    isLeft: true,
    color: '#003A70',
  },
};
