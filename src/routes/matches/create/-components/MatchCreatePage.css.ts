import { commonPageRoot } from '@/styles/page.css';
import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style([
  commonPageRoot,
  {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightThemeVars.color.white.main,
    paddingBottom: 100,
    width: '100%',
    minHeight: '100%',
  },
]);

export const title = style({
  marginTop: 30,
  marginBottom: 40,
  lineHeight: 1.4,
  letterSpacing: -0.6,
  color: lightThemeVars.color.black,
  fontSize: 24,
  fontWeight: 600,
});
