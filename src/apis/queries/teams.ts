import { teamApi } from '@/apis/fetchers';

const queryKeyNamespaces = {
  teams: 'teams',
};

export const queryKeys = {
  teamById: (teamId: number) => [queryKeyNamespaces.teams, teamId],
  teamList: () => [queryKeyNamespaces.teams, 'list'],
  teamMemberListById: (teamId: number) => [
    queryKeyNamespaces.teams,
    'list',
    teamId,
  ],
};

export const byIdQuery = (teamId: number) => ({
  queryKey: queryKeys.teamById(teamId),
  queryFn: () => teamApi.getTeamById(teamId),
});

export const listAllQuery = {
  queryKey: queryKeys.teamList(),
  queryFn: () => teamApi.getAllTeamList(),
};

export const listTeamMemberQuery = (teamId: number) => ({
  queryKey: queryKeys.teamMemberListById(teamId),
  queryFn: () => teamApi.getMemberListByTeamId(teamId),
});
