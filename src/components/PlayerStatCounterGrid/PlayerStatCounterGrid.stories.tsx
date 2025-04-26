import type { Meta, StoryObj } from '@storybook/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import { teamColor } from '@/components/PlayerList/TeamColor.css';
import { lightThemeVars } from '@/styles/theme.css';

import { PlayerStatCounterGrid } from './PlayerStatCounterGrid';

const meta = {
  title: 'Components/PlayerStatCounterGrid',
  component: PlayerStatCounterGrid,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          width: '280px',
          ...assignInlineVars({
            [teamColor]: lightThemeVars.color.soccer.red,
          }),
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof PlayerStatCounterGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const dummyTeam = {
  logoImageUrl: 'https://via.placeholder.com/150',
  id: 1,
  name: '홍길동',
  teamColor: '#000000',
};

const dummyPlayer = {
  number: 91,
  name: '홍길동',
  position: 'FW',
  profileImageUrl: 'https://via.placeholder.com/150',
  goals: 10,
  assists: 5,
  fouls: 3,
  id: 1,
  yellowCards: 0,
  redCards: 0,
};

export const Default: Story = {
  args: {
    team: dummyTeam,
    player: dummyPlayer,
  },
};

export const OneYellowCard: Story = {
  args: {
    team: dummyTeam,
    player: {
      ...dummyPlayer,
      yellowCards: 1,
    },
  },
};

export const OneRedCard: Story = {
  args: {
    team: dummyTeam,
    player: {
      ...dummyPlayer,
      redCards: 1,
    },
  },
};
