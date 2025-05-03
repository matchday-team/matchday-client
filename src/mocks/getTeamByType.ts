import { TeamType } from '@/stores';

import { dummyTeam1, dummyTeam2 } from './startingPlayers';

export const mocked_getTeamByType = (teamType: TeamType) => {
  if (teamType === 'home') {
    return dummyTeam1;
  }

  return dummyTeam2;
};

const gridPositions = [2, 5, 7, 9, 11, 13, 17, 21, 22, 23, 27];

export const mocked_getPlayersByTeamType = (teamType: TeamType) => {
  const startingIdx = teamType === 'home' ? 0 : 11;

  return Array.from({ length: 11 }, (_, idx) => ({
    id: startingIdx + 1 + idx,
    name: '손흥민',
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
