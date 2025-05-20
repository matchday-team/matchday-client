import { queryOptions } from '@tanstack/react-query';

import { teamApi } from '@/apis/fetchers';

import { queryKeyNamespaces } from './_namespaces';

const queryKeys = {
  teamById: (teamId: number) => [queryKeyNamespaces.teams, teamId],
  teamList: () => [queryKeyNamespaces.teams, 'list'],
  teamMemberListById: (teamId: number) => [
    queryKeyNamespaces.teams,
    'list',
    teamId,
  ],
};

export const byId = (teamId: number) =>
  queryOptions({
    queryKey: queryKeys.teamById(teamId),
    queryFn: () => teamApi.getTeamById(teamId),
  });

export const listAll = queryOptions({
  queryKey: queryKeys.teamList(),
  queryFn: () => teamApi.getAllTeamList(),
});

export const memberList = (teamId: number) =>
  queryOptions({
    queryKey: queryKeys.teamMemberListById(teamId),
    queryFn: () => teamApi.getMemberListByTeamId(teamId),
  });
