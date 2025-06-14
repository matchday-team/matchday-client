import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: 740,
});

export const titleContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: 20,
  width: '100%',
  lineHeight: 1.4,
  letterSpacing: -0.6,
  color: lightThemeVars.color.black,
  fontSize: 24,
  fontWeight: 600,
});

export const titleText = style({
  width: 300,
  color: lightThemeVars.color.black,
});

export const formRootContainer = style({
  marginTop: 36,
  width: '100%',
});

export const formContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 20,
});

export const formColumnContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: 300,
});

export const rightColumnContainer = style({
  marginTop: 20,
});

export const profileSection = style({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 8,
  width: '100%',
});

export const profileImageContainer = style({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'start',
  gap: 22,
});

export const profileImageWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  width: 80,
  height: 80,
  overflow: 'hidden',
});

export const profileImage = style({
  objectFit: 'contain',
  objectPosition: 'center',
  color: lightThemeVars.color.primary[300],
});

export const profileControls = style({
  display: 'flex',
  flexDirection: 'column',
  fontSize: 14,
});

export const profileLabel = style({
  color: lightThemeVars.color.black,
  fontWeight: 500,
});

export const profileButtons = style({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'start',
  gap: 8,
  marginTop: 11,
  lineHeight: 1.4,
  letterSpacing: -0.35,
  whiteSpace: 'nowrap',
  fontWeight: 600,
});

export const uploadButton = style({
  gap: 6,
  border: 'none',
  borderRadius: 8,
  backgroundColor: lightThemeVars.color.primary[700],
  cursor: 'pointer',
  padding: '8px 18px',
  color: lightThemeVars.color.white.main,
});

export const deleteButton = style({
  gap: 6,
  border: `1px solid ${lightThemeVars.color.primary[100]}`,
  borderRadius: 8,
  backgroundColor: lightThemeVars.color.white.main,
  cursor: 'pointer',
  padding: '8px 18px',
  color: lightThemeVars.color.gray[500],
});

export const hiddenInput = style({
  display: 'none',
});

export const fieldGroup = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 24,
  width: '100%',
  minWidth: 0, // NOTE: 기본값이 min-width: auto이며 flex:1, width:100% 으로 작아지지 않음
  lineHeight: 1.4,
});

export const twoColumnGroup = style({
  zIndex: 10,
  display: 'flex',
  gap: 20,
});

export const memberLimitGroup = style([
  fieldGroup,
  {
    width: 112,
  },
]);

export const memberLimitInput = style({
  marginBottom: 4,
  width: 85,
});

export const uniformSection = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const uniformHeader = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const submitSection = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 12,
  marginTop: 200,
  color: lightThemeVars.color.white.main,
});
