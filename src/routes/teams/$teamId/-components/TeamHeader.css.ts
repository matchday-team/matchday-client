import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const container = style({
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  backgroundColor: lightThemeVars.color.primary[800],
});

export const contentWrapper = style({
  padding: '40px 40px',
});

export const teamInfoSection = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: 16,
  marginBottom: 40,
});

export const logoContainer = style({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${lightThemeVars.color.gray[500]}`,
  borderRadius: '50%',
  backgroundColor: lightThemeVars.color.white.main,
  width: 100,
  height: 100,
});

export const logoImage = style({
  width: 64,
  height: 76,
});

export const teamDetails = style({
  flex: 1,
  textAlign: 'left',
});

export const teamDetailsInner = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: 16,
});

export const teamName = style({
  marginBottom: 4,
  lineHeight: 1.4,
  letterSpacing: -0.8,
  color: lightThemeVars.color.white.main,
  fontSize: 32,
  fontWeight: 600,
});

export const teamDescription = style({
  maxWidth: 706,
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.primary[300],
  fontSize: 16,
  fontWeight: 500,
});

export const editSection = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 8,
  color: lightThemeVars.color.primary[300],
});

export const editText = style({
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
  fontWeight: 500,
});

export const statsGrid = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 0,
});

export const statItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,
});

export const statHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
});

export const statLabel = style({
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.primary[300],
  fontSize: 16,
  fontWeight: 600,
});

export const statValue = style({
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.white.main,
  fontSize: 16,
  fontWeight: 500,
});

export const uniformSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
});

export const uniformLabel = style({
  lineHeight: 1.4,
  letterSpacing: -0.4,
  color: lightThemeVars.color.primary[300],
  fontSize: 16,
  fontWeight: 600,
});

export const uniformContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
});

export const uniformIcon = style({
  position: 'relative',
  width: 24,
  height: 40,
});

export const jerseyIcon = style({
  position: 'absolute',
  top: 0,
});

export const shortsIcon = style({
  position: 'absolute',
  top: 20,
});

export const socksContainer = style({
  position: 'absolute',
  bottom: 0,
  left: 6,
  display: 'flex',
  gap: 6,
});

export const sock = style({
  border: `1px solid ${lightThemeVars.color.primary[300]}`,
  width: 2,
  height: 6,
});

// 아이콘 스타일 추가
export const statIcon = style({
  color: lightThemeVars.color.primary[300],
});

export const chevronIcon = style({
  color: lightThemeVars.color.primary[300],
});
