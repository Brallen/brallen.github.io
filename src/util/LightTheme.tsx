import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  spacing: 8, // Default value to multiply against any passed in factor

  palette: {
    common: {
      black: '#221b17',
      white: '#ffffff',
    },

    primary: {
      main: '#fb631d',
    },

    secondary: {
      main: '#62b2cc',
    },

    error: {
      main: '#9a5131',
    },

    warning: {
      main: '#fb631d',
    },

    info: {
      main: '#62b2cc',
    },

    success: {
      main: '#62b2cc',
    },

    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#3b3735',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161',
    },

    contrastThreshold: 4.5,

    text: {
      primary: '#221b17',
      secondary: '#ffffff',
      disabled: '#9e9e9e',
    },

    divider: '#221b17',

    background: {
      paper: '#fff',
      default: '#fff1e5',
    },
  },

  typography: {
    h1: {
      fontFamily: 'Black Ops One, sans-serif',
      fontWeight: 800,
    },
    h2: {
      fontSize: '2.25rem',
      fontFamily: 'Black Ops One, sans-serif',
      fontWeight: 800,
    },
    h3: {
      fontSize: '1.75rem',
      fontFamily: 'Black Ops One, sans-serif',
      fontWeight: 800,
    },
    h4: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Black Ops One, sans-serif',
      fontWeight: 400,
    },
    h6: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
    },
    button: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
    },
  },
});

export default lightTheme;
