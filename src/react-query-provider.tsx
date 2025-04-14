import { PropsWithChildren } from 'react';

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { QUERY_OPTIONS } from './constants';

// TODO: implement
const noticeUserOnServerError = (error: unknown) => {
  console.error(error);
};

// TODO: implement
const logQueryError = (error: unknown) => {
  console.error(error);
};

// TODO: implement
const logMutationError = (error: unknown) => {
  console.error(error);
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: QUERY_OPTIONS.STALE_TIME,
      gcTime: QUERY_OPTIONS.GC_TIME,
      retry: QUERY_OPTIONS.RETRY_COUNT,
    },
    mutations: {
      onError: noticeUserOnServerError,
    },
  },
  queryCache: new QueryCache({
    onError: logQueryError,
  }),
  mutationCache: new MutationCache({
    onError: logMutationError,
  }),
});

export const ReactQueryClientProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools position='right' initialIsOpen={false} />
    </QueryClientProvider>
  );
};
