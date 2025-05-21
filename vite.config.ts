import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  define: {
    // NOTE: sockjs 때문에 필요
    global: 'window',
  },
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    vanillaExtractPlugin(),
    tsconfigPaths(),
    svgr(),
    react({
      babel: {
        plugins: [
          [
            '@locator/babel-jsx/dist',
            {
              env: 'development',
            },
          ],
        ],
      },
    }),
  ],
});
