import vanillaExtract from '@antebudimir/eslint-plugin-vanilla-extract';
import js from '@eslint/js';
import tanStackQuery from '@tanstack/eslint-plugin-query';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettierRecommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'], // @see https://github.com/jsx-eslint/eslint-plugin-react
      reactHooks.configs['recommended-latest'], // @see https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
      reactRefresh.configs.vite, // @see https://github.com/ArnaudBarre/eslint-plugin-react-refresh?tab=readme-ov-file#recommended-config
      ...tanStackQuery.configs['flat/recommended'], // @see https://tanstack.com/query/v5/docs/eslint/eslint-plugin-query#recommended-setup
      {
        name: vanillaExtract.meta.name,
        plugins: {
          'vanilla-extract': vanillaExtract,
        },
        rules: vanillaExtract.configs.recommended.rules,
      },
    ],
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['dist', 'routeTree.gen.ts'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeLike', // interface, type, class, enum 등
          format: ['PascalCase'],
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'const', next: 'return' },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../*'],
              message: '상위 디렉토리에 대한 상대 경로 대신 절대 경로 사용',
            },
          ],
        },
      ],
      eqeqeq: 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error', // 문자열 연결 대신 템플릿 리터럴 사용
      'prefer-arrow-callback': 'error', // 일반 함수 대신 화살표 함수 사용
      'no-plusplus': 'error', // ++ 연산자 사용 금지
      'no-unneeded-ternary': 'error', // 불필요한 삼항 연산자 사용 금지
      'no-duplicate-imports': 'error', // 동일 모듈에서 임포트 여러 회 금지
    },
  },
  {
    files: ['**/*.stories.{ts,tsx}'],
    extends: [storybook.configs['flat/recommended']],
  },
);
