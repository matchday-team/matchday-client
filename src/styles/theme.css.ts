import { createTheme } from '@vanilla-extract/css';

// TODO: 디자인 토큰이 나오면 작업 예정
const lightTheme = {
  color: {
    primary: '#0043FF',
  },
  spacing: {
    medium: '16px',
  },
  font: {
    size: {
      medium: '16px',
    },
  },
};

export const [lightThemeClass, lightThemeVars] = createTheme(lightTheme);
