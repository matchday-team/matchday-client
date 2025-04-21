import { ApiResponse, http } from './http';

interface Team {
  id: number;
  name: string;
}

interface TeamsResponse {
  teams: Team[];
}

const fetchTeams = () =>
  http.get('v1/teams').json<ApiResponse<TeamsResponse>>();

export const getTeamsQuery = {
  queryKey: ['teams'],
  queryFn: async () => (await fetchTeams()).data,
};
