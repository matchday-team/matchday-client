import type { Meta, StoryObj } from '@storybook/react';

import { MatchParticipatedPlayerList } from './MatchParticipatedPlayerList';

const meta: Meta<typeof MatchParticipatedPlayerList> = {
  title: 'Routes/Teams/Matches/MatchParticipatedPlayerList',
  component: MatchParticipatedPlayerList,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div style={{ width: 354 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockHomeTeam = {
  id: 1,
  name: '홈팀 FC',
  logo: 'https://matchday2025.s3.ap-northeast-2.amazonaws.com/images/default-team-logo.svg',
  isHome: true,
  teamColor: '#3B82F6',
  score: 2,
};

const mockAwayTeam = {
  id: 2,
  name: '어웨이 유나이티드',
  logo: 'https://matchday2025.s3.ap-northeast-2.amazonaws.com/images/default-team-logo.svg',
  isHome: false,
  teamColor: '#EF4444',
  score: 1,
};

const mockPlayers = [
  {
    id: 1,
    number: 10,
    name: '김선수',
    position: 'FW',
    goals: 2,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
    isStarter: true,
  },
  {
    id: 2,
    number: 7,
    name: '이공격수',
    position: 'MF',
    goals: 1,
    assists: 2,
    yellowCards: 1,
    redCards: 0,
    isStarter: true,
  },
  {
    id: 3,
    number: 4,
    name: '박수비수',
    position: 'DF',
    goals: 0,
    assists: 0,
    yellowCards: 0,
    redCards: 0,
    isStarter: true,
  },
  {
    id: 4,
    number: 1,
    name: '최골키퍼',
    position: 'GK',
    goals: 0,
    assists: 0,
    yellowCards: 0,
    redCards: 0,
    isStarter: true,
  },
  {
    id: 5,
    number: 11,
    name: '정교체',
    position: 'FW',
    goals: 0,
    assists: 0,
    yellowCards: 0,
    redCards: 0,
    isStarter: false,
  },
];

const mockPlayersWithCards = [
  {
    id: 1,
    number: 10,
    name: '김득점왕',
    position: 'FW',
    goals: 3,
    assists: 1,
    yellowCards: 0,
    redCards: 0,
    isStarter: true,
  },
  {
    id: 2,
    number: 7,
    name: '옐로카드',
    position: 'MF',
    goals: 1,
    assists: 2,
    yellowCards: 2,
    redCards: 0,
    isStarter: true,
  },
  {
    id: 3,
    number: 4,
    name: '레드카드',
    position: 'DF',
    goals: 0,
    assists: 0,
    yellowCards: 1,
    redCards: 1,
    isStarter: true,
  },
  {
    id: 4,
    number: 9,
    name: '퇴장선수',
    position: 'MF',
    goals: 0,
    assists: 1,
    yellowCards: 0,
    redCards: 1,
    isStarter: true,
  },
];

export const Default: Story = {
  args: {
    players: mockPlayers,
    homeTeam: mockHomeTeam,
    awayTeam: mockAwayTeam,
  },
};

export const WithCards: Story = {
  args: {
    players: mockPlayersWithCards,
    homeTeam: mockHomeTeam,
    awayTeam: mockAwayTeam,
  },
};

export const EmptyPlayerList: Story = {
  args: {
    players: [],
    homeTeam: mockHomeTeam,
    awayTeam: mockAwayTeam,
  },
};

export const ManyPlayers: Story = {
  args: {
    players: [
      ...mockPlayers,
      ...mockPlayers,
      {
        id: 6,
        number: 2,
        name: '김수비',
        position: 'DF',
        goals: 0,
        assists: 1,
        yellowCards: 1,
        redCards: 0,
        isStarter: true,
      },
      {
        id: 7,
        number: 8,
        name: '미드필더',
        position: 'MF',
        goals: 1,
        assists: 3,
        yellowCards: 0,
        redCards: 0,
        isStarter: true,
      },
      {
        id: 8,
        number: 14,
        name: '박교체',
        position: 'FW',
        goals: 0,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
        isStarter: false,
      },
      {
        id: 9,
        number: 23,
        name: '최후보',
        position: 'DF',
        goals: 0,
        assists: 0,
        yellowCards: 0,
        redCards: 0,
        isStarter: false,
      },
    ],
    homeTeam: mockHomeTeam,
    awayTeam: mockAwayTeam,
  },
};
