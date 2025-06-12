import { commonPageRoot } from '@/styles/page.css';
import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style([
  commonPageRoot,
  {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    backgroundColor: lightThemeVars.color.white.background,
    paddingTop: 60,
    paddingBottom: 60,
    width: 1336,
    overflow: 'hidden',
  },
]);

export const mainContent = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 20,
  width: '100%',
});

export const leftContent = style({
  display: 'flex',
  flex: 1, // NOTE: shrink로 자연스럽게 줄어들게. 추후 transition 시에는 명확한 width가 있어야 할 수도.
  flexDirection: 'column',
  gap: 20,
  minWidth: 0,
});

export const rightContent = style({
  flexShrink: 0,
  width: 354,
  height: '100%',
});
