import { useMutation } from '@tanstack/react-query';
import { HTTPError } from 'ky';
import { useSnackbar } from 'notistack';

import { userApi } from '@/apis/fetchers';

export const useCreateUserMutation = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (name: string) => userApi.postTemporaryUser(name),
    onSuccess: data => {
      enqueueSnackbar(`[임시] 사용자 생성 성공 - ${JSON.stringify(data)}`, {
        variant: 'success',
      });
    },
    onError: async error => {
      if (error instanceof HTTPError) {
        const response = await error.response.json();

        enqueueSnackbar(
          `[임시] 사용자 생성 실패 - ${JSON.stringify(response)}`,
          {
            variant: 'error',
          },
        );
      }
    },
  });
};
