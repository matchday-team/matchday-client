import { commonPageRoot } from '@/styles/page.css';
import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style([
  commonPageRoot,
  {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    gap: 20,
    backgroundColor: lightThemeVars.color.white.background,
    paddingTop: 60,
    paddingBottom: 60,
    width: 1336,
    overflow: 'hidden',
  },
]);
