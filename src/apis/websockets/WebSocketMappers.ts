import { ApiResponse, MatchEventResponse } from '@/apis/models';
import { MatchEventType } from '@/constants';

import {
  RequestMapperDefinition,
  ResponseMapperDefinition,
} from './SharedTypeSafeWebSocket';

export interface MatchRecordPlayerStatRequest {
  matchUserId: number;
  eventType: MatchEventType;
  description: string;
}

export interface MatchRecordPlayerExchangeRequest {
  fromMatchUserId: number;
  toMatchUserId: number;
  message: string;
}

export interface MatchRecordTeamStatRequest {
  eventType: MatchEventType;
  description: string;
}

export interface MatchMemoSyncResponse {
  memo: string;
}

export interface MatchRecordStatCancelRequest {
  matchUserId: number | null; // NOTE: 팀 스탯 취소의 경우 null
  teamId: number;
  matchEventType: MatchEventType;
}

export const requestMapperDefinition = {
  recordPlayerStat: {
    channelMapper: (matchId: number) => `/app/match/${matchId}`,
    requestMapper: (
      payload: Omit<MatchRecordPlayerStatRequest, 'description'>,
    ) => {
      // NOTE: description 필드는 무의미해서 요청에서 제외하고 빈 값으로 전달
      return JSON.stringify({
        ...payload,
        description: '',
      });
    },
  },
  recordPlayerExchange: {
    channelMapper: (matchId: number) => `/app/match/${matchId}/exchange`,
    requestMapper: (
      payload: Omit<MatchRecordPlayerExchangeRequest, 'message'>,
    ) => {
      // NOTE: message 필드는 무의미해서 요청에서 제외하고 빈 값으로 전달
      return JSON.stringify({
        ...payload,
        message: '',
      });
    },
  },
  recordTeamStat: {
    channelMapper: (matchId: number, teamId: number) =>
      `/app/match/${matchId}/teams/${teamId}`,
    requestMapper: (
      payload: Omit<MatchRecordTeamStatRequest, 'description'>,
    ) => {
      return JSON.stringify({
        ...payload,
        description: '',
      });
    },
  },
  recordStatCancel: {
    channelMapper: (matchId: number) => `/app/match/${matchId}/cancel`,
    requestMapper: (payload: MatchRecordStatCancelRequest) => {
      return JSON.stringify(payload);
    },
  },
} satisfies RequestMapperDefinition;

export const responseMapperDefinition = {
  error: {
    channelMapper: () => '/user/queue/errors',
    responseMapper:
      (handlers: {
        error?: (error: ApiResponse<{ message: string }>) => void;
      }) =>
      payload => {
        const response = JSON.parse(payload) as ApiResponse<{
          message: string;
        }>;
        console.log('error response', response);
        handlers.error?.(response);
      },
  },
  matchReset: {
    channelMapper: () => '/topic/match-delete-events',
    responseMapper:
      (handlers: { reset?: (matchId: number) => void }) => payload => {
        const { id } = JSON.parse(payload) as { id: number };
        console.log('match reset. target matchId:', id);
        handlers.reset?.(id);
      },
  },
  match: {
    channelMapper: (matchId: number) => `/topic/match/${matchId}`,
    responseMapper:
      (handlers: { event?: (event: MatchEventResponse) => void }) =>
      payload => {
        const event = JSON.parse(payload) as MatchEventResponse;
        console.log('match websocket event', event);
        handlers.event?.(event);
      },
  },
  matchmemo: {
    channelMapper: (matchId: number) => `/topic/match/${matchId}/memo`,
    responseMapper:
      (handlers: { memo?: (memo: string) => void }) => payload => {
        const { memo } = JSON.parse(payload) as MatchMemoSyncResponse;
        handlers.memo?.(memo);
      },
  },
} satisfies ResponseMapperDefinition;
