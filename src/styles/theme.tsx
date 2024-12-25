import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#090c9b',
    },
    secondary: {
      main: '#3066be',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#6c757d',
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
    allVariants: {
      color: '#000000',
    },
    h1: {
      fontSize: '2rem',
      fontWeight: 400,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 300,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 300,
      textAlign: 'justify',
      lineHeight: 1.8,
    },
  },
});

export default customTheme;
