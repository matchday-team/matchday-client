import { style } from '@vanilla-extract/css';

export const tableWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginRight: -30,
  borderRadius: 10,
  boxShadow: '4px 4px 8px 0px rgba(0, 0, 0, 0.05)',
  backgroundColor: '#FFF',
  width: '100%',
  height: 844,
  overflow: 'hidden',
});

export const tableContainer = style({
  width: 1336,
  maxWidth: '100%',
});

export const tableHeader = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 158,
  width: '100%',
  textAlign: 'center',
  letterSpacing: -0.35,
  color: '#767676',
  fontSize: 14,
  fontWeight: 500,
});

export const headerRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: 20,
  width: 768,
  maxWidth: '100%',
});

export const titleHeader = style({
  gap: 10,
  padding: 10,
  color: '#767676',
});

export const headerGroup = style({
  display: 'flex',
  gap: '40px 100px',
});

export const authorHeader = style({
  gap: 10,
  padding: 10,
  color: '#767676',
});

export const dateHeader = style({
  gap: 10,
  padding: 10,
  color: '#767676',
});

export const tableRow = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '16px 40px',
  width: '100%',
  maxWidth: 1336,
  minHeight: 80,
});

export const rowContent = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: 20,
  width: 1238,
  maxWidth: '100%',
});

export const contentSection = style({
  display: 'flex',
  justifyContent: 'start',
});

export const contentContainer = style({
  margin: 'auto 0',
  width: 664,
  minWidth: 240,
  maxWidth: '100%',
});

export const titleRow = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'start',
  width: '100%',
  maxWidth: '100%',
  letterSpacing: -0.4,
  color: '#100F0F',
  fontSize: 16,
  fontWeight: 600,
});

export const pinIndicator = style({
  display: 'flex',
  gap: 8,
  margin: 'auto 0',
  minHeight: 22,
});

export const noticeTitle = style({
  gap: 10,
  margin: 'auto 0',
  color: '#100F0F',
});

export const noticeContent = style({
  flex: '1 1 0%',
  gap: 10,
  marginTop: 6,
  width: '100%',
  maxWidth: '100%',
  textOverflow: 'ellipsis',
  letterSpacing: -0.35,
  color: '#767676',
  fontSize: 14,
  fontWeight: 400,
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 1,
});

export const authorCell = style({
  gap: 10,
  margin: 'auto 0',
  padding: 10,
  textAlign: 'center',
  letterSpacing: -0.4,
  color: '#100F0F',
  fontSize: 16,
  fontWeight: 500,
});

export const dateCell = style({
  gap: 10,
  margin: 'auto 0',
  padding: 10,
  textAlign: 'center',
  letterSpacing: -0.4,
  color: '#767676',
  fontSize: 16,
  fontWeight: 500,
});

export const chevronIcon = style({
  margin: 'auto 0',
  width: 24,
  height: 24,
});
