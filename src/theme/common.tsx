import { ColorPartial, PaletteOptions } from '@mui/material/styles/createPalette';
import { ThemeOptions } from '@mui/material/styles/createTheme';
import * as React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface HaikuPalette extends PaletteOptions {
  indigo?: ColorPartial;
  deepPurple?: ColorPartial;
  amber?: ColorPartial;
  orange?: ColorPartial;
  pink?: ColorPartial;
  deepOrange?: ColorPartial;
  green?: ColorPartial;
  red?: ColorPartial;
  lightgreen?: ColorPartial;
  purple?: ColorPartial;
  lime?: ColorPartial;
  lightblue?: ColorPartial;
  yellow?: ColorPartial;
  cyan?: ColorPartial;
  teal?: ColorPartial;
  blue?: ColorPartial;
  blueGrey?: ColorPartial;
}

interface HaikuTheme extends ThemeOptions {
  palette?: HaikuPalette;
}

const fontsDefault = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

export const fontsRajdhani = ['Rajdhani', ...fontsDefault].join(',');

export const fontsOpenSans = ['Open Sans', ...fontsDefault].join(',');

export const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return (
    <RouterLink
      ref={ref}
      to={href}
      {...other}
    />
  );
});

export type { HaikuTheme, HaikuPalette };
