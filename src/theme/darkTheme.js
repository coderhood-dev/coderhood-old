import { createMuiTheme } from '@material-ui/core/styles';
import { grey, orange } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  name: 'dark',
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
      main: grey[800],
      light: grey[700],
      dark: grey[900],
    },
    secondary: {
      main: orange.A400,
      light: '#FFFFFF',
      dark: '#C2C2C2',
    },
    background: {
      default: grey[900],
    },
  },
});

export default theme;
