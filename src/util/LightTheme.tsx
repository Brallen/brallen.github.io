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
      black: '#1e2d32',
      white: '#ffffff',
    },

    primary: {
      main: '#4f6563',
      dark: '#1e2d32',
    },

    secondary: {
      main: '#ca9954',
    },

    error: {
      main: '#9a5131',
    },

    warning: {
      main: '#fb631d',
    },

    info: {
      main: '#d9f5fd',
    },

    success: {
      main: '#62b2cc',
    },

    contrastThreshold: 4.5,

    text: {
      primary: '#1e2d32',
      secondary: '#4f6563',
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
      letterSpacing: '0.1em',
      fontFamily: 'ff-basic-gothic-pro, sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: '4rem',
    },
    h2: {
      letterSpacing: '0.15em',
      fontFamily: 'houschka-rounded, sans-serif',
      fontWeight: 300,
      fontSize: '2rem',
      lineHeight: '3rem',
    },
    h3: {
      fontFamily: 'ff-basic-gothic-pro, sans-serif',
      fontWeight: 400,
      fontSize: '1.8rem',
      lineHeight: '2.5rem',
    },
    h4: {
      fontFamily: 'ff-basic-gothic-pro, sans-serif',
      fontWeight: 400,
      fontSize: '1.5em',
    },
    h5: {
      fontFamily: 'houschka-rounded, sans-serif',
      fontWeight: 500,
      fontSize: '1.5em',
    },
    subtitle1: {
      fontFamily: 'houschka-rounded, sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'houschka-rounded, sans-serif',
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: '1.25rem',
      lineHeight: 1.75,
    },
    body2: {
      fontFamily: 'houschka-rounded, sans-serif',
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    button: {
      fontFamily: 'houschka-rounded, sans-serif',
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: '1em',
      lineHeight: 1.5,
    },
  },
});

// Global styling overrides for MUI components
lightTheme.components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '10px',
        textTransform: 'none',
        padding: lightTheme.spacing(1, 2),

        containedPrimary: {
          backgroundColor: lightTheme.palette.primary.dark,

          '&:hover': {
            backgroundColor: lightTheme.palette.primary.main,
          },
        },
      },
    },
  },
};

export default lightTheme;
