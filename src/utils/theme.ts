import { Roboto } from 'next/font/google';
import { Theme, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 380,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    }
    
  },
  palette: {
    primary: {
      light: 'rgb(255, 80, 0)',
      main: 'rgb(255, 90, 0)',
      dark: 'rgb(255, 100, 0)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#596B1D',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#eceef1',
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 11.2,
    h3: {
      fontSize: '32px',
    },
    h4: {
      fontSize: '26px',
    },
    h5: {
      fontSize: '20px',
    },
    h6: {
      fontSize: '18px',
    }
  },
  components: {
    MuiOutlinedInput: {
      variants: [
        {
          props: { size: 'small' },
          style: {
            '.MuiInputBase-input': {
              // padding: '6px 8.5px',
            }
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { size: 'small' },
          style: {
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 0,
        }
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          // fontSize: '14px'
        },
      },
      variants: [
        {
          props: { variant: 'text1' },
          style: {
            fontSize: '12px'
          },
        },
      ],
    },
    MuiCssBaseline: {
      styleOverrides: (theme: Theme) => ({
        body: {
          backgroundColor: theme.palette.background.default,
        }
      }),
    },
  },
});

export default theme;

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    text1: true;
  }
}