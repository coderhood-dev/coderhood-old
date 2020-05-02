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
    type: 'dark',
    primary: {
      main: colors.grey[800],
      light: colors.grey[700],
      dark: colors.grey[900],
    },
    secondary: {
      main: colors.orange.A400,
      light: '#FFFFFF',
      dark: '#C2C2C2',
    },
    background: {
      default: colors.grey[900],
    },
  },
});

export default theme;
