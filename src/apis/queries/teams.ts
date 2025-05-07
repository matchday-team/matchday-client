import { teamApi } from '@/apis/fetchers';

const queryKeyNamespaces = {
  teams: 'teams',
};

const queryKeys = {
  teamList: () => [queryKeyNamespaces.teams, 'list'],
  teamMemberListById: (teamId: number) => [
    queryKeyNamespaces.teams,
    'list',
    teamId,
  ],
};

export const listAllQuery = {
  queryKey: queryKeys.teamList(),
  queryFn: () => teamApi.getAllTeamList(),
};

export const listTeamMemberQuery = (teamId: number) => ({
  queryKey: queryKeys.teamMemberListById(teamId),
  queryFn: () => teamApi.getMemberListByTeamId(teamId),
});
