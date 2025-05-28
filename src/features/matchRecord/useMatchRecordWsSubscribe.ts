import { useEffect } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

import { matchQuery } from '@/apis/queries';
import { getWebSocketApi } from '@/apis/websockets';

export const useMatchRecordWsSubscribe = (matchId: number) => {
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
};
