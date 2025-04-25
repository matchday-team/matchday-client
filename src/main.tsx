import { StrictMode } from 'react';

import { RouterProvider, createRouter } from '@tanstack/react-router';
import { createRoot } from 'react-dom/client';

import { initializeMSW } from './mocks';
import { ReactQueryClientProvider } from './react-query-provider';
import { routeTree } from './routeTree.gen';
import './styles/font.css';
import './styles/normalize.css';
import './styles/reset.css';

if (import.meta.env.DEV && import.meta.env.VITE_USE_MSW === 'true') {
  await initializeMSW();
}

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
    <ReactQueryClientProvider>
      <RouterProvider router={router} />
    </ReactQueryClientProvider>
  </StrictMode>,
);
