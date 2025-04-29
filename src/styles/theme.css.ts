import { createGlobalTheme } from '@vanilla-extract/css';

// TODO: 디자인 토큰이 나오면 작업 예정
const lightTheme = {
  color: {
    primary: {
      100: '#E5E5EC',
      300: '#B7C8EE',
      700: '#0043FF',
      '700Darken': '#003CE5', // rgb(0, 60, 229)
      800: '#1C263C',
    },
    gray: {
      100: '#E7E7E7',
      200: 'rgb(198, 198, 198)',
      300: '#AAA',
      500: '#767676',
      600: 'rgb(98, 98, 98)',
    },
    black: '#100F0F',
    white: {
      main: '#FFFFFF',
      background: '#F2F3F7',
      hover: 'rgb(246, 246, 249)',
    },
    field: {
      background: '#43A151',
      backgroundDarken: '#368141',
      icon: '#0C3F14',
      lineLight: 'rgba(255, 255, 255, 0.15)',
      line: 'rgba(255, 255, 255, 0.5)',
    },
    soccer: {
      yellow: 'rgba(255, 234, 0, 1)',
      red: '#D91920',
    },
    warning: '#D91920',
  },
} as const;

export const lightThemeVars = createGlobalTheme(':root', lightTheme);
