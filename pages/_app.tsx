import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';

import '@material/react-text-field/dist/text-field.css';

import { initAuth } from '../src/context/auth';
import { AuthContext } from '../src/context';

const auth = initAuth(); // TODO: test this move

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [user, setUser] = useState<firebase.User>(null);

  useEffect(() => {
    // Firebase's authentification listener which updated useAuth state
    const removeListener = auth.onAuthStateChanged((authUser) => {
      authUser ? setUser(authUser) : setUser(null);
    });
    return () => {
      removeListener();
    };
  }, []);

  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>
        <AuthContext.Provider value={{ ...auth, user }}>
          <Component {...pageProps} />
        </AuthContext.Provider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
