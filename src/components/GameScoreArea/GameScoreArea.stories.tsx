import type { Meta, StoryObj } from '@storybook/react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

import FCSeoulLogo from '@/assets/images/teams/fcseoul.png';
import FCSuwonLogo from '@/assets/images/teams/fcsuwon.png';
import {
  teamAwayColor,
  teamHomeColor,
} from '@/components/MatchLogList/colors.css';

import { GameScoreArea } from './GameScoreArea';

const meta = {
  title: 'Components/GameScoreArea',
  component: GameScoreArea,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          width: 300,
          ...assignInlineVars({
            [teamHomeColor]: '#D91920',
            [teamAwayColor]: '#003A70',
          }),
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof GameScoreArea>;

export default meta;
type Story = StoryObj<typeof GameScoreArea>;

export const Default: Story = {
  args: {
    scores: {
      home: 0,
      away: 0,
    },
    homeTeam: {
      name: 'FC 서울',
      logoImageUrl: FCSeoulLogo,
    },
    awayTeam: {
      name: 'FC 수원',
      logoImageUrl: FCSuwonLogo,
    },
  },
};

export const NoImage: Story = {
  args: {
    scores: {
      home: 0,
      away: 0,
    },
    homeTeam: {
      name: 'FC 서울',
    },
    awayTeam: {
      name: 'FC 수원',
    },
  },
};

export const Custom: Story = {
  args: {
    scores: {
      home: 17,
      away: 3,
    },
    homeTeam: {
      name: '한양대',
      logoImageUrl: FCSeoulLogo,
    },
    awayTeam: {
      name: '동국대',
      logoImageUrl: FCSuwonLogo,
    },
  },
};
