import { createMuiTheme } from '@material-ui/core/styles';
import { Theme, colors } from '@material-ui/core';

// Create a theme instance.
const theme: Theme = createMuiTheme({
  spacing: 8,
  overrides: {
    MuiTypography: {
      h1: {
        fontSize: '80px',
      },
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: colors.grey[100],
      light: '#FFFFFF',
      dark: '#C2C2C2',
    },
    secondary: {
      main: colors.orange.A400,
      light: '#484848',
      dark: '#000000',
    },
    background: {
      default: colors.grey[100],
    },
  },
});

export default theme;
