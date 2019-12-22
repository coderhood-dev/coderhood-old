import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeContext, { ThemeProvider } from '@theme/ThemeProvider';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title }) => (
  <ThemeProvider>
    <ThemeContext.Consumer>
      {({ theme }) => (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Head title={title} />
          <Header />
          {children}
          <Footer />
        </MuiThemeProvider>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: '',
};

export default Layout;
