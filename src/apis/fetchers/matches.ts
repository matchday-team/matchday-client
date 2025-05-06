import { http } from '@/apis/http';
import type {
  ApiResponse,
  MatchCreateRequest,
  MatchEventResponse,
  MatchInfoResponse,
  MatchMemoResponse,
  MatchScoreResponse,
  MatchUserGroupResponse,
} from '@/apis/models';

export const getMatchInfoByMatchId = async (matchId: number) => {
  const response = await http.get(`v1/matches/${matchId}`);

  return response.json() as Promise<ApiResponse<MatchInfoResponse>>;
};

export const getMatchScoreByMatchId = async (matchId: number) => {
  const response = await http.get(`v1/matches/${matchId}/score`);

  return response.json() as Promise<ApiResponse<MatchScoreResponse>>;
};

export const getMatchEventsByMatchId = async (matchId: number) => {
  const response = await http.get(`v1/matches/${matchId}/history`);

  return response.json() as Promise<ApiResponse<MatchEventResponse>>;
};

export const getMatchPlayersByMatchId = async (matchId: number) => {
  const response = await http.get(`v1/matches/${matchId}/players`);

  return response.json() as Promise<ApiResponse<MatchUserGroupResponse>>;
};

export const getMatchMemoByMatchIdAndTeamId = async (
  matchId: number,
  teamId: number,
) => {
  const response = await http.get(`v1/matches/${matchId}/teams/${teamId}/memo`);

  return response.json() as Promise<ApiResponse<MatchMemoResponse>>;
};

export const postMatch = async (data: MatchCreateRequest) => {
  const response = await http.post(`v1/matches`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json() as Promise<ApiResponse<number>>;
};
