import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  define: {
    // NOTE: sockjs 때문에 필요
    global: 'window',
  },
  // server: {
  //   watch: {
  //     ignored: ['**.vanilla.css'],
  //   },
  // },
  plugins: [
    codeInspectorPlugin({
      bundler: 'vite',
    }),
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    vanillaExtractPlugin({
      // unstable_mode: 'emitCss', // NOTE: 해당 옵션 사용 시 새로 고침 시 30초 -> 1초로 단축되는데 원리는 알 수 모르겠음.
    }),
    tsconfigPaths(),
    svgr(),
    react(),
  ],
});
