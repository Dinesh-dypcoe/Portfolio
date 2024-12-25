import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00D1FF',
      light: '#5EE7FF',
      dark: '#00A3FF',
    },
    secondary: {
      main: '#7000FF',
      light: '#9B4BFF',
      dark: '#5200B3',
    },
    background: {
      default: '#030014',
      paper: 'rgba(10, 10, 30, 0.8)',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#9EA7C7',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.025em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(3, 0, 20, 0.7)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 209, 255, 0.1)',
        },
      },
    },
  },
});

export default theme; 