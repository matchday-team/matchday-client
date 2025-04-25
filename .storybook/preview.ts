import type { Preview } from '@storybook/react';
import { initialize as initializeMSW } from 'msw-storybook-addon';

// eslint-disable-next-line no-restricted-imports
import { ignoreDevResources } from '../src/mocks';

initializeMSW({
  onUnhandledRequest: ignoreDevResources,
});

const preview: Preview = {
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
