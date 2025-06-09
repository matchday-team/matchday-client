import { StrictMode, Suspense } from 'react';

import Hotjar from '@hotjar/browser';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { SnackbarProvider } from 'notistack';
import { createRoot } from 'react-dom/client';

import { SnackbarViewForDebug, UserSettingsDialog } from './components';
import { HOTJAR_SITE_ID, HOTJAR_VERSION } from './constants';
import { ReactQueryClientProvider } from './react-query-provider';
import { routeTree } from './routeTree.gen';
import './styles/font.css';
import './styles/normalize.css';
import './styles/reset.css';
import {
  activateDefaultLog,
  attachLoggerOnError,
  attachLoggerOnNavigate,
} from './utils';

if (import.meta.env.DEV && import.meta.env.VITE_USE_MSW === 'true') {
  const { initializeMSW } = await import('./mocks');
  await initializeMSW();
}

if (import.meta.env.DEV) {
  activateDefaultLog();
  attachLoggerOnError();
  attachLoggerOnNavigate();
} else {
  Hotjar.init(HOTJAR_SITE_ID, HOTJAR_VERSION);
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
    <SnackbarProvider
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      maxSnack={4}
      Components={{
        default: SnackbarViewForDebug,
        info: SnackbarViewForDebug,
        success: SnackbarViewForDebug,
        warning: SnackbarViewForDebug,
        error: SnackbarViewForDebug,
      }}
    >
      <ReactQueryClientProvider>
        <RouterProvider router={router} />
        <Suspense>
          <UserSettingsDialog />
        </Suspense>
        <ReactQueryDevtools position='right' initialIsOpen={false} />
      </ReactQueryClientProvider>
    </SnackbarProvider>
  </StrictMode>,
);
