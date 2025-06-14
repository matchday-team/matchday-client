import type { Meta, StoryObj } from '@storybook/react';

import { MatchHeader } from './MatchHeader';

const meta = {
  title: 'Routes/Teams/Matches/MatchDetailCard/MatchHeader',
  component: MatchHeader,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#1C263C',
        },
      ],
    },
  },
  decorators: [
    Story => (
      <div
        style={{
          padding: '20px',
          backgroundColor: '#1C263C',
          width: 300,
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof MatchHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockHomeTeam = {
  id: 1,
  name: 'FC 서울',
  logo: 'https://matchday2025.s3.ap-northeast-2.amazonaws.com/images/default-team-logo.svg',
  isHome: true,
  score: 3,
  teamColor: '#AA33FF',
};

const mockAwayTeam = {
  id: 2,
  name: 'FC 수원',
  logo: 'https://matchday2025.s3.ap-northeast-2.amazonaws.com/images/default-team-logo.svg',
  isHome: false,
  score: 1,
  teamColor: '#30CAB3',
};

export const Default: Story = {
  args: {
    homeTeam: mockHomeTeam,
    awayTeam: mockAwayTeam,
  },
};

export const LongTeamNames: Story = {
  args: {
    homeTeam: { ...mockHomeTeam, name: 'FC 서울 유나이티드' },
    awayTeam: { ...mockAwayTeam, name: 'FC 수원' },
  },
};
