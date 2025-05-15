import { DeepOmit } from '@/\butils-type';
import { ApiResponse, MatchEventResponse } from '@/apis/models';

import {
  RequestMapperDefinition,
  ResponseMapperDefinition,
} from './SharedTypeSafeWebSocket';

export enum MatchEventType {
  GOAL = 'GOAL',
  ASSIST = 'ASSIST',
  SHOT = 'SHOT',
  VALID_SHOT = 'VALID_SHOT',
  FOUL = 'FOUL',
  OFFSIDE = 'OFFSIDE',
  SUB_IN = 'SUB_IN',
  SUB_OUT = 'SUB_OUT',
  YELLOW_CARD = 'YELLOW_CARD',
  RED_CARD = 'RED_CARD',
  OWN_GOAL = 'OWN_GOAL',
}

export interface MatchRecordPlayerStatRequest {
  token: string; // 현재는 Archives로 등록된 user의 ID
  data: {
    userId: number;
    eventType: MatchEventType;
    description: string;
  };
}

export interface MatchRecordPlayerExchangeRequest {
  token: string; // 현재는 Archives로 등록된 user의 ID
  data: {
    fromMatchUserId: number; // 교체할 선수의 매치 유저 아이디
    toUserId: number; // 교체할 선수의 유저 아이디
    message: string; // 교체 사유 등
  };
}

export interface MatchRecordTeamStatRequest {
  token: string; // 현재는 Archives로 등록된 user의 ID
  data: {
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
  recordPlayerExchange: {
    channelMapper: (matchId: number) => `/app/match/${matchId}/exchange`,
    requestMapper: (payload: MatchRecordPlayerExchangeRequest) => {
      return JSON.stringify(payload);
    },
  },
  recordTeamStat: {
    channelMapper: (matchId: number, teamId: number) =>
      `/app/match/${matchId}/teams/${teamId}`,
    requestMapper: (payload: MatchRecordTeamStatRequest) => {
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
