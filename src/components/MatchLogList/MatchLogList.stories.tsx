import type { Meta, StoryObj } from '@storybook/react';

import { StartingPlayer, Team } from '@/apis';
import { lightThemeVars } from '@/styles/theme.css';

import { MatchLogList } from './MatchLogList';
import * as styles from './MatchLogList.stories.css';

const meta = {
  title: 'Components/MatchLogList',
  component: MatchLogList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className={styles.rootContainer}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MatchLogList>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockHomeTeam: Team = {
  id: 1,
  name: 'FC 서울',
  teamColor: lightThemeVars.color.soccer.red,
  logoImageUrl: 'https://example.com/logo1.png',
};

const mockAwayTeam: Team = {
  id: 2,
  name: '수원 삼성',
  teamColor: '#003A70',
  logoImageUrl: 'https://example.com/logo2.png',
};

const mockHomePlayer: StartingPlayer = {
  id: 1,
  name: '홍길동',
  number: 10,
  position: 'FW',
  profileImageUrl: 'https://example.com/profile1.png',
  goals: 10,
  assists: 10,
  fouls: 10,
};

const mockAwayPlayer: StartingPlayer = {
  id: 2,
  name: '이순신',
  number: 10,
  position: 'FW',
  profileImageUrl: 'https://example.com/profile2.png',
  goals: 10,
  assists: 10,
  fouls: 10,
};

const mockLogs = Array.from({ length: 10 }, (_, index) => [
  {
    id: index * 3 + 1,
    time: new Date('2024-01-01'),
    team: mockHomeTeam,
    player: mockHomePlayer,
    action: '유효 슈팅',
  },
  {
    id: index * 3 + 2,
    time: new Date('2024-01-01'),
    team: mockAwayTeam,
    player: mockAwayPlayer,
    action: '골',
  },
  {
    id: index * 3 + 3,
    time: new Date('2024-01-01'),
    team: mockHomeTeam,
    player: mockHomePlayer,
    action: '골',
  },
]).flat();

export const Default: Story = {
  args: {
    teams: {
      home: mockHomeTeam,
      away: mockAwayTeam,
    },
    logs: mockLogs,
  },
};

export const EmptyPlayers: Story = {
  name: '빈 경기 로그',
  args: {
    teams: {
      home: mockHomeTeam,
      away: mockAwayTeam,
    },
    logs: [],
  },
};
