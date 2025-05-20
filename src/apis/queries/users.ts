import { queryOptions } from '@tanstack/react-query';

import { tempUser } from '@/constants/tempUser';
import { useLoggedInUserStore } from '@/stores';
import { delay } from '@/utils';

import { queryKeyNamespaces } from './_namespaces';

const queryKeys = {
  me: () => [queryKeyNamespaces.users, 'me'],
};

export const meQuery = queryOptions({
  queryKey: queryKeys.me(),
  queryFn: () =>
    delay(500).then(() => {
      if (useLoggedInUserStore.getState().isLoggedIn) {
        return tempUser;
      }
      return null;
    }),
});
