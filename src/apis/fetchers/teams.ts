import { http } from '@/apis/http';
import {
  ApiResponse,
  GenerateUploadUrlParams,
  GetProfileReadUrlParams,
  S3PresignedResponse,
  TeamMemberListResponse,
  TeamResponse,
  TeamSearchResponse,
  UserJoinTeamRequest,
} from '@/apis/models';

export const getTeamById = async (teamId: number) => {
  const response = await http.get(`v1/teams/${teamId}`);

  return response.json() as Promise<ApiResponse<TeamResponse>>;
};

export const getAllTeamList = async () => {
  const response = await http.get('v1/teams');

  return response.json() as Promise<ApiResponse<TeamSearchResponse[]>>;
};

export const getMemberListByTeamId = async (teamId: number) => {
  const response = await http.get(`v1/teams/${teamId}/users`);

  return response.json() as Promise<ApiResponse<TeamMemberListResponse>>;
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

export const getTeamProfileImageUploadUrl = async (
  id: number,
  params: GenerateUploadUrlParams,
) => {
  const searchParams = new URLSearchParams();
  searchParams.append('extension', params.extension);

  const response = await http.get(
    `v1/teams/${id}/profile/upload-url?${searchParams}`,
  );

  return response.json() as Promise<ApiResponse<S3PresignedResponse>>;
};

// NOTE: 불필요한 권한으로 제거 예정
export const getTeamProfileImageUrl = async (
  id: number,
  params: GetProfileReadUrlParams,
) => {
  const searchParams = new URLSearchParams();
  searchParams.append('key', params.key);

  const response = await http.get(
    `v1/teams/${id}/profile/read-url?${searchParams}`,
  );

  return response.json() as Promise<ApiResponse<S3PresignedResponse>>;
};
