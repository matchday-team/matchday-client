import { tempUser } from '@/constants/tempUser';
import { useLoggedInUserStore } from '@/stores';
import { delay } from '@/utils';

import { queryKeyNamespaces } from './_namespaces';

export const queryKeys = {
  me: () => [queryKeyNamespaces.users, 'me'],
};

export const meQuery = {
  queryKey: queryKeys.me(),
  queryFn: () =>
    delay(500).then(() => {
      if (useLoggedInUserStore.getState().isLoggedIn) {
        return tempUser;
      }
      return null;
    }),
};
