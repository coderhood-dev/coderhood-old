import React, { useState, useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';

import '@material/react-text-field/dist/text-field.css';

import { initAuth } from '../context/auth';
import { Layout } from '../components';
import { AuthContext } from '../context';
import { coderhoodTheme } from '../theme';

const auth = initAuth(); // TODO: test this move

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [user, setUser] = useState<firebase.User>(null);

  useEffect(() => {
    // Firebase authentication listener which updates useAuth's state
    const removeListener = auth.onAuthStateChanged((authUser) => {
      authUser ? setUser(authUser) : setUser(null);
    });
    return () => {
      removeListener();
    };
  }, []);

  return (
    <ChakraProvider theme={coderhoodTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <CSSReset />
      <ColorModeProvider>
        <AuthContext.Provider value={{ ...auth, user }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthContext.Provider>
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default App;
