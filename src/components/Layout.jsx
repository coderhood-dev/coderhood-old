import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeContext from '@theme/ThemeProvider';
import Head from './Head';
import { Header, Footer } from './';

const Layout = ({ children, title }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Head title={title} />
        <Header />
        <Box pt={8}>{children}</Box>
        <Footer />
      </MuiThemeProvider>
    )}
  </ThemeContext.Consumer>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: process.env.APP_NAME,
};

export default Layout;
