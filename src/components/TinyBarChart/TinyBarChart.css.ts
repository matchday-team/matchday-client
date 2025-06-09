import { lightThemeVars } from '@/styles/theme.css';

import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = recipe({
  base: {
    flex: 1,
    borderRadius: 3,
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

export const bar = style({
  transition: 'width 0.3s ease-in-out',
  borderRadius: 3,
  height: 6,
  animation: `${barAnimation} 0.8s ease forwards`,
});
