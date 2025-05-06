import { useSuspenseQuery } from '@tanstack/react-query';

import { matchApi } from '@/apis/fetchers';

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
  matchMemo: (matchId: number, teamId: number) => [
    queryKeyNamespaces.matches,
    matchId,
    teamId,
    'memo',
  ],
};

export const useMatchRecordInfo = (matchId: number) => {
  return useSuspenseQuery({
    queryKey: queryKeys.matchInfo(matchId),
    queryFn: () => matchApi.getMatchInfoByMatchId(matchId),
  });
};

export const useMatchRecordScore = (matchId: number) => {
  return useSuspenseQuery({
    queryKey: queryKeys.matchScore(matchId),
    queryFn: () => matchApi.getMatchScoreByMatchId(matchId),
  });
};

export const useMatchRecordEvents = (matchId: number) => {
  return useSuspenseQuery({
    queryKey: queryKeys.matchEvents(matchId),
    queryFn: () => matchApi.getMatchEventsByMatchId(matchId),
  });
};

export const useMatchRecordPlayers = (matchId: number) => {
  return useSuspenseQuery({
    queryKey: queryKeys.matchPlayers(matchId),
    queryFn: () => matchApi.getMatchPlayersByMatchId(matchId),
  });
};

export const useMatchRecordMemo = (matchId: number, teamId: number) => {
  return useSuspenseQuery({
    queryKey: queryKeys.matchMemo(matchId, teamId),
    queryFn: () => matchApi.getMatchMemoByMatchIdAndTeamId(matchId, teamId),
  });
};
