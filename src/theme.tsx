import React from "react";
import { createTheme } from '@mui/material/styles';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import { ColorPartial, PaletteOptions } from "@mui/material/styles/createPalette";
import { ThemeOptions } from "@mui/material/styles/createTheme";

const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

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
]
const fontsCairo = [
  'Cairo',
  ...fontsDefault,
].join(',');

const fontsOrbitron = [
  'Orbitron',
  ...fontsDefault,
].join(',');

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

const theme = createTheme({
  palette: {
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
      selected: 'rgba(255, 255, 255, 0.16)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      focus: 'rgba(255, 255, 255, 0.12)',
      disabled: 'rgba(255, 255, 255, 0.38)',
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
      'paper': 'rgba(1, 5, 34, 1)',
    },
    grey: {
      '50': 'rgba(250, 250, 250, 1)',
      '100': 'rgba(245, 245, 245, 1)',
      '200': 'rgba(238, 238, 238, 1)',
      '300': 'rgba(224, 224, 224, 1)',
      '400': 'rgba(189, 189, 189, 1)',
      '500': 'rgba(158, 158, 158, 1)',
      '600': 'rgba(117, 117, 117, 1)',
      '700': 'rgba(97, 97, 97, 1)',
      '800': 'rgba(66, 66, 66, 1)',
      '900': 'rgba(33, 33, 33, 1)',
      A100: 'rgba(213, 213, 213, 1)',
      A200: 'rgba(170, 170, 170, 1)',
      A400: 'rgba(97, 97, 97, 1)',
      A700: 'rgba(48, 48, 48, 1)',
    },
    indigo: {
      '50': 'rgba(232, 234, 246, 1)',
      '100': 'rgba(197, 202, 233, 1)',
      '200': 'rgba(159, 168, 218, 1)',
      '300': 'rgba(121, 134, 203, 1)',
      '400': 'rgba(92, 107, 192, 1)',
      '500': 'rgba(63, 81, 181, 1)',
      '600': 'rgba(57, 73, 171, 1)',
      '700': 'rgba(48, 63, 159, 1)',
      '800': 'rgba(40, 53, 147, 1)',
      '900': 'rgba(26, 35, 126, 1)',
      A100: 'rgba(140, 158, 255, 1)',
      A200: 'rgba(83, 109, 254, 1)',
      A400: 'rgba(61, 90, 254, 1)',
      A700: 'rgba(48, 79, 254, 1)',
    },
    deepPurple: {
      '50': 'rgba(237, 231, 246, 1)',
      '100': 'rgba(209, 196, 233, 1)',
      '200': 'rgba(179, 157, 219, 1)',
      '300': 'rgba(149, 117, 205, 1)',
      '400': 'rgba(126, 87, 194, 1)',
      '500': 'rgba(103, 58, 183, 1)',
      '600': 'rgba(94, 53, 177, 1)',
      '700': 'rgba(81, 45, 168, 1)',
      '800': 'rgba(69, 39, 160, 1)',
      '900': 'rgba(49, 27, 146, 1)',
      A100: 'rgba(179, 136, 255, 1)',
      A200: 'rgba(124, 77, 255, 1)',
      A400: 'rgba(101, 31, 255, 1)',
      A700: 'rgba(98, 0, 234, 1)',
    },
    amber: {
      '50': 'rgba(255, 248, 225, 1)',
      '100': 'rgba(255, 236, 179, 1)',
      '200': 'rgba(255, 224, 130, 1)',
      '300': 'rgba(255, 213, 79, 1)',
      '400': 'rgba(255, 202, 40, 1)',
      '500': 'rgba(255, 193, 7, 1)',
      '600': 'rgba(255, 179, 0, 1)',
      '700': 'rgba(255, 160, 0, 1)',
      '800': 'rgba(255, 143, 0, 1)',
      '900': 'rgba(255, 111, 0, 1)',
      A100: 'rgba(255, 229, 127, 1)',
      A200: 'rgba(255, 215, 64, 1)',
      A400: 'rgba(255, 196, 0, 1)',
      A700: 'rgba(255, 171, 0, 1)',
    },
    orange: {
      '50': 'rgba(255, 243, 224, 1)',
      '100': 'rgba(255, 224, 178, 1)',
      '200': 'rgba(255, 204, 128, 1)',
      '300': 'rgba(255, 183, 77, 1)',
      '400': 'rgba(255, 167, 38, 1)',
      '500': 'rgba(255, 152, 0, 1)',
      '600': 'rgba(251, 140, 0, 1)',
      '700': 'rgba(245, 124, 0, 1)',
      '800': 'rgba(239, 108, 0, 1)',
      '900': 'rgba(230, 81, 0, 1)',
      A100: 'rgba(255, 209, 128, 1)',
      A200: 'rgba(255, 171, 64, 1)',
      A400: 'rgba(255, 145, 0, 1)',
      A700: 'rgba(255, 109, 0, 1)',
    },
    pink: {
      '50': 'rgba(252, 228, 236, 1)',
      '100': 'rgba(248, 187, 208, 1)',
      '200': 'rgba(244, 143, 177, 1)',
      '300': 'rgba(240, 98, 146, 1)',
      '400': 'rgba(236, 64, 122, 1)',
      '500': 'rgba(233, 30, 99, 1)',
      '600': 'rgba(216, 27, 96, 1)',
      '700': 'rgba(194, 24, 91, 1)',
      '800': 'rgba(173, 20, 87, 1)',
      '900': 'rgba(136, 14, 79, 1)',
      A100: 'rgba(255, 128, 171, 1)',
      A200: 'rgba(255, 64, 129, 1)',
      A400: 'rgba(245, 0, 87, 1)',
      A700: 'rgba(197, 17, 98, 1)',
    },
    deepOrange: {
      '50': 'rgba(251, 233, 231, 1)',
      '100': 'rgba(255, 204, 188, 1)',
      '200': 'rgba(255, 171, 145, 1)',
      '300': 'rgba(255, 138, 101, 1)',
      '400': 'rgba(255, 112, 67, 1)',
      '500': 'rgba(255, 87, 34, 1)',
      '600': 'rgba(244, 81, 30, 1)',
      '700': 'rgba(230, 74, 25, 1)',
      '800': 'rgba(216, 67, 21, 1)',
      '900': 'rgba(191, 54, 12, 1)',
      A100: 'rgba(255, 158, 128, 1)',
      A200: 'rgba(255, 110, 64, 1)',
      A400: 'rgba(255, 61, 0, 1)',
      A700: 'rgba(221, 44, 0, 1)',
    },
    green: {
      '50': 'rgba(232, 245, 233, 1)',
      '100': 'rgba(200, 230, 201, 1)',
      '200': 'rgba(165, 214, 167, 1)',
      '300': 'rgba(129, 199, 132, 1)',
      '400': 'rgba(102, 187, 106, 1)',
      '500': 'rgba(76, 175, 80, 1)',
      '600': 'rgba(67, 160, 71, 1)',
      '700': 'rgba(56, 142, 60, 1)',
      '800': 'rgba(46, 125, 50, 1)',
      '900': 'rgba(27, 94, 32, 1)',
      A100: 'rgba(185, 246, 202, 1)',
      A200: 'rgba(105, 240, 174, 1)',
      A400: 'rgba(0, 230, 118, 1)',
      A700: 'rgba(0, 200, 83, 1)',
    },
    red: {
      '50': 'rgba(254, 235, 238, 1)',
      '100': 'rgba(254, 205, 210, 1)',
      '200': 'rgba(239, 154, 154, 1)',
      '300': 'rgba(229, 115, 115, 1)',
      '400': 'rgba(239, 83, 80, 1)',
      '500': 'rgba(244, 67, 54, 1)',
      '600': 'rgba(229, 57, 53, 1)',
      '700': 'rgba(211, 47, 47, 1)',
      '800': 'rgba(198, 40, 40, 1)',
      '900': 'rgba(183, 28, 28, 1)',
      A100: 'rgba(255, 138, 128, 1)',
      A200: 'rgba(255, 82, 82, 1)',
      A400: 'rgba(255, 23, 68, 1)',
      A700: 'rgba(213, 0, 0, 1)',
    },
    lightgreen: {
      '50': 'rgba(241, 248, 233, 1)',
      '100': 'rgba(220, 237, 200, 1)',
      '200': 'rgba(197, 225, 165, 1)',
      '300': 'rgba(174, 213, 129, 1)',
      '400': 'rgba(139, 195, 74, 1)',
      '500': 'rgba(139, 195, 74, 1)',
      '600': 'rgba(124, 179, 66, 1)',
      '700': 'rgba(104, 159, 56, 1)',
      '800': 'rgba(85, 139, 47, 1)',
      '900': 'rgba(51, 105, 30, 1)',
      A100: 'rgba(204, 255, 144, 1)',
      A200: 'rgba(178, 255, 89, 1)',
      A400: 'rgba(118, 255, 3, 1)',
      A700: 'rgba(100, 221, 23, 1)',
    },
    purple: {
      '50': 'rgba(243, 229, 245, 1)',
      '100': 'rgba(225, 190, 231, 1)',
      '200': 'rgba(206, 147, 216, 1)',
      '300': 'rgba(186, 104, 200, 1)',
      '400': 'rgba(171, 71, 188, 1)',
      '500': 'rgba(156, 39, 176, 1)',
      '600': 'rgba(142, 36, 170, 1)',
      '700': 'rgba(123, 31, 162, 1)',
      '800': 'rgba(106, 27, 154, 1)',
      '900': 'rgba(74, 20, 140, 1)',
      A100: 'rgba(234, 128, 252, 1)',
      A200: 'rgba(224, 64, 251, 1)',
      A400: 'rgba(213, 0, 249, 1)',
      A700: 'rgba(170, 0, 255, 1)',
    },
    lime: {
      '50': 'rgba(249, 251, 231, 1)',
      '100': 'rgba(240, 244, 195, 1)',
      '200': 'rgba(230, 238, 156, 1)',
      '300': 'rgba(220, 231, 117, 1)',
      '400': 'rgba(212, 225, 87, 1)',
      '500': 'rgba(205, 220, 57, 1)',
      '600': 'rgba(192, 202, 51, 1)',
      '700': 'rgba(175, 180, 43, 1)',
      '800': 'rgba(158, 157, 36, 1)',
      '900': 'rgba(130, 119, 23, 1)',
      A100: 'rgba(244, 255, 129, 1)',
      A200: 'rgba(238, 255, 65, 1)',
      A400: 'rgba(198, 255, 0, 1)',
      A700: 'rgba(174, 234, 0, 1)',
    },
    lightblue: {
      '50': 'rgba(225, 245, 254, 1)',
      '100': 'rgba(179, 229, 252, 1)',
      '200': 'rgba(129, 212, 250, 1)',
      '300': 'rgba(79, 195, 247, 1)',
      '400': 'rgba(41, 182, 246, 1)',
      '500': 'rgba(3, 169, 244, 1)',
      '600': 'rgba(3, 155, 229, 1)',
      '700': 'rgba(2, 136, 209, 1)',
      '800': 'rgba(2, 119, 189, 1)',
      '900': 'rgba(1, 87, 155, 1)',
      A100: 'rgba(128, 216, 255, 1)',
      A200: 'rgba(64, 196, 255, 1)',
      A400: 'rgba(0, 176, 255, 1)',
      A700: 'rgba(0, 145, 234, 1)',
    },
    yellow: {
      '50': 'rgba(255, 253, 231, 1)',
      '100': 'rgba(255, 249, 196, 1)',
      '200': 'rgba(255, 245, 157, 1)',
      '300': 'rgba(255, 241, 118, 1)',
      '400': 'rgba(255, 238, 88, 1)',
      '500': 'rgba(255, 235, 59, 1)',
      '600': 'rgba(253, 216, 53, 1)',
      '700': 'rgba(251, 192, 45, 1)',
      '800': 'rgba(249, 168, 37, 1)',
      '900': 'rgba(245, 127, 23, 1)',
      A100: 'rgba(255, 255, 141, 1)',
      A200: 'rgba(255, 255, 0, 1)',
      A400: 'rgba(255, 234, 0, 1)',
      A700: 'rgba(255, 214, 0, 1)',
    },
    cyan: {
      '50': 'rgba(224, 247, 250, 1)',
      '100': 'rgba(178, 235, 242, 1)',
      '200': 'rgba(128, 222, 234, 1)',
      '300': 'rgba(77, 208, 225, 1)',
      '400': 'rgba(38, 198, 218, 1)',
      '500': 'rgba(0, 188, 212, 1)',
      '600': 'rgba(0, 172, 193, 1)',
      '700': 'rgba(0, 151, 167, 1)',
      '800': 'rgba(0, 131, 143, 1)',
      '900': 'rgba(0, 96, 100, 1)',
      A100: 'rgba(132, 255, 255, 1)',
      A200: 'rgba(24, 255, 255, 1)',
      A400: 'rgba(0, 229, 255, 1)',
      A700: 'rgba(0, 184, 212, 1)',
    },
    teal: {
      '50': 'rgba(224, 242, 241, 1)',
      '100': 'rgba(178, 223, 219, 1)',
      '200': 'rgba(128, 203, 196, 1)',
      '300': 'rgba(77, 182, 172, 1)',
      '400': 'rgba(38, 166, 154, 1)',
      '500': 'rgba(0, 150, 136, 1)',
      '600': 'rgba(0, 137, 123, 1)',
      '700': 'rgba(0, 121, 107, 1)',
      '800': 'rgba(0, 105, 92, 1)',
      '900': 'rgba(0, 77, 64, 1)',
      A100: 'rgba(167, 255, 235, 1)',
      A200: 'rgba(100, 255, 218, 1)',
      A400: 'rgba(29, 233, 182, 1)',
      A700: 'rgba(0, 191, 165, 1)',
    },
    blue: {
      '50': 'rgba(227, 242, 253, 1)',
      '100': 'rgba(187, 222, 251, 1)',
      '200': 'rgba(144, 202, 249, 1)',
      '300': 'rgba(25, 118, 210, 1)',
      '400': 'rgba(66, 165, 245, 1)',
      '500': 'rgba(33, 150, 243, 1)',
      '600': 'rgba(30, 136, 229, 1)',
      '700': 'rgba(0, 87, 178, 1)',
      '800': 'rgba(21, 101, 192, 1)',
      '900': 'rgba(13, 71, 161, 1)',
      A100: 'rgba(130, 177, 255, 1)',
      A200: 'rgba(68, 138, 255, 1)',
      A400: 'rgba(41, 121, 255, 1)',
      A700: 'rgba(41, 98, 255, 1)',
    },
    blueGrey: {
      '50': 'rgba(236, 239, 241, 1)',
      '100': 'rgba(207, 216, 220, 1)',
      '200': 'rgba(176, 190, 197, 1)',
      '300': 'rgba(144, 164, 174, 1)',
      '400': 'rgba(120, 144, 156, 1)',
      '500': 'rgba(96, 125, 139, 1)',
      '600': 'rgba(84, 110, 122, 1)',
      '700': 'rgba(69, 90, 100, 1)',
      '800': 'rgba(55, 71, 79, 1)',
      '900': 'rgba(38, 50, 56, 1)',
    }/*,
    alert: {
      errorcontent: 'rgba(244, 199, 199, 1)',
      errorfill: 'rgba(22, 11, 11, 1)',
      warningcontent: 'rgba(255, 226, 183, 1)',
      warningfill: 'rgba(25, 18, 7, 1)',
      infocontent: 'rgba(184, 231, 251, 1)',
      infofill: 'rgba(6.29, 41.08, 55.25, 1)',
      successcontent: 'rgba(139.9, 212.5, 143.77, 1)',
      successfill: 'rgba(12, 19, 13, 1)',
    },
    avatar: {
      fill: 'rgba(117, 117, 117, 1)',
    },
    backdrop: {
      fill: 'rgba(0, 0, 0, 0.5)',
    },
    breadcrumbs: {
      collapsefill: 'rgba(117, 117, 117, 1)',
    },
    chip: {
      defaultclosefill: 'rgba(255, 255, 255, 1)',
      defaulthoverfill: 'rgba(255, 255, 255, 0.12)',
      defaultfocusfill: 'rgba(255, 255, 255, 0.2)',
      defaultenabledborder: 'rgba(97, 97, 97, 1)',
    },
    input: {
      standard: {
        hoverborder: 'rgba(255, 255, 255, 1)',
      },
      filled: {
        hoverfill: 'rgba(255, 255, 255, 0.12)',
      },
      outlined: {
        hoverborder: 'rgba(255, 255, 255, 1)',
      },
    },
    rating: {
      enabledborder: 'rgba(255, 255, 255, 0.23)',
      activefill: 'rgba(255, 180, 0, 1)',
    },
    switch: {
      knobfill: 'rgba(224, 224, 224, 1)',
      slidefill: 'rgba(255, 255, 255, 0.38)',
    },
    tooltip: {
      fill: 'rgba(97, 97, 97, 0.9)',
    },
    snackbar: {
      defaultfill: 'rgba(18, 18, 18, 1)',
    },*/
  },
  components: {
    MuiSnackbar: {

    },
    MuiButton: {
      styleOverrides: {
        contained: {
          background: "linear-gradient(180deg, #0CB0A5 0%, #11787E 100%)",
          "&:hover": {
            background: "linear-gradient(180deg, #0CB0A5CC 0%, #11787ECC 100%)",
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          background: "#0C0F25",
          "&:hover": {
            background: "#0F1C28",
          }
        }
      }
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          background: "rgba(6, 41, 55, 1)",
          color: "rgba(184, 231, 251, 1)",
        }
      }
    },
  },
  typography: {
    h1: {
      fontFamily: fontsOrbitron,
    },
    h2: {
      fontFamily: fontsOrbitron,
    },
    h3: {
      fontFamily: fontsOrbitron,
    },
    h4: {
      fontFamily: fontsOrbitron,
    },
    h5: {
      fontFamily: fontsOrbitron,
    },
    h6: {
      fontFamily: fontsOrbitron,
    },
    subtitle1: {
      // fontFamily: fontsCairo,
    },
    subtitle2: {
      // fontFamily: fontsCairo,
    },
    body1: {
      // fontFamily: fontsCairo,
    },
    body2: {
      // fontFamily: fontsCairo,
    },
    button: {
      fontFamily: fontsOrbitron,
    },
    caption: {
      fontFamily: fontsOrbitron,
    },
    overline: {
      fontFamily: fontsOrbitron,
    },
    fontFamily: fontsCairo,
  },
} as HaikuTheme);

export default theme;
export type { HaikuTheme, HaikuPalette }
