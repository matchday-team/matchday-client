import { lightThemeVars } from '@/styles/theme.css';

import { createVar, style } from '@vanilla-extract/css';

export const sockColorVar = createVar();

export const container = style({
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.primary[800],
});

export const contentWrapper = style({
  padding: 40,
});

export const teamInfoSection = style({
  display: 'flex',
  flexDirection: 'row',
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
});

export const teamDetails = style({
  flex: 1,
  textAlign: 'left',
});

export const teamDetailsInner = style({
  display: 'flex',
  flexDirection: 'row',
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
  justifySelf: 'center', // NOTE: 부모 하나를 더 두고 center 주는 대신 self justify 사용
  gap: 0,
  width: 1112,
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
  left: 2.5,
  width: 20,
  color: lightThemeVars.color.primary[100],
});

export const shortsIcon = style({
  position: 'absolute',
  top: 16,
  left: 5,
  color: lightThemeVars.color.primary[100],
});

export const socksContainer = style({
  position: 'absolute',
  bottom: 3,
  left: 5.5,
  display: 'flex',
  gap: 4,
});

export const sock = style({
  border: `1.5px solid ${lightThemeVars.color.primary[100]}`,
  backgroundColor: sockColorVar,
  width: 2,
  height: 7,
});

export const statIcon = style({
  color: lightThemeVars.color.primary[300],
});

export const chevronIcon = style({
  color: lightThemeVars.color.primary[300],
});
