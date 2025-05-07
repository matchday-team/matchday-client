import { defineConfig } from 'orval';

export default defineConfig({
  matchday: {
    input: 'http://175.106.99.16:8080/v3/api-docs',
    output: {
      mode: 'tags-split',
      target: './src/apis',
      schemas: './src/apis/models',
      client: 'fetch',
      httpClient: 'fetch',
      mock: true,
      namingConvention: 'PascalCase',
      override: {
        requestOptions: false,
      },
    },
  },
});
