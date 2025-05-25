import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HTTPError } from 'ky';
import { useSnackbar } from 'notistack';

import { matchApi } from '@/apis/fetchers';
import {
  MatchCreateRequest,
  MatchHalfTimeRequest,
  MatchUserCreateRequest,
} from '@/apis/models';
import { matchQuery } from '@/apis/queries';

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
        queryKey: matchQuery.memo(matchId).queryKey,
      });

      const previousMemo = queryClient.getQueryData(
        matchQuery.memo(matchId).queryKey,
      );

      if (!previousMemo) {
        return;
      }

      queryClient.setQueryData(matchQuery.memo(matchId).queryKey, {
        ...previousMemo,
        data: {
          ...previousMemo.data,
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

      queryClient.setQueryData(
        matchQuery.memo(matchId).queryKey,
        context.previousMemo,
      );

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
    mutationFn: (request: MatchHalfTimeRequest) => {
      return matchApi.patchMatchTimer(matchId, request);
    },
    onSuccess: data => {
      enqueueSnackbar(`[임시] 매치 시간 등록 성공 - ${JSON.stringify(data)}`, {
        variant: 'success',
      });

      queryClient.invalidateQueries({
        queryKey: matchQuery.info(matchId).queryKey,
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

// NOTE: 전반 종료 이전에만 가능
export const useCancelMatchStartMutation = (matchId: number) => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => matchApi.deleteMatchEvents(matchId),
    onSuccess: data => {
      enqueueSnackbar(`[임시] 매치 시작 취소 성공 - ${JSON.stringify(data)}`, {
        variant: 'success',
      });

      queryClient.invalidateQueries({
        queryKey: matchQuery.info(matchId).queryKey,
      });
    },
    onError: async error => {
      if (error instanceof HTTPError) {
        const response = await error.response.json();

        enqueueSnackbar(
          `[임시] 매치 시작 취소 실패 - ${JSON.stringify(response)}`,
          {
            variant: 'error',
          },
        );
      }
    },
  });
};

export const useDeleteMatchUserMutation = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (matchUserId: number) => matchApi.deleteMatchUser(matchUserId),
    onSuccess: data => {
      enqueueSnackbar(
        `[임시] 매치 사용자 삭제 성공 - ${JSON.stringify(data)}`,
        {
          variant: 'success',
        },
      );
    },
    onError: async error => {
      if (error instanceof HTTPError) {
        const response = await error.response.json();

        enqueueSnackbar(
          `[임시] 매치 사용자 삭제 실패 - ${JSON.stringify(response)}`,
          {
            variant: 'error',
          },
        );
      }
    },
  });
};
