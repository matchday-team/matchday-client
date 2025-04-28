import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { lightThemeVars } from '@/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  width: '100%',
});

export const labelContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const value = recipe({
  base: {
    width: 14,
    lineHeight: 1.4,
    letterSpacing: -0.35,
    color: lightThemeVars.color.black,
    fontSize: 14,
    fontWeight: 500,
  },
  variants: {
    align: {
      right: {
        textAlign: 'right',
      },
    },
  },
  defaultVariants: {},
});

export const label = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
  fontWeight: 500,
});

export const barContainer = style({
  display: 'flex',
  gap: 4,
  width: '100%',
});

export const barBackground = recipe({
  base: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: lightThemeVars.color.gray[100],
  },
  variants: {
    left: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
  defaultVariants: {
    left: false,
  },
});

// NOTE: width를 사용하면 동적으로 width 값을 CSS Variable로 주입해야 함.
const barAnimation = keyframes({
  '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
  '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
});

export const barBase = style({
  transition: 'width 0.3s ease-in-out',
  borderRadius: 10,
  height: 6,
  animation: `${barAnimation} 0.8s ease forwards`,
});
