import { createTheme } from '@mui/material/styles';

import { HaikuTheme, defaultPalette } from './common';

const darkTheme = createTheme({
  ...defaultPalette,
  palette: {
    ...defaultPalette.palette,
    mode: 'dark',
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.38)',
    },
    primary: {
      main: '#00B7AC',
      dark: 'rgba(10, 96, 92, 1)',
      light: 'rgba(230, 255, 255, 1)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    secondary: {
      main: 'rgba(206, 147, 216, 1)',
      dark: 'rgba(171, 71, 188, 1)',
      light: 'rgba(243, 229, 245, 1)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    action: {
      active: 'rgba(255, 255, 255, 0.56)',
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.38)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.12,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
    },
    error: {
      main: 'rgba(244, 67, 54, 1)',
      dark: 'rgba(211, 47, 47, 1)',
      light: 'rgba(229, 115, 115, 1)',
      contrastText: 'rgba(255, 255, 255, 1)',
    },
    warning: {
      main: 'rgba(255, 167, 38, 1)',
      dark: 'rgba(245, 124, 0, 1)',
      light: 'rgba(255, 183, 77, 1)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    info: {
      main: 'rgba(41, 182, 246, 1)',
      dark: 'rgba(2, 136, 209, 1)',
      light: 'rgba(79, 195, 247, 1)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    success: {
      main: 'rgba(102, 187, 106, 1)',
      dark: 'rgba(56, 142, 60, 1)',
      light: 'rgba(129, 199, 132, 1)',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    background: {
      default: 'rgba(1, 5, 34, 1)',
      paper: 'rgba(1, 5, 34, 1)',
    },
  },
} as HaikuTheme);

export default darkTheme;
