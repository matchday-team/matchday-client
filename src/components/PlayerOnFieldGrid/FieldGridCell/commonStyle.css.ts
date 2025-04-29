import { style } from '@vanilla-extract/css';

import { lightThemeVars } from '@/styles/theme.css';

export const commonCellContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: `1px solid ${lightThemeVars.color.field.lineLight}`,
  borderBottom: `1px solid ${lightThemeVars.color.field.lineLight}`,
  height: '100%',
  color: lightThemeVars.color.white.main,

  selectors: {
    '&:nth-child(5n)': {
      borderRight: 'none',
    },
    '&:nth-child(26n)': {
      borderBottom: 'none',
    },
  },
});
