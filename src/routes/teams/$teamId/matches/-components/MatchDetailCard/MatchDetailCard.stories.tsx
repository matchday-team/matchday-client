import type { Meta, StoryObj } from '@storybook/react';

import { MatchDetailCard } from './MatchDetailCard';

const meta = {
  title: 'Routes/Teams/Matches/MatchDetailCard',
  component: MatchDetailCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          width: 500,
          margin: '20px auto',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof MatchDetailCard>;

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

const mockGoals = [
  { time: '13', playerName: '손흥민', team: 'home' },
  { time: '41', playerName: '손흥민', team: 'away' },
  { time: '84', playerName: '손흥민', team: 'home' },
  { time: '91', playerName: '손흥민', team: 'away' },
];

const mockPlayers = [
  {
    id: 1,
    number: 7,
    name: '손흥민',
    position: 'FW',
    goals: 1,
    assists: 0,
    yellowCards: 0,
    redCards: 0,
    isStarter: true,
  },
  {
    id: 2,
    number: 10,
    name: '이강인',
    position: 'MF',
    goals: 0,
    assists: 1,
    yellowCards: 1,
    redCards: 0,
    isStarter: true,
  },
  {
    id: 3,
    number: 9,
    name: '황희찬',
    position: 'FW',
    goals: 2,
    assists: 0,
    yellowCards: 0,
    redCards: 1,
    isStarter: true,
  },
  {
    id: 4,
    number: 4,
    name: '김민재',
    position: 'DF',
    goals: 0,
    assists: 0,
    yellowCards: 0,
    redCards: 0,
    isStarter: true,
  },
  {
    id: 5,
    number: 22,
    name: '권창훈',
    position: 'MF',
    goals: 0,
    assists: 0,
    yellowCards: 0,
    redCards: 0,
    isStarter: false,
  },
];

export const Default: Story = {
  args: {
    homeTeam: mockHomeTeam,
    awayTeam: mockAwayTeam,
    goals: mockGoals,
    duration: 103,
    playersPlayed: 13,
    totalPlayers: 16,
    date: '2025-04-23',
    location: '서울 성동구 왕십리로 22',
    players: mockPlayers,
  },
};

export const HighScoringMatch: Story = {
  args: {
    homeTeam: { ...mockHomeTeam, score: 5 },
    awayTeam: { ...mockAwayTeam, score: 4 },
    goals: [
      { time: '5', playerName: '손흥민', team: 'home' },
      { time: '12', playerName: '이강인', team: 'away' },
      { time: '23', playerName: '황희찬', team: 'home' },
      { time: '34', playerName: '손흥민', team: 'home' },
      { time: '45', playerName: '손흥민', team: 'home' },
      { time: '67', playerName: '황의조', team: 'away' },
      { time: '78', playerName: '손흥민', team: 'home' },
      { time: '82', playerName: '이강인', team: 'away' },
      { time: '90', playerName: '황희찬', team: 'away' },
    ],
    duration: 95,
    playersPlayed: 15,
    totalPlayers: 18,
    date: '2025-05-15',
    location: '서울월드컵경기장',
    players: mockPlayers,
  },
};

export const Draw: Story = {
  args: {
    homeTeam: { ...mockHomeTeam, score: 2 },
    awayTeam: { ...mockAwayTeam, score: 2 },
    goals: [
      { time: '15', playerName: '손흥민' },
      { time: '34', playerName: '이강인' },
      { time: '67', playerName: '황의조' },
      { time: '89', playerName: '조규성' },
    ],
    duration: 96,
    playersPlayed: 14,
    totalPlayers: 16,
    date: '2025-03-10',
    location: '수원월드컵경기장',
    players: mockPlayers,
  },
};

export const LongLocation: Story = {
  args: {
    ...Default.args!,
    location:
      '서울특별시 성동구 왕십리로 222-1 한양대학교 대운동장 인조잔디구장',
  },
};
