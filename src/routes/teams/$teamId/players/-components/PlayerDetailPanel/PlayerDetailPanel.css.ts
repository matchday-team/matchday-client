import { lightThemeVars } from '@/styles/theme.css';

import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const rootContainer = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  borderRadius: 10,
  backgroundColor: lightThemeVars.color.white.main,
  width: '100%',
  maxWidth: 480,
});

export const profileContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 40,
  padding: '40px 20px 0',
  width: '100%',
  maxWidth: 314,
  lineHeight: 1.4,
});

export const profileSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  width: '100%',
});

export const playerHeader = style({
  display: 'flex',
  gap: 16,
  width: '100%',
  letterSpacing: -0.4,
  fontSize: 16,
});

export const playerAvatar = style({
  aspectRatio: '1',
  borderRadius: 100,
  objectFit: 'cover',
  width: 64,
});

export const playerInfo = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: 234,
});

export const playerName = style({
  marginTop: 6,
  width: 58,
  height: '100%',
  color: lightThemeVars.color.black,
});

export const playerNickname = style({
  marginTop: 8,
  width: 58,
  color: lightThemeVars.color.black,
  fontWeight: 500,
});

export const positionSection = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '40px 52px',
  padding: '0 44px',
  width: '100%',
});

export const positionColumn = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 58,
});

export const positionLabel = style({
  letterSpacing: -0.4,
  color: lightThemeVars.color.black,
  fontSize: 16,
  fontWeight: 600,
});

export const primaryPositionTag = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: 4,
  borderRadius: 100,
  backgroundColor: 'rgba(255, 236, 236, 1)', // FIXME: 색상을 받아와야 함
  padding: '4px 8px',
  letterSpacing: -0.35,
  color: lightThemeVars.color.soccer.red,
  fontSize: 14,
  fontWeight: 500,
});

export const divider = style({
  alignSelf: 'center',
  backgroundColor: lightThemeVars.color.primary[100],
  width: 1,
  height: 40,
});

export const secondaryPositionTag = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: 4,
  borderRadius: 100,
  backgroundColor: 'rgba(225, 254, 232, 1)',
  padding: '4px 8px',
  letterSpacing: -0.35,
  color: lightThemeVars.color.field.background,
  fontSize: 14,
  fontWeight: 500,
});

export const secondaryPositionText = style({
  gap: 8,
  width: '100%',
});

export const personalInfoSection = style({
  display: 'flex',
  gap: '40px 80px',
  letterSpacing: -0.35,
  fontSize: 14,
  fontWeight: 500,
});

export const personalInfoLabels = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 12,
  width: 48,
  color: lightThemeVars.color.gray[500],
});

export const infoLabel = style({
  color: lightThemeVars.color.gray[500],
});

export const personalInfoValues = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 12,
  width: 68,
  color: lightThemeVars.color.black,
});

export const infoValue = style({
  color: lightThemeVars.color.black,
});

export const matchRecordsSection = style({
  marginTop: 100,
  width: '100%',
});

export const matchTableHeader = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '16px 0 16px 66px',
  width: '100%',
  lineHeight: 1.4,
  letterSpacing: -0.3,
  color: lightThemeVars.color.gray[500],
  fontSize: 12,
  fontWeight: 400,
});

export const headerLabelsRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 20,
  borderRadius: 0,
  width: '100%',
  maxWidth: 273,
});

export const opponentLabel = style({
  color: lightThemeVars.color.gray[500],
});

export const statsLabels = style({
  display: 'flex',
  gap: 24,
});

export const scoreLabel = style({
  color: lightThemeVars.color.gray[500],
});

export const personalStatsLabels = style({
  display: 'flex',
  gap: 12,
});

export const statsLabel = style({
  color: lightThemeVars.color.gray[500],
});

export const matchTableBody = style({
  width: '100%',
});

export const matchRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  borderBottom: `1px solid ${lightThemeVars.color.primary[100]}`,
  paddingRight: 20,
  paddingLeft: 20,
  width: '100%',
  minHeight: 40,
});

export const teamLogo = style({
  aspectRatio: '1',
  flexShrink: 0,
  justifyContent: 'center',
  objectFit: 'cover',
  width: 24,
});

export const matchInfo = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 19,
  minWidth: 240,
});

export const matchMainInfo = style({
  display: 'flex',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  fontSize: 14,
  fontWeight: 500,
});

export const teamName = style({
  display: 'flex',
  width: 100,
  color: lightThemeVars.color.black,
});

export const scoreDisplay = style({
  display: 'flex',
  gap: 4,
});

export const scoreLoss = style({
  color: lightThemeVars.color.soccer.red,
});

export const scoreWin = style({
  color: lightThemeVars.color.primary[700],
});

export const scoreNumber = recipe({
  base: {
    width: 17,
  },
  variants: {
    team: {
      home: {
        textAlign: 'right',
      },
      away: {
        textAlign: 'left',
      },
    },
  },
});

export const scoreColon = style({
  justifyContent: 'center',
});

export const scoreNumberWrapper = style({
  width: 17,
});

export const playerStats = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 24,
});

export const statValue = style({
  justifyContent: 'center',
  width: 17,
  textAlign: 'center',
  lineHeight: 1.4,
  letterSpacing: -0.35,
  color: lightThemeVars.color.black,
  fontSize: 14,
  fontWeight: 500,
});

export const cardDisplay = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 1,
  borderRadius: 4,
  width: 17,
});

export const cardPlaceholder = style({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 2,
  backgroundColor: lightThemeVars.color.white.background,
  width: 8,
  minHeight: 10,
});
