import { http } from '@/apis/http';
import type {
  ApiResponse,
  MatchCreateRequest,
  MatchEventResponse,
  MatchInfoResponse,
  MatchListResponse,
  MatchMemoResponse,
  MatchScoreResponse,
  MatchUserCreateRequest,
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

  return response.json() as Promise<ApiResponse<MatchEventResponse[]>>;
};

export const getMatchPlayersByMatchId = async (matchId: number) => {
  const response = await http.get(`v1/matches/${matchId}/players`);

  return response.json() as Promise<ApiResponse<MatchUserGroupResponse>>;
};

export const getMatchMemoByMatchId = async (matchId: number) => {
  const response = await http.get(`v1/matches/${matchId}/memo`);

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

export const getMatchListByTeamId = async (teamId: number) => {
  const response = await http.get(`v1/matches/teams/${teamId}`);

  return response.json() as Promise<ApiResponse<MatchListResponse[]>>;
};

export const postMatchUser = async (
  matchId: number,
  request: MatchUserCreateRequest,
) => {
  const response = await http.post(`v1/matches/${matchId}/users`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  return response.json() as Promise<ApiResponse<number>>;
};

export const postMatchMemo = async (matchId: number, memo: string) => {
  const response = await http.post(`v1/matches/${matchId}/memo`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ memo }),
  });

  return response.json() as Promise<ApiResponse<string>>;
};

export const patchMatchTimer = async (
  matchId: number,
  time: string, // hh:mm:ss 포맷
  halfType: 'first' | 'second',
  isStart: boolean,
) => {
  const fieldName = isStart ? 'startTime' : 'endTime';

  const response = await http.patch(`v1/matches/${matchId}/${halfType}-time`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ [fieldName]: time }),
  });

  return response.json() as Promise<ApiResponse<string>>; // "시간 등록 완료"
};
