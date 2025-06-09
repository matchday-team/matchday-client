import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

// NOTE: grid로 4*2 구성하고 싶었지만, 컨테이너 padding에도 border를 적용해야 하므로 flex로 렌더링
export const commonGridLine = style({
  display: 'flex',
  flexDirection: 'row',
  borderTop: `1px solid ${lightThemeVars.color.primary['100']}`,
  overflow: 'hidden',
});

export const firstLine = style([commonGridLine]);

export const secondLine = style([
  commonGridLine,
  {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
]);
