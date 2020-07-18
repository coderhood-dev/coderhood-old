import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import { initAuth } from '../src/context/auth';
import { IThemeContext, themes } from '../src/context/theme';
import { AuthContext, ThemeContext } from '../src/context';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [user, setUser] = useState<firebase.User>(null);
  const auth = initAuth();

  const [theme, setTheme] = useState(themes.light);

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

  const themeContext: IThemeContext = {
    theme,
    switchTheme: () => {
      setTheme(theme.palette.type === 'dark' ? themes.light : themes.dark);
    },
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      <MuiThemeProvider theme={themeContext.theme}>
        <AuthContext.Provider value={{ ...auth, user }}>
          <Component {...pageProps} />
        </AuthContext.Provider>
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
