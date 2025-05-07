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

export const infoQuery = (matchId: number) => ({
  queryKey: queryKeys.matchInfo(matchId),
  queryFn: () => matchApi.getMatchInfoByMatchId(matchId),
});

export const scoreQuery = (matchId: number) => ({
  queryKey: queryKeys.matchScore(matchId),
  queryFn: () => matchApi.getMatchScoreByMatchId(matchId),
});

export const eventsQuery = (matchId: number) => ({
  queryKey: queryKeys.matchEvents(matchId),
  queryFn: () => matchApi.getMatchEventsByMatchId(matchId),
});

export const playersQuery = (matchId: number) => ({
  queryKey: queryKeys.matchPlayers(matchId),
  queryFn: () => matchApi.getMatchPlayersByMatchId(matchId),
});

export const memoQuery = (matchId: number) => ({
  queryKey: queryKeys.matchMemo(matchId),
  queryFn: () => matchApi.getMatchMemoByMatchId(matchId),
});

export const listQuery = (teamId: number) => ({
  queryKey: queryKeys.matchList(teamId),
  queryFn: () => matchApi.getMatchListByTeamId(teamId),
});
