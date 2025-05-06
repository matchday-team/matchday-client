import { http } from '@/apis/http';
import { ApiResponse } from '@/apis/models';
import { TeamResponse } from '@/apis/models';

export const getAllTeamList = async () => {
  const response = await http.get('v1/teams');

  return response.json() as Promise<ApiResponse<TeamResponse[]>>;
};
