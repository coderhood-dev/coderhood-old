import React from 'react';
import { Box, CssBaseline } from '@material-ui/core';
import Head from './Head';
import { Header, Footer, Flex } from '.';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import ThemeContext, { themes } from '../theme/ThemeProvider';

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title }) => (
  <Box minHeight="100vh" display="flex" flexDirection="column">
    <CssBaseline />
    <Head title={title} />
    <Header />
    <Flex pt={16} p={8} flex={1}>
      {children}
    </Flex>
    <ThemeContext.Consumer>
      {() => (
        <MuiThemeProvider theme={themes.dark}>
          <Footer />
        </MuiThemeProvider>
      )}
    </ThemeContext.Consumer>
  </Box>
);

Layout.defaultProps = {
  title: process.env.APP_NAME,
};

export default Layout;
