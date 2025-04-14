import vanillaExtract from '@antebudimir/eslint-plugin-vanilla-extract';
import js from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    prettierRecommended,
    ...pluginQuery.configs['flat/recommended'],
  ],
  files: ['**/*.{js,jsx,ts,tsx}'],
  ignores: ['dist', 'routeTree.gen.ts'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    react,
    'unused-imports': unusedImports,
    'vanilla-extract': vanillaExtract,
  },
  rules: {
    ...vanillaExtract.configs.recommended.rules,
    'vanilla-extract/concentric-order': 'error',
    'no-unused-vars': 'error',
    eqeqeq: 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error', // 문자열 연결 대신 템플릿 리터럴 사용
    'prefer-arrow-callback': 'error', // 일반 함수 대신 화살표 함수 사용
    'no-plusplus': 'error', // ++ 연산자 사용 금지
    'no-unneeded-ternary': 'error', // 불필요한 삼항 연산자 사용 금지
    'unused-imports/no-unused-imports': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'const', next: 'return' },
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
});
