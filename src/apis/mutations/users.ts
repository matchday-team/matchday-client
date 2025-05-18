import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { HTTPError } from 'ky';
import { useSnackbar } from 'notistack';

import { userApi } from '@/apis/fetchers';
import { userQuery } from '@/apis/queries';
import { tempUser } from '@/constants/tempUser';
import { useLoggedInUserStore } from '@/stores';
import { delay } from '@/utils';

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

export const useLoginMutation = () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setIsLoggedIn } = useLoggedInUserStore();

  return useMutation({
    mutationFn: async ({ id, pw }: { id: string; pw: string }) => {
      return delay(500).then(() => {
        if (id === 'matchday' && pw === 'matchday') {
          return tempUser;
        }

        return Promise.reject(new Error('로그인 실패'));
      });
    },
    onSuccess: () => {
      enqueueSnackbar('로그인 성공', {
        variant: 'success',
      });

      setIsLoggedIn(true);
      queryClient.invalidateQueries({ queryKey: userQuery.queryKeys.me() });
      navigate({ to: '/' });
    },
    onError: () => {
      enqueueSnackbar('로그인 실패', {
        variant: 'error',
      });
    },
  });
};
