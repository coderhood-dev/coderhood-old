import React, { useState, useEffect } from 'react';
import Amplify from 'aws-amplify';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';

import '@material/react-text-field/dist/text-field.css';

import { initAuth } from '../context/auth';
import { Layout } from '../components';
import { AuthContext } from '../context';
import { coderhoodTheme } from '../theme';

const awsconfig = {
  Auth: {
    mandatorySignIn: true,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
    identityPoolId: process.env.NEXT_PUBLIC_COGNITO_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
  },
};

Amplify.configure({ ...awsconfig, ssr: true });

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
