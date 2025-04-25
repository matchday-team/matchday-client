import type { Meta, StoryObj } from '@storybook/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

// FIXME: teamColor 공통화 필요
import { teamColor } from '@/components/PlayerList/TeamColor.css';
import { lightThemeVars } from '@/styles/theme.css';

import { TeamStatCounterGrid } from './TeamStatCounterGrid';

const meta = {
  title: 'Components/TeamStatCounterGrid',
  component: TeamStatCounterGrid,
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
} satisfies Meta<typeof TeamStatCounterGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const statFields = [
  '슈팅',
  '유효 슈팅',
  '코너킥',
  '오프사이드',
  '파울',
  '경고',
];

export const Default: Story = {
  args: {
    stats: statFields.map(title => ({
      title,
      value: Math.floor(Math.random() * 30),
    })),
  },
};

export const Empty: Story = {
  args: {
    stats: statFields.map(title => ({ title, value: 0 })),
  },
};
