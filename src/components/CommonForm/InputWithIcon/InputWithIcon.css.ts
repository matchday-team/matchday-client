import { lightThemeRawValues, lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { hexColorAlpha } from '@/styles/colorUtils';

export const inputWrapper = style({
  position: 'relative',
  width: '100%',
});

export const textInput = recipe({
  base: {
    boxSizing: 'border-box',
    flexShrink: 0,
    transition: 'border-color, outline 0.2s ease-in-out',
    outline: '1px solid transparent',
    width: '100%',
    lineHeight: 1.4,
    fontWeight: 400,

    // NOTE: type=date 사용 시 기본 아이콘 커스텀 불가로 인해 숨김 필요
    '::-webkit-calendar-picker-indicator': {
      position: 'absolute',
      top: 0,
      right: 0,
      opacity: 0,
      cursor: 'pointer',
      width: '100%',
      height: '100%',
    },
    ':focus': {
      outlineColor: lightThemeVars.color.primary[700],
    },

    selectors: {
      '&[aria-invalid="true"]': {
        borderColor: lightThemeRawValues.color.warning,
      },
      '&[aria-invalid="true"]:focus': {
        outlineColor: hexColorAlpha(lightThemeRawValues.color.warning, 80),
      },
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
    },
  },
  variants: {
    variant: {
      'gray-small': {
        border: `1px solid ${lightThemeVars.color.primary[100]}`,
        borderRadius: 6,
        background: lightThemeVars.color.white.hover,
        height: 35,
        letterSpacing: -0.35,
        fontSize: 14,
        '::placeholder': {
          color: lightThemeVars.color.gray[300],
        },
      },
      'white-large': {
        border: `1px solid ${lightThemeVars.color.primary[100]}`,
        borderRadius: 10,
        background: lightThemeVars.color.white.main,
        height: 44,
        letterSpacing: -0.4,
        fontSize: 16,
        '::placeholder': {
          color: lightThemeVars.color.gray[500],
        },
      },
    },
    iconPosition: {
      left: {},
      right: {},
    },
  },
  compoundVariants: [
    {
      variants: { variant: 'gray-small', iconPosition: 'left' },
      style: { padding: '9px 16px 9px 40px' },
    },
    {
      variants: { variant: 'gray-small', iconPosition: 'right' },
      style: { padding: '9px 40px 9px 16px' },
    },
    {
      variants: { variant: 'white-large', iconPosition: 'left' },
      style: { padding: '10px 16px 10px 48px' },
    },
    {
      variants: { variant: 'white-large', iconPosition: 'right' },
      style: { padding: '10px 48px 10px 16px' },
    },
  ],
  defaultVariants: {
    variant: 'gray-small',
    iconPosition: 'left',
  },
});

export const iconContainer = recipe({
  base: {
    position: 'absolute',
    top: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    width: 24,
    height: 24,

    selectors: {
      'input:disabled ~ &': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
    },
  },
  variants: {
    variant: {
      'gray-small': {
        color: lightThemeVars.color.gray[300],
      },
      'white-large': {
        color: lightThemeVars.color.gray[500],
      },
    },
    iconPosition: {
      left: {},
      right: {},
    },
  },
  compoundVariants: [
    {
      variants: { variant: 'gray-small', iconPosition: 'left' },
      style: { left: 12 },
    },
    {
      variants: { variant: 'gray-small', iconPosition: 'right' },
      style: { right: 12 },
    },
    {
      variants: { variant: 'white-large', iconPosition: 'left' },
      style: { left: 16 },
    },
    {
      variants: { variant: 'white-large', iconPosition: 'right' },
      style: { right: 16 },
    },
  ],
  defaultVariants: {
    variant: 'gray-small',
    iconPosition: 'left',
  },
});
