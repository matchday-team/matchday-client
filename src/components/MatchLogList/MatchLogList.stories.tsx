import type { Meta, StoryObj } from '@storybook/react';

import {
  MatchEventResponse,
  MatchUserResponse,
  TeamResponse,
} from '@/apis/models';
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

const mockHomeTeam: TeamResponse = {
  id: 1,
  name: 'FC 서울',
  teamColor: lightThemeVars.color.soccer.red,
  bottomColor: lightThemeVars.color.soccer.red,
  stockingColor: lightThemeVars.color.soccer.red,
  // logoImageUrl: 'https://example.com/logo1.png',
};

const mockAwayTeam: TeamResponse = {
  id: 2,
  name: '수원 삼성',
  teamColor: '#003A70',
  bottomColor: '#003A70',
  stockingColor: '#003A70',
  // logoImageUrl: 'https://example.com/logo2.png',
};

const mockHomePlayer: MatchUserResponse = {
  id: 1,
  name: '홍길동',
  number: 10,
  matchPosition: 'FW',
  // profileImageUrl: 'https://example.com/profile1.png',
  goals: 10,
  assists: 10,
  caution: 10,
  yellowCards: 0,
  redCards: 0,
  matchGrid: '1',
  sentOff: false,
};

const mockAwayPlayer: MatchUserResponse = {
  id: 2,
  name: '이순신',
  number: 10,
  // profileImageUrl: 'https://example.com/profile2.png',
  goals: 10,
  assists: 10,
  caution: 10,
  yellowCards: 0,
  redCards: 0,
  matchGrid: '1',
  sentOff: false,
  matchPosition: 'FW',
};

const mockLogs: MatchEventResponse[] = Array.from(
  { length: 10 },
  (_, index) => [
    {
      id: index * 3 + 1,
      eventLog: '유효 슈팅',
      teamId: mockHomeTeam.id,
      teamName: mockHomeTeam.name,
      userId: mockHomePlayer.id,
      userName: mockHomePlayer.name,
      elapsedMinutes: 10,
    },
    {
      id: index * 3 + 2,
      eventLog: '골',
      teamId: mockAwayTeam.id,
      teamName: mockAwayTeam.name,
      userId: mockAwayPlayer.id,
      userName: mockAwayPlayer.name,
      elapsedMinutes: 10,
    },
    {
      id: index * 3 + 3,
      eventLog: '골',
      teamId: mockHomeTeam.id,
      teamName: mockHomeTeam.name,
      userId: mockHomePlayer.id,
      userName: mockHomePlayer.name,
      elapsedMinutes: 10,
    },
  ],
).flat();

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
