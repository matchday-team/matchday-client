import { globalFontFace, globalStyle } from '@vanilla-extract/css';

globalFontFace('Pretendard Variable', {
  src: 'url("/fonts/PretendardVariable.woff2") format("woff2-variations")',
  fontDisplay: 'swap',
  fontStyle: 'normal',
  fontWeight: '45 920',
});

globalStyle(':root', {
  fontFamily: 'Pretendard Variable',
});
