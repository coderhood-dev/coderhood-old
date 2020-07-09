import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import { initAuth } from '../src/context/auth';
import { AuthContext } from '../src/context';
import ThemeContext, {
  ThemeProvider,
  IThemeContext,
} from '../src/theme/ThemeProvider';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [user, setUser] = useState<firebase.User>(null);
  const auth = initAuth();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const removeListener = auth.onAuthStateChanged((authUser) => {
      authUser ? setUser(authUser) : setUser(null);
    });
    return () => {
      removeListener();
    };
  }, []);

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {(value: IThemeContext) => (
          <MuiThemeProvider theme={value.theme}>
            <AuthContext.Provider value={{ ...auth, user }}>
              <Component {...pageProps} />
            </AuthContext.Provider>
          </MuiThemeProvider>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

export default App;
