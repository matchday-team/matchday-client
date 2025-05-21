import { queryOptions } from '@tanstack/react-query';

import { tempUser } from '@/constants/tempUser';
import { useLoggedInUserStore } from '@/stores';
import { delay } from '@/utils';

import { queryKeyNamespaces } from './_namespaces';

const queryKeys = {
  me: () => [queryKeyNamespaces.users, 'me'],
};

export const me = queryOptions({
  queryKey: queryKeys.me(),
  queryFn: () =>
    delay(500).then(() => {
      if (useLoggedInUserStore.getState().isLoggedIn) {
        try {
          // 직접 수정한 경우 localstorage에 임시 백업함
          return JSON.parse(
            localStorage.getItem('user') ?? '',
          ) as typeof tempUser;
        } catch {
          return tempUser;
        }
      }
      return null;
    }),
});
