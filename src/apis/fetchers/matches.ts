import { http } from '@/apis/http';
import type {
  ApiResponse,
  MatchCreateRequest,
  MatchEventResponse,
  MatchHalfTimeRequest,
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
  request: MatchHalfTimeRequest,
) => {
  const response = await http.patch(`v1/matches/${matchId}/time`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  return response.json() as Promise<ApiResponse<string>>; // "시간 등록 완료"
};

// NOTE: 매치 시작 취소 기능 ('이벤트'를 모두 삭제한다)
export const deleteMatchEvents = async (matchId: number) => {
  const response = await http.delete(`v1/match-event/${matchId}`);

  return response.json() as Promise<ApiResponse<string>>;
};

export const deleteMatchUser = async (matchUserId: number) => {
  // NOTE: endpoint가 다소 이상하긴 함
  const response = await http.delete(`v1/matches/${matchUserId}`);

  return response.json() as Promise<ApiResponse<string>>;
};

export const patchMatchUserGrid = async (
  matchUserId: number,
  matchGrid: number,
) => {
  const response = await http.patch(`v1/matches/${matchUserId}/grid`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ matchGrid }),
  });

  return response.json() as Promise<ApiResponse<string>>;
};
