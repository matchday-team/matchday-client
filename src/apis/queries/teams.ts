import { teamApi } from '@/apis/fetchers';

const queryKeyNamespaces = {
  teams: 'teams',
};

const queryKeys = {
  teamList: () => [queryKeyNamespaces.teams, 'list'],
};

export const listAllQuery = {
  queryKey: queryKeys.teamList(),
  queryFn: () => teamApi.getAllTeamList(),
};
