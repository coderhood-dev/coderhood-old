import { createMuiTheme } from '@material-ui/core/styles';
import { grey, orange } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  name: 'light',
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
      main: grey[100],
      light: '#FFFFFF',
      dark: '#C2C2C2',
    },
    secondary: {
      main: orange.A400,
      light: '#484848',
      dark: '#000000',
    },
    background: {
      default: grey[100],
    },
  },
});

export default theme;
