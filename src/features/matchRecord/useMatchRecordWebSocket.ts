import { useEffect } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

import { matchQuery } from '@/apis/queries';
import { getWebSocketApi } from '@/apis/websockets';
import { MatchEventType } from '@/constants';

export const useMatchRecordWebSocket = (matchId: number) => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const wsApi = getWebSocketApi();

  useEffect(() => {
    const unsubErrorChannel = wsApi.subscribe('error', [], {
      error: error => {
        enqueueSnackbar(`[match error] ${error.message}`, {
          variant: 'error',
        });
      },
    });

    const unsubMatchMemoChannel = wsApi.subscribe('matchmemo', [matchId], {
      memo: newMemo => {
        enqueueSnackbar(`[match memo] ${newMemo}`, {
          variant: 'info',
        });
        const prevData = queryClient.getQueryData(
          matchQuery.memo(matchId).queryKey,
        );
        if (prevData) {
          queryClient.setQueryData(matchQuery.memo(matchId).queryKey, {
            ...prevData,
            data: {
              ...prevData.data,
              memo: newMemo,
            },
          });
        }
      },
    });

    const unsubMatchChannel = wsApi.subscribe('match', [matchId], {
      event: event => {
        const {
          id,
          elapsedMinutes,
          teamId,
          teamName,
          userId,
          userName,
          eventLog,
        } = event;
        enqueueSnackbar(
          `[id:${id}] [${elapsedMinutes}"] [teamId:${teamId}] [userId:${userId}] ${teamName} ${userName} ${eventLog}`,
          {
            variant: 'info',
          },
        );
        queryClient.invalidateQueries({
          queryKey: matchQuery.rangeQueryKeys.byId(matchId), // 일단은 전체 갱신하고 추후 최적화
        });
      },
    });

    return () => {
      unsubErrorChannel();
      unsubMatchMemoChannel();
      unsubMatchChannel();
    };
  }, [matchId, wsApi, enqueueSnackbar, queryClient]);

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

  return {
    requestPlayerSwap,
    requestTeamStatChange,
    requestPlayerStatChange,
  };
};
