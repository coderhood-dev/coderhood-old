import React from 'react';
import { Box, CssBaseline } from '@material-ui/core';
import Head from './Head';
import { Header, Footer } from '.';

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title }) => (
  <>
    <CssBaseline />
    <Head title={title} />
    <Header />
    <Box pt={8}>{children}</Box>
    <Footer />
  </>
);

Layout.defaultProps = {
  title: process.env.APP_NAME,
};

export default Layout;
