import { http } from '@/apis/http';
import { ApiResponse, UserJoinTeamRequest } from '@/apis/models';
import { TeamResponse } from '@/apis/models';

export const getAllTeamList = async () => {
  const response = await http.get('v1/teams');

  return response.json() as Promise<ApiResponse<TeamResponse[]>>;
};

// NOTE: User, Team 중 어디에 놓을지 애매한 상황
export const postUserJoinTeam = async (
  userId: number,
  request: UserJoinTeamRequest,
) => {
  const response = await http.post(`v1/users/${userId}/teams`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  return response.json() as Promise<ApiResponse<number>>;
};
