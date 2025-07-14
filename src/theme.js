import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#021024',
    },
    secondary: {
      main: '#054269',
    },
    info: {
      main: '#C1FBFF',
    },
    background: {
      default: '#f8f8f8',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
