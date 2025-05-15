import { DeepOmit } from '@/\butils-type';
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

export interface MatchRecordPlayerStatRequest {
  token: string; // 현재는 Archives로 등록된 user의 ID
  data: {
    userId: number;
    eventType: MatchEventType;
    description: string;
  };
}

export const requestMapperDefinition = {
  recordPlayerStat: {
    channelMapper: (matchId: number) => `/app/match/${matchId}`,
    requestMapper: (
      payload: DeepOmit<MatchRecordPlayerStatRequest, 'data.description'>,
    ) => {
      // NOTE: description 필드는 무의미해서 요청에서 제외하고 빈 값으로 전달
      return JSON.stringify({
        token: payload.token,
        data: {
          userId: payload.data.userId,
          eventType: payload.data.eventType,
          description: '',
        },
      });
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
