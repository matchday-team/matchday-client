import { getWebSocketApi } from '@/apis/websockets';
import { MatchEventType } from '@/constants';

export type RequestStatCancelParams = {
  matchEventType: MatchEventType;
  teamId: number;
  matchUserId?: number;
};

export const useMatchRecordWsMutation = (matchId: number) => {
  const wsApi = getWebSocketApi();

  const requestPlayerSwap = (inPlayerId: number, outPlayerId: number) => {
    wsApi.send('recordPlayerExchange', [matchId], {
      fromMatchUserId: outPlayerId,
      toMatchUserId: inPlayerId,
    });
  };

  // FIXME: 생략된 prop: isIncrement: boolean - 현재는 항상 증가만 가능
  const requestTeamStatChange = (
    matchEvent: MatchEventType,
    teamId: number,
  ) => {
    wsApi.send('recordTeamStat', [matchId, teamId], {
      eventType: matchEvent,
    });
  };

  const requestPlayerStatChange = (
    playerId: number,
    matchEvent: MatchEventType,
  ) => {
    wsApi.send('recordPlayerStat', [matchId], {
      matchUserId: playerId,
      eventType: matchEvent,
    });
  };

  const requestStatCancel = ({
    matchEventType,
    teamId,
    matchUserId,
  }: RequestStatCancelParams) => {
    wsApi.send('recordStatCancel', [matchId], {
      matchUserId: matchUserId ?? null,
      teamId,
      matchEventType,
    });
  };

  return {
    requestPlayerSwap,
    requestTeamStatChange,
    requestPlayerStatChange,
    requestStatCancel,
  };
};
