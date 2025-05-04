import { TeamType } from '@/stores';

export const dummyTeam1 = {
  id: 1,
  name: 'FC 울릉도',
  teamColor: '#D91920',
  logoImageUrl: '/images/team-logo.png',
};

export const dummyTeam2 = {
  id: 2,
  name: 'FC 독도',
  teamColor: '#003A70',
  logoImageUrl: '/images/team-logo.png',
};

export const mocked_getTeamByType = (teamType: TeamType) => {
  if (teamType === 'home') {
    return dummyTeam1;
  }

  return dummyTeam2;
};

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

export const mocked_getPlayersByTeamType = (teamType: TeamType) => {
  const startingIdx = teamType === 'home' ? 0 : 11;

  return Array.from({ length: 11 }, (_, idx) => ({
    id: startingIdx + 1 + idx,
    name: playerNames[startingIdx + 1 + idx],
    number: 99,
    position: 'FW',
    profileImageUrl: 'https://via.placeholder.com/150',
    goals: Math.max(0, 5 - idx),
    assists: Math.max(0, idx - 5),
    fouls: 2,
    yellowCards: idx % 2 === 0 ? 1 : 0,
    redCards: idx % 3 === 0 ? 1 : 0,
    grid: gridPositions[idx],
  }));
};

// NOTE: 겹치지 않게 단순히 거꾸로 주입
export const mocked_getSubstitutionPlayersByTeamType = (teamType: TeamType) => {
  return mocked_getPlayersByTeamType(teamType === 'home' ? 'away' : 'home');
};
