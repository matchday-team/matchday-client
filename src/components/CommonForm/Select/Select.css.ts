import { lightThemeRawValues, lightThemeVars } from 'src/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { hexColorAlpha } from '@/styles/colorUtils';

export const OPTION_ITEM_HEIGHT = 38;
export const DROPDOWN_LIST_HEIGHT = 208;

export const selectContainer = style({
  position: 'relative',
  width: '100%',
});

export const selectButton = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    outline: '1px solid transparent',
    cursor: 'pointer',
    width: '100%',
    lineHeight: 1.4,
    letterSpacing: -0.35,
    fontWeight: 400,

    ':focus': {
      outlineColor: lightThemeVars.color.primary[700],
    },
  },
  variants: {
    variant: {
      'gray-small': {
        border: `1px solid ${lightThemeVars.color.primary[100]}`,
        borderRadius: 6,
        backgroundColor: lightThemeVars.color.white.hover,
        padding: '7px 14px',
        height: OPTION_ITEM_HEIGHT,
        fontSize: 14,
        ':hover': {
          backgroundColor: lightThemeVars.color.white.hover,
        },
      },
      'white-large': {
        border: `1px solid ${lightThemeVars.color.primary[100]}`,
        borderRadius: 10,
        backgroundColor: lightThemeVars.color.white.main,
        padding: '10px 16px',
        height: 44,
        fontSize: 16,
        ':hover': {
          backgroundColor: lightThemeVars.color.white.hover,
        },
      },
    },
    isPlaceholder: {
      true: {
        color: lightThemeVars.color.gray[500],
      },
      false: {
        color: lightThemeVars.color.black,
      },
    },
    isError: {
      true: {
        borderColor: lightThemeVars.color.warning,
      },
    },
  },
  defaultVariants: {
    variant: 'gray-small',
  },
  compoundVariants: [
    {
      variants: { isError: true },
      style: {
        ':focus': {
          outlineColor: hexColorAlpha(lightThemeRawValues.color.warning, 80),
        },
      },
    },
  ],
});

export const selectText = style({
  flex: 1,
  overflow: 'hidden',
  textAlign: 'left',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const chevronIcon = recipe({
  base: {
    flexShrink: 0,
    transition: 'transform 0.2s ease',
    width: 24,
    height: 24,
    color: lightThemeVars.color.gray[500],
  },
  variants: {
    isOpen: {
      true: {
        transform: 'rotate(-180deg)',
      },
      false: {
        transform: 'rotate(0deg)',
      },
    },
  },
});

export const optionsContainer = recipe({
  base: {
    position: 'absolute',
    zIndex: 1000,
    right: 0,
    left: 0,
    border: `1px solid ${lightThemeVars.color.primary[100]}`,
    borderRadius: 6,
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.05)',
    backgroundColor: lightThemeVars.color.white.main,
    maxHeight: DROPDOWN_LIST_HEIGHT,
    overflow: 'auto',
  },
  variants: {
    position: {
      bottom: {
        top: 'calc(100% + 2px)',
      },
      top: {
        bottom: 'calc(100% + 2px)',
        boxShadow: '0px -4px 4px 0px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  defaultVariants: {
    position: 'bottom',
  },
});

export const option = recipe({
  base: {
    backgroundColor: lightThemeVars.color.white.main,
    cursor: 'pointer',
    padding: '9px 14px',
    lineHeight: 1.4,
    letterSpacing: -0.35,
    color: lightThemeVars.color.black,
    fontSize: 14,
    fontWeight: 400,

    ':hover': {
      backgroundColor: lightThemeVars.color.white.hover,
    },
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: lightThemeVars.color.white.hover,
        fontWeight: 500,
      },
    },
    isFocused: {
      true: {
        backgroundColor: lightThemeVars.color.primary[100],
      },
    },
  },
});
