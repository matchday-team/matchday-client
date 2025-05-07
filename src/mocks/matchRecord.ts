import { MatchEventResponse, MatchUserResponse } from '@/apis/models';
import { TeamResponse } from '@/apis/models';
import { lightThemeVars } from '@/styles/theme.css';

export const mockHomeTeam: TeamResponse = {
  id: 1,
  name: 'FC 서울',
  teamColor: lightThemeVars.color.soccer.red,
  bottomColor: lightThemeVars.color.soccer.red,
  stockingColor: lightThemeVars.color.soccer.red,
  // logoImageUrl: 'https://example.com/logo1.png',
};

export const mockAwayTeam: TeamResponse = {
  id: 2,
  name: '수원 삼성',
  teamColor: '#003A70',
  bottomColor: '#003A70',
  stockingColor: '#003A70',
  // logoImageUrl: 'https://example.com/logo2.png',
};

export const mockHomePlayer: MatchUserResponse = {
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

export const mockAwayPlayer: MatchUserResponse = {
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

export const mockLogs: MatchEventResponse[] = Array.from(
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
  '차두리',
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
    name: playerNames[startingIdx + 1 + idx],
    number: 99,
    matchPosition: 'FW',
    profileImageUrl: 'https://via.placeholder.com/150',
    goals: Math.max(0, 5 - idx),
    assists: Math.max(0, idx - 5),
    caution: 2,
    yellowCards: idx % 2 === 0 ? 1 : 0,
    redCards: idx % 3 === 0 ? 1 : 0,
    sentOff: false,
    matchGrid: `${gridPositions[idx]}`, // FIXME: 추후 변경 예정
  }));
};

// NOTE: 겹치지 않게 단순히 거꾸로 주입
export const mockSubPlayersByTeamType = (teamType: TeamType) => {
  return mockPlayersByTeamType(teamType === 'home' ? 'away' : 'home');
};
