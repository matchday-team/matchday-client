// FIXME: 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.
/** @jsxImportSource react */
/* eslint-disable no-restricted-imports */
import '../src/styles/font.css';
import '../src/styles/normalize.css';
import '../src/styles/reset.css';

import type { Preview } from '@storybook/react';
import { initialize as initializeMSW, mswLoader } from 'msw-storybook-addon';

import { ignoreDevResources } from '../src/mocks';
import { ReactQueryClientProvider } from '../src/react-query-provider';

initializeMSW({
  onUnhandledRequest: ignoreDevResources,
});

// TODO: 추후 화면 크기 스타일링, Tanstack-Router, Tanstack-query DevTools 추가 예정
const preview: Preview = {
  decorators: [
    Story => (
      <ReactQueryClientProvider>
        <Story />
      </ReactQueryClientProvider>
    ),
  ],
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
