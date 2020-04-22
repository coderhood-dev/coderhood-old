import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from 'styled-components';
import ThemeContext, { ThemeProvider } from '../theme/ThemeProvider';

const DarkContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b1f23;
`;

const Layout = ({ children }) => (
  <ThemeProvider>
    <ThemeContext.Consumer>
      {({ theme }) => (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <DarkContainer>{children}</DarkContainer>
        </MuiThemeProvider>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default Layout;
