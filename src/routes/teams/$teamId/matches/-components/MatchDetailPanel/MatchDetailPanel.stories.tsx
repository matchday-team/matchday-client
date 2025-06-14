import type { Meta, StoryObj } from '@storybook/react';

import {
  mockAwayTeam,
  mockGoals,
  mockHomeTeam,
  mockPlayerStats,
} from '@/routes/teams/$teamId/matches/-mock-data';

import { MatchDetailPanel } from './MatchDetailPanel';

const meta = {
  title: 'Routes/Teams/Matches/MatchDetailPanel',
  component: MatchDetailPanel,
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
} satisfies Meta<typeof MatchDetailPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    players: mockPlayerStats,
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
    players: mockPlayerStats,
  },
};

export const Draw: Story = {
  args: {
    homeTeam: { ...mockHomeTeam, score: 2 },
    awayTeam: { ...mockAwayTeam, score: 2 },
    goals: [
      { time: '15', playerName: '손흥민', team: 'home' },
      { time: '34', playerName: '이강인', team: 'away' },
      { time: '67', playerName: '황의조', team: 'home' },
      { time: '89', playerName: '조규성', team: 'away' },
    ],
    duration: 96,
    playersPlayed: 14,
    totalPlayers: 16,
    date: '2025-03-10',
    location: '수원월드컵경기장',
    players: mockPlayerStats,
  },
};

export const LongLocation: Story = {
  args: {
    ...Default.args!,
    location:
      '서울특별시 성동구 왕십리로 222-1 한양대학교 대운동장 인조잔디구장',
  },
};
