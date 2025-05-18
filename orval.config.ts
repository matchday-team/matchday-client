import { defineConfig } from 'orval';

export default defineConfig({
  matchday: {
    input: 'https://dev-api.matchday-planner.com/v3/api-docs',
    output: {
      mode: 'tags-split',
      target: './src/apis',
      schemas: './src/apis/models',
      mock: false,
      namingConvention: 'PascalCase',
      override: {
        requestOptions: false,
      },
    },
  },
});
