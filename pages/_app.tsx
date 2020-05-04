import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import ThemeContext, {
  ThemeProvider,
  IThemeContext,
} from '../src/theme/ThemeProvider';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {(value: IThemeContext) => (
          <MuiThemeProvider theme={value.theme}>
            <Component {...pageProps} />
          </MuiThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

export default App;
