import { useMutation } from '@tanstack/react-query';
import { HTTPError } from 'ky';
import { useSnackbar } from 'notistack';

import { teamApi } from '@/apis/fetchers';
import { UserJoinTeamRequest } from '@/apis/models';

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
