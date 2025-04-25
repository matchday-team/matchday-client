// FIXME: 'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.
/** @jsxImportSource react */
import type { Preview } from '@storybook/react';
import { initialize as initializeMSW, mswLoader } from 'msw-storybook-addon';

// eslint-disable-next-line no-restricted-imports
import { ignoreDevResources } from '../src/mocks';
// eslint-disable-next-line no-restricted-imports
import { ReactQueryClientProvider } from '../src/react-query-provider';

initializeMSW({
  onUnhandledRequest: ignoreDevResources,
});

// TODO: 추후 스타일링 및 Tanstack-Router 대응 예정
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
