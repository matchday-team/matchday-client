import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  marginTop: 20,
  borderRadius: 10,
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)',
  backgroundColor: lightThemeVars.color.white.main,
  width: 1336,
  overflow: 'hidden',
});

export const tableContainer = style({
  borderRadius: 10,
  width: '100%',
  minHeight: 618,
  lineHeight: 1.4,
  whiteSpace: 'nowrap',
  fontFamily:
    'Pretendard Variable, -apple-system, Roboto, Helvetica, sans-serif',
  fontWeight: 500,
});

export const tableHeader = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  borderTop: `1px solid ${lightThemeVars.color.primary[100]}`,
  padding: '20px 161px 20px 203px',
  width: '100%',
  textAlign: 'center',
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
});

export const headerRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  gap: 20,
  borderRadius: '0px 0px 0px 0px',
  padding: '0 1px',
  width: '100%',
});

export const leftHeaderSection = style({
  display: 'flex',
  alignItems: 'stretch',
  gap: 20,
  paddingLeft: 76,
  width: 220, // 순번(20px) + 프로필이미지(36px) + gap(20px) = 76px
});

export const rightHeaderSection = style({
  display: 'flex',
  flex: 1,
  alignItems: 'stretch',
  justifyContent: 'space-between',
  gap: 93,
  paddingRight: 44, // 더보기 버튼(24px) + gap 공간 = 44px
});

export const headerItem = style({
  color: lightThemeVars.color.gray[500],
});

export const tableBody = style({
  width: '100%',
  height: 558,
  overflow: 'hidden',
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,
});

export const memberRowContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  padding: '16px 40px',
  width: '100%',
});

export const memberRowContent = style({
  width: '100%',
  maxWidth: 1336,
});

export const memberRowInner = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  gap: 20,
  width: '100%',
});

export const leftSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: 20,
  width: 220,
  textAlign: 'center',
});

export const indexNumber = style({
  alignSelf: 'stretch',
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '0 6px',
  width: 20,
  minHeight: 20,
  textAlign: 'center',
  letterSpacing: -0.35,
  color: lightThemeVars.color.gray[500],
  fontSize: 14,
});

export const profileImage = style({
  aspectRatio: '1',
  flexShrink: 0,
  alignSelf: 'stretch',
  objectFit: 'contain',
  objectPosition: 'center',
  width: 36,
  minHeight: 36,
});

export const memberName = style({
  alignSelf: 'stretch',
  gap: 10,
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '0 10px',
  width: 60,
  textAlign: 'center',
  color: lightThemeVars.color.black,
});

export const memberNumber = style({
  alignSelf: 'stretch',
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '0 10px',
  width: 40,
  textAlign: 'center',
  color: lightThemeVars.color.black,
});

export const rightSection = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 93,
  marginTop: 'auto',
  marginBottom: 'auto',
});

export const positionTag = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  alignSelf: 'stretch',
  justifyContent: 'center',
  borderRadius: 100,
  padding: '4px 8px',
  width: 40,
  letterSpacing: -0.35,
  fontSize: 14,
});

// TODO: 컬러를 상수로 추출하고 vars로 적용
export const positionTagFW = style({
  backgroundColor: 'rgba(255, 236, 236, 1)',
  color: 'rgba(255, 0, 0, 1)',
});

export const positionTagMF = style({
  backgroundColor: 'rgba(225, 254, 232, 1)',
  color: 'rgba(0, 152, 36, 1)',
});

export const positionTagDF = style({
  backgroundColor: '#DBE4FF',
  color: '#0043FF',
});

export const positionTagGK = style({
  backgroundColor: 'rgba(255, 244, 203, 1)',
  color: 'rgba(183, 125, 0, 1)',
});

export const positionText = style({
  alignSelf: 'stretch',
  gap: 8,
  width: '100%',
});

export const footText = style({
  alignSelf: 'stretch',
  gap: 10,
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '0 10px',
  width: 60,
  textAlign: 'center',
  color: lightThemeVars.color.black,
});

export const roleText = style({
  alignSelf: 'stretch',
  gap: 10,
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '0 10px',
  width: 60,
  textAlign: 'center',
  color: lightThemeVars.color.black,
});

export const joinDateText = style({
  alignSelf: 'stretch',
  gap: 10,
  marginTop: 'auto',
  marginBottom: 'auto',
  padding: '0 10px',
  width: 100,
  textAlign: 'center',
  color: lightThemeVars.color.gray[500],
});

export const moreIcon = style({
  flexShrink: 0,
  alignSelf: 'stretch',
  marginTop: 'auto',
  marginBottom: 'auto',
  cursor: 'pointer',
  width: 24,
  height: 24,
  color: lightThemeVars.color.gray[500],
  ':hover': {
    color: lightThemeVars.color.black,
  },
});

export const tableFooter = style({
  display: 'flex',
  padding: '16px 0',
  minHeight: 14,
});
