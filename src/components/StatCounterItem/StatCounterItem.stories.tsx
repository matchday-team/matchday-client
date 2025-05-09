import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { teamColor } from '@/components/PlayerList/TeamColor.css';
import { lightThemeVars } from '@/styles/theme.css';

import { StatCounterItem } from './StatCounterItem';

const meta = {
  title: 'components/StatCounterItem',
  component: StatCounterItem,
  parameters: {
    layout: 'centered',
  },

  decorators: [
    Story => (
      <div
        style={assignInlineVars({
          [teamColor]: lightThemeVars.color.soccer.red,
        })}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof StatCounterItem>;

export default meta;
type Story = StoryObj<typeof StatCounterItem>;

export const Default: Story = {
  args: {
    title: '득점',
    value: 0,
  },
};

export const WithParentState: Story = {
  args: {
    title: '득점',
    value: 2,
  },
  render: args => {
    const [value, setValue] = useState(args.value);

    return (
      <div
        style={assignInlineVars({
          [teamColor]: lightThemeVars.color.soccer.red,
        })}
      >
        <StatCounterItem
          {...args}
          value={value}
          onIncrement={() => setValue(value + 1)}
          onDecrement={() => setValue(value - 1)}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    title: '득점',
    value: 0,
    disabled: true,
  },
};
