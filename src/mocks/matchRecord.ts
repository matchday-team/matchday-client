import { lightThemeVars } from '@/styles/theme.css';

import {
  MatchEventResponse,
  MatchInfoResponse,
  MatchUserResponse,
  TeamResponse,
} from '@/apis/models';
import { MatchEventType } from '@/constants';

export const mockMatchInfo: MatchInfoResponse = {
  stadium: '한양대학교 대운동장',
  matchDate: '2025-04-16',
  plannedStartTime: '09:30',
  plannedEndTime: '11:30',
  mainRefereeName: '김태인',
  assistantReferee1: '김주용',
  assistantReferee2: '주유나',
  fourthReferee: '김성빈',
  id: 1,
  homeTeamId: 1,
  awayTeamId: 2,
  firstHalfStartTime: '09:30',
  firstHalfEndTime: '10:15',
  secondHalfStartTime: '10:30',
  secondHalfEndTime: '11:15',
  title: 'K리그 1 25라운드',
  firstHalfPeriod: 45,
  secondHalfPeriod: 45,
};

export const mockHomeTeam: TeamResponse = {
  id: 1,
  name: 'FC 서울',
  teamColor: lightThemeVars.color.soccer.red,
  bottomColor: lightThemeVars.color.soccer.red,
  stockingColor: lightThemeVars.color.soccer.red,
  teamImg: 'https://example.com/logo1.png',
};

export const mockAwayTeam: TeamResponse = {
  id: 2,
  name: '수원 삼성',
  teamColor: '#003A70',
  bottomColor: '#003A70',
  stockingColor: '#003A70',
  teamImg: 'https://example.com/logo2.png',
};

export const mockHomePlayer: MatchUserResponse = {
  id: 1,
  userId: 1,
  name: '호나우두',
  number: 99,
  matchPosition: 'FW',
  goals: 10,
  ownGoals: 10,
  assists: 10,
  caution: 10,
  yellowCards: 0,
  redCards: 0,
  matchGrid: 1,
  sentOff: false,
  profileImg: 'https://example.com/profile1.png',
  subIn: false,
  subOut: false,
};

export const mockAwayPlayer: MatchUserResponse = {
  id: 2,
  userId: 2,
  name: '이순신',
  number: 10,
  goals: 10,
  ownGoals: 10,
  assists: 10,
  caution: 10,
  yellowCards: 0,
  redCards: 0,
  matchGrid: 1,
  sentOff: false,
  matchPosition: 'FW',
  profileImg: 'https://example.com/profile2.png',
  subIn: false,
  subOut: false,
};

export const mockLogs: MatchEventResponse[] = Array.from(
  { length: 10 },
  (_, index) => [
    {
      id: index * 3 + 1,
      eventLog: MatchEventType.VALID_SHOT,
      teamId: mockHomeTeam.id,
      teamName: mockHomeTeam.name,
      userId: mockHomePlayer.id,
      userName: mockHomePlayer.name,
      elapsedMinutes: 10,
      halfType: 'first',
    },
    {
      id: index * 3 + 2,
      eventLog: MatchEventType.GOAL,
      teamId: mockAwayTeam.id,
      teamName: mockAwayTeam.name,
      userId: mockAwayPlayer.id,
      userName: mockAwayPlayer.name,
      elapsedMinutes: 10,
      halfType: 'first',
    },
    {
      id: index * 3 + 3,
      eventLog: MatchEventType.GOAL,
      teamId: mockHomeTeam.id,
      teamName: mockHomeTeam.name,
      userId: mockHomePlayer.id,
      userName: mockHomePlayer.name,
      elapsedMinutes: 9999,
      halfType: 'first',
    },
  ],
).flat();

type TeamType = 'home' | 'away';

const gridPositions = [2, 5, 7, 9, 11, 13, 17, 21, 22, 23, 27];

const playerNames = [
  '---', // NOTE: idx:0 미사용
  '윤빛가람',
  '조규성',
  '손흥민',
  '기성용',
  '황희찬',
  '이강인',
  '정우영',
  '김민재',
  '황인범',
  '이재성',
  '남태희',
  '차두리구',
  '박지성',
  '황선홍',
  '이동국',
  '차범근',
  '홍명보',
  '유상철',
  '이운재',
  '권창훈',
  '김영권',
  '박주영',
  '김승규',
  '이용',
];

export const mockPlayersByTeamType = (
  teamType: TeamType,
): MatchUserResponse[] => {
  const startingIdx = teamType === 'home' ? 0 : 11;

  return Array.from({ length: 11 }, (_, idx) => ({
    id: startingIdx + 1 + idx,
    userId: startingIdx + 1 + idx,
    name: playerNames[startingIdx + 1 + idx],
    number: idx % 2 === 0 ? 99 : 1,
    matchPosition: 'FW',
    profileImg: 'https://via.placeholder.com/150',
    goals: Math.max(0, 5 - idx),
    ownGoals: Math.max(0, idx - 4),
    assists: Math.max(0, idx - 5),
    caution: 2,
    yellowCards: idx % 2 === 0 ? 1 : 0,
    redCards: idx % 3 === 0 ? 1 : 0,
    sentOff: idx % 3 === 0, // NOTE: 레드 받으면 sentOff
    matchGrid: gridPositions[idx], // FIXME: 추후 변경 예정
    subIn: idx % 4 === 0,
    subOut: idx % 2 === 0,
  }));
};

// NOTE: 겹치지 않게 단순히 거꾸로 주입
export const mockSubPlayersByTeamType = (teamType: TeamType) => {
  return mockPlayersByTeamType(teamType === 'home' ? 'away' : 'home');
};
