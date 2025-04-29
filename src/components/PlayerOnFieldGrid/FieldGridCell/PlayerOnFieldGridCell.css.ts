import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

export const playerImageContainer = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: 60,
  height: 42,
});

export const attackPointContainer = style({
  position: 'absolute',
  bottom: 0,
  left: 4, // NOTE: 중앙 정렬로 두면 하나만 표시될 때 중앙에 배치되므로, left offset으로 배치
  display: 'flex',
  justifyContent: 'center',
  gap: '4px',
});

export const playerImage = style({
  boxSizing: 'border-box',
  border: `1px solid ${lightThemeVars.color.white.main}`,
  borderRadius: '50%',
  objectFit: 'cover',
  width: 36,
  height: 36,
});

export const playerInfoContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
  fontWeight: 600,
});

export const attackPointMarkContainer = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    borderRadius: 10, // NOTE: Figma 상의 값으로 진행하면 아예 다르게 출력되어서 임의로 지정
    backgroundColor: lightThemeVars.color.field.icon,
    paddingLeft: 1.5, // NOTE: Figma 상의 값으로 진행하면 아예 다르게 출력되어서 임의로 지정
    width: 24,
    height: 16,
  },
  variants: {
    isEmpty: {
      true: {
        visibility: 'hidden',
      },
    },
  },
});

export const attackPointCount = style({
  height: 8,
  verticalAlign: 'middle',
  lineHeight: 0.65, // NOTE: 임의 정렬
  letterSpacing: -0.3,
  fontSize: 12,
});
