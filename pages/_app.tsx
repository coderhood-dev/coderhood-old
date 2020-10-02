import React, { useState, useEffect } from 'react';
import Amplify from 'aws-amplify';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';

import '@material/react-text-field/dist/text-field.css';

//import config from '../src/aws-exports';
import { initAuth } from '../context/auth';
import { Layout } from '../components';
import { AuthContext } from '../context';
import { coderhoodTheme } from '../theme';

//Amplify.configure({ ...config, ssr: true });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  // const [user, setUser] = useState<firebase.User>(null);

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
        {/* <AuthContext.Provider value={{ ...auth, user }}> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </AuthContext.Provider> */}
      </ColorModeProvider>
    </ChakraProvider>
  );
};

export default App;
