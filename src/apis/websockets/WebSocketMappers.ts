import { ApiResponse, MatchEventResponse } from '@/apis/models';

import {
  RequestMapperDefinition,
  ResponseMapperDefinition,
} from './SharedTypeSafeWebSocket';

type MatchEventType =
  | 'GOAL'
  | 'ASSIST'
  | 'SHOT'
  | 'VALID_SHOT'
  | 'FOUL'
  | 'OFFSIDE'
  | 'SUB_IN'
  | 'SUB_OUT'
  | 'YELLOW_CARD'
  | 'RED_CARD'
  | 'OWN_GOAL';

export interface MatchRecordRequest {
  token: string; // 현재는 Archives로 등록된 user의 ID
  data: {
    userId: number;
    eventType: MatchEventType;
    description: string;
  };
}

export const requestMapperDefinition = {
  record: {
    channelMapper: (matchId: number) => `/app/match/${matchId}`,
    requestMapper: (payload: MatchRecordRequest) => {
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
} satisfies ResponseMapperDefinition;
