/*! 
https://serp.co/tools/css-reset/
<link rel="stylesheet" href="https://css.serp.co/normalize.css">
*/
import { globalStyle } from '@vanilla-extract/css';

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

globalStyle('html', {
  lineHeight: 1.15,
  WebkitTextSizeAdjust: '100%',
});

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

globalStyle('body', {
  margin: 0,
});

/**
 * Render the `main` element consistently in IE.
 */

globalStyle('main', {
  display: 'block',
});

/**
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
 */

globalStyle('h1', {
  margin: '0.67em 0',
  fontSize: '2em',
});

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

globalStyle('hr', {
  boxSizing: 'content-box',
  height: 0,
  overflow: 'visible',
});

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

globalStyle('pre', {
  fontFamily: 'monospace, monospace',
  fontSize: '1em',
});

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

globalStyle('a', {
  backgroundColor: 'transparent',
});

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

globalStyle('abbr[title]', {
  borderBottom: 'none',
  textDecoration: 'underline dotted',
});

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

globalStyle('b, strong', {
  fontWeight: 'bolder',
});

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
 */

globalStyle('code, kbd, samp', {
  fontFamily: 'monospace, monospace',
  fontSize: '1em',
});

/**
 * Add the correct font size in all browsers.
 */

globalStyle('small', {
  fontSize: '80%',
});

/**
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
 */

globalStyle('sub, sup', {
  position: 'relative',
  verticalAlign: 'baseline',
  lineHeight: 0,
  fontSize: '75%',
});

globalStyle('sub', {
  bottom: '-0.25em',
});

globalStyle('sup', {
  top: '-0.5em',
});

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

globalStyle('img', {
  borderStyle: 'none',
});

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

globalStyle('button, input, optgroup, select, textarea', {
  margin: 0,
  lineHeight: 1.15,
  fontFamily: 'inherit',
  fontSize: '100%',
});

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

globalStyle('button, input', {
  overflow: 'visible',
});

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

globalStyle('button, select', {
  textTransform: 'none',
});

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

globalStyle('button, [type="button"], [type="reset"], [type="submit"]', {
  WebkitAppearance: 'button',
});

/**
 * Remove the inner border and padding in Firefox.
 */

globalStyle(
  'button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner',
  {
    borderStyle: 'none',
    padding: 0,
  },
);

/**
 * Restore the focus styles unset by the previous rule.
 */

globalStyle(
  'button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring',
  {
    outline: '1px dotted ButtonText',
  },
);

/**
 * Correct the padding in Firefox.
 */

globalStyle('fieldset', {
  padding: '0.35em 0.75em 0.625em',
});

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
 */

globalStyle('legend', {
  boxSizing: 'border-box',
  display: 'table',
  padding: 0,
  maxWidth: '100%',
  whiteSpace: 'normal',
  color: 'inherit',
});

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

globalStyle('progress', {
  verticalAlign: 'baseline',
});

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

globalStyle('textarea', {
  overflow: 'auto',
});

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

globalStyle('[type="checkbox"], [type="radio"]', {
  boxSizing: 'border-box',
  padding: 0,
});

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

globalStyle(
  '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button',
  {
    height: 'auto',
  },
);

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

globalStyle('[type="search"]', {
  outlineOffset: '-2px',
  WebkitAppearance: 'textfield',
});

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

globalStyle('[type="search"]::-webkit-search-decoration', {
  WebkitAppearance: 'none',
});

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
 */

globalStyle('::-webkit-file-upload-button', {
  font: 'inherit',
  WebkitAppearance: 'button',
});

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

globalStyle('details', {
  display: 'block',
});

/*
 * Add the correct display in all browsers.
 */

globalStyle('summary', {
  display: 'list-item',
});

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

globalStyle('template', {
  display: 'none',
});

/**
 * Add the correct display in IE 10.
 */

globalStyle('[hidden]', {
  display: 'none',
});
