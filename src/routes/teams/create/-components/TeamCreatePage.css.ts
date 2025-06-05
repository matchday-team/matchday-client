import { style } from '@vanilla-extract/css';

import { commonPageRoot } from '@/styles/page.css';
import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = style([
  commonPageRoot,
  {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightThemeVars.color.white.main,
    width: '100%',
    height: '100%',
  },
]);
