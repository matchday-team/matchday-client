import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

export const rootContainer = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    height: 264,
  },
  variants: {
    isDragOver: {
      true: {
        outline: `2px solid ${lightThemeVars.color.field.background}`,
      },
    },
    disabled: {
      true: {
        outline: `2px solid ${lightThemeVars.color.soccer.red}`,
      },
    },
  },
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  padding: '16px 24px',
});

export const title = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: '#000000',
  fontSize: 14,
  fontWeight: 500,
});

export const list = style({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  overflowY: 'auto',

  // FIXME: 디자인과 일치하지는 않는데 - 우선 진행
  maskImage: `linear-gradient(
    to bottom,
    #fff 30%,
    rgba(255,255,255,0.70) 75%,
    rgba(255,255,255,0.3) 100%
  )`,
});

export const emptyListContainer = style({
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
});

export const emptyListDescription = style({
  marginTop: 51,
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray['500'],
  fontSize: 14,
  fontWeight: 500,
});
