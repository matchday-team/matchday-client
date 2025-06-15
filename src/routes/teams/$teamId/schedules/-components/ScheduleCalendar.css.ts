import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const calendarContainer = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 10,
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)',
  backgroundColor: lightThemeVars.color.white.main,
  padding: '20px 0 24px',
  width: '100%',
  lineHeight: 1.4,
});
