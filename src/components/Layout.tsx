import React from 'react';
import { Box, CssBaseline } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

import Head from './Head';
import { Header, Footer, Flex } from './';
import { themes } from '../../src/context/theme';

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title }) => (
  <Box minHeight="100vh" display="flex" flexDirection="column">
    <CssBaseline />
    <Head title={title} />
    <Header />
    <Flex direction="column" pt={16} p={8} flex={1}>
      {children}
    </Flex>
    <MuiThemeProvider theme={themes.dark}>
      <Footer />
    </MuiThemeProvider>
  </Box>
);

Layout.defaultProps = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
};

export default Layout;
