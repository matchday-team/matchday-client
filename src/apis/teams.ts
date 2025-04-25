import { ApiResponse, http } from './http';

export interface Team {
  id: number;
  name: string;
  teamColor: string;
  logoImageUrl: string;
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
