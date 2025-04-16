import { StrictMode } from 'react';

import { RouterProvider, createRouter } from '@tanstack/react-router';
import { SnackbarProvider } from 'notistack';
import { createRoot } from 'react-dom/client';

import { ReactQueryClientProvider } from './react-query-provider';
import { routeTree } from './routeTree.gen';
import './styles/normalize.css';

const router = createRouter({
  routeTree,
  defaultPreloadStaleTime: 0, // NOTE: 데이터 관리를 Tanstack-query에 위임
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom',
      }}
    >
      <ReactQueryClientProvider>
        <RouterProvider router={router} />
      </ReactQueryClientProvider>
    </SnackbarProvider>
  </StrictMode>,
);
