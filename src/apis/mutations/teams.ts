import { useMutation } from '@tanstack/react-query';
import { HTTPError } from 'ky';
import { useSnackbar } from 'notistack';

import { teamApi } from '@/apis/fetchers';
import { TeamCreateRequest, UserJoinTeamRequest } from '@/apis/models';

export const useCreateTeamMutation = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (request: TeamCreateRequest) => {
      return teamApi.postCreateTeam(request);
    },
    onSuccess: () => {
      enqueueSnackbar('팀이 성공적으로 생성되었습니다.', {
        variant: 'success',
      });
    },
    onError: async error => {
      if (error instanceof HTTPError) {
        const response = await error.response.json();

        enqueueSnackbar(`팀 생성에 실패했습니다. ${response.message || ''}`, {
          variant: 'error',
        });
      }
    },
  });
};

export const useUserJoinTeamMutation = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (request: UserJoinTeamRequest & { userId: number }) => {
      const { userId, ...params } = request;

      return teamApi.postUserJoinTeam(userId, params);
    },
    onSuccess: data => {
      enqueueSnackbar(`[임시] 팀 가입 성공 - ${JSON.stringify(data)}`, {
        variant: 'success',
      });
    },
    onError: async error => {
      if (error instanceof HTTPError) {
        const response = await error.response.json();

        enqueueSnackbar(`[임시] 팀 가입 실패 - ${JSON.stringify(response)}`, {
          variant: 'error',
        });
      }
    },
  });
};
