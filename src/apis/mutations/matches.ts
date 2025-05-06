import { useMutation } from '@tanstack/react-query';
import { useSnackbar } from 'notistack';

import { matchApi } from '@/apis/fetchers';
import { MatchCreateRequest } from '@/apis/models/MatchCreateRequest';

export const useCreateMatchMutation = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: (data: MatchCreateRequest) => matchApi.postMatch(data),
    onSuccess: data => {
      enqueueSnackbar(`[임시] 매치 생성 성공 - ${JSON.stringify(data)}`, {
        variant: 'success',
      });
    },
    onError: error => {
      enqueueSnackbar(`[임시] 매치 생성 실패 -${JSON.stringify(error)}`, {
        variant: 'error',
      });
    },
  });
};
