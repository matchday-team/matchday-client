import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HTTPError } from 'ky';
import { useSnackbar } from 'notistack';

import { matchApi } from '@/apis/fetchers';
import { MatchCreateRequest, MatchUserCreateRequest } from '@/apis/models';
import { matchRecordQuery } from '@/apis/queries';

export const useCreateMatchMutation = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (data: MatchCreateRequest) => matchApi.postMatch(data),
    onSuccess: data => {
      enqueueSnackbar(`[임시] 매치 생성 성공 - ${JSON.stringify(data)}`, {
        variant: 'success',
      });
    },
    onError: async error => {
      if (error instanceof HTTPError) {
        const response = await error.response.json();

        enqueueSnackbar(`[임시] 매치 생성 실패 - ${JSON.stringify(response)}`, {
          variant: 'error',
        });
      }
    },
  });
};

export const useCreateMatchUserMutation = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (data: MatchUserCreateRequest & { matchId: number }) => {
      const { matchId, ...params } = data;

      return matchApi.postMatchUser(matchId, params);
    },
    onSuccess: data => {
      enqueueSnackbar(`[임시] 매치 참여 성공 - ${JSON.stringify(data)}`, {
        variant: 'success',
      });
    },
    onError: async error => {
      if (error instanceof HTTPError) {
        const response = await error.response.json();

        enqueueSnackbar(`[임시] 매치 참여 실패 - ${JSON.stringify(response)}`, {
          variant: 'error',
        });
      }
    },
  });
};

export const useCreateOrUpdateMatchMemoMutation = (matchId: number) => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newMemo: string) => {
      return matchApi.postMatchMemo(matchId, newMemo);
    },
    onMutate: async (newMemo: string) => {
      await queryClient.cancelQueries({
        queryKey: matchRecordQuery.queryKeys.matchMemo(matchId),
      });

      const previousMemo = queryClient.getQueryData(
        matchRecordQuery.queryKeys.matchMemo(matchId),
      );

      // NOTE: optimistic update
      queryClient.setQueryData(matchRecordQuery.queryKeys.matchMemo(matchId), {
        data: {
          memo: newMemo,
        },
      });

      return { previousMemo };
    },
    onSuccess: data => {
      enqueueSnackbar(
        `[임시] 매치 메모 생성/갱신 성공 - ${JSON.stringify(data)}`,
        {
          variant: 'success',
        },
      );
    },
    onError: async (error, _, context) => {
      if (!context) {
        throw new Error(
          'Tanstack query context is undefined - should never happen',
        );
      }

      queryClient.setQueryData(matchRecordQuery.queryKeys.matchMemo(matchId), {
        data: {
          memo: context.previousMemo,
        },
      });

      if (error instanceof HTTPError) {
        const response = await error.response.json();

        enqueueSnackbar(
          `[임시] 매치 메모 생성/갱신 실패 - ${JSON.stringify(response)}`,
          {
            variant: 'error',
          },
        );
      }
    },
  });
};

export const usePatchMatchTimerMutation = (matchId: number) => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: {
      halfType: 'first' | 'second';
      isStart: boolean;
      time: string;
    }) => {
      return matchApi.patchMatchTimer(
        matchId,
        data.time,
        data.halfType,
        data.isStart,
      );
    },
    onSuccess: data => {
      enqueueSnackbar(`[임시] 매치 시간 등록 성공 - ${JSON.stringify(data)}`, {
        variant: 'success',
      });

      queryClient.invalidateQueries({
        queryKey: matchRecordQuery.queryKeys.matchInfo(matchId),
      });
    },
    onError: async error => {
      if (error instanceof HTTPError) {
        const response = await error.response.json();

        enqueueSnackbar(
          `[임시] 매치 시간 등록 실패 - ${JSON.stringify(response)}`,
          {
            variant: 'error',
          },
        );
      }
    },
  });
};
