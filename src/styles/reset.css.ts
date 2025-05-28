import { globalStyle } from '@vanilla-extract/css';

globalStyle('ul', {
  margin: 0,
  padding: 0,
});

globalStyle('button', {
  border: 'none',
  backgroundColor: 'transparent',
});

globalStyle('button:disabled', {
  cursor: 'not-allowed',
});

globalStyle('h2', {
  margin: 0,
});

globalStyle('fieldset', {
  margin: 0,
  border: 'none',
  padding: 0,
});

globalStyle('select', {
  appearance: 'none',
  cursor: 'pointer', // NOTE: 브라우저의 기본 아이콘 제거
});
