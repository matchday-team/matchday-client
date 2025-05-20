import { queryOptions } from '@tanstack/react-query';

import { matchApi } from '@/apis/fetchers';

// TODO: 파일명을 matches로 변경
const queryKeyNamespaces = {
  matches: 'matches',
};

const queryKeys = {
  matchInfo: (matchId: number) => [queryKeyNamespaces.matches, matchId, 'info'],
  matchScore: (matchId: number) => [
    queryKeyNamespaces.matches,
    matchId,
    'score',
  ],
  matchEvents: (matchId: number) => [
    queryKeyNamespaces.matches,
    matchId,
    'events',
  ],
  matchPlayers: (matchId: number) => [
    queryKeyNamespaces.matches,
    matchId,
    'players',
  ],
  matchMemo: (matchId: number) => [queryKeyNamespaces.matches, matchId, 'memo'],
  matchList: (teamId: number) => [queryKeyNamespaces.matches, 'list', teamId],
};

export const rangeQueryKeys = {
  byId: (matchId: number) => [queryKeyNamespaces.matches, matchId],
};

export const info = (matchId: number) =>
  queryOptions({
    queryKey: queryKeys.matchInfo(matchId),
    queryFn: () => matchApi.getMatchInfoByMatchId(matchId),
  });

export const score = (matchId: number) =>
  queryOptions({
    queryKey: queryKeys.matchScore(matchId),
    queryFn: () => matchApi.getMatchScoreByMatchId(matchId),
  });

export const events = (matchId: number) =>
  queryOptions({
    queryKey: queryKeys.matchEvents(matchId),
    queryFn: () => matchApi.getMatchEventsByMatchId(matchId),
  });

export const players = (matchId: number) =>
  queryOptions({
    queryKey: queryKeys.matchPlayers(matchId),
    queryFn: () => matchApi.getMatchPlayersByMatchId(matchId),
  });

export const memo = (matchId: number) =>
  queryOptions({
    queryKey: queryKeys.matchMemo(matchId),
    queryFn: () => matchApi.getMatchMemoByMatchId(matchId),
  });

export const list = (teamId: number) =>
  queryOptions({
    queryKey: queryKeys.matchList(teamId),
    queryFn: () => matchApi.getMatchListByTeamId(teamId),
  });
