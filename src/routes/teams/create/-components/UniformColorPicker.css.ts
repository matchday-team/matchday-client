import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const uniformColors = style({
  display: 'flex',
});

export const colorGroup = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  gap: 6,
  borderRadius: 6,
  ':hover': {
    backgroundColor: lightThemeVars.color.primary[100],
  },
  cursor: 'pointer',
});

export const colorPicker = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 6,
  width: 36,
  minHeight: 36,
});

export const colorCircle = recipe({
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 13,
    width: 24,
    height: 24,
    minHeight: 24,
    overflow: 'hidden',
  },
  variants: {
    isEmpty: {
      true: {
        border: `2px dashed ${lightThemeVars.color.gray[300]}`,
        backgroundColor: lightThemeVars.color.gray[100],
        '::before': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          backgroundColor: lightThemeVars.color.gray[500],
          width: 8,
          height: 8,
          content: '""',
        },
      },
      false: {
        border: '1px solid currentColor',
      },
    },
  },
  defaultVariants: {
    isEmpty: false,
  },
});

export const colorInput = style({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  opacity: 0,
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  width: '100%',
  height: '100%',
});

export const colorLabel = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  whiteSpace: 'nowrap',
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 500,
});
