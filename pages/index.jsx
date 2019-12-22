import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Layout from '@components/Layout';
import Hero from '@components/Landing/Hero';
import Roadmaps from '@components/Roadmaps';
import darkTheme from '@theme/darkTheme';

const Home = () => (
  <Layout>
    <Hero />
    <ThemeProvider theme={darkTheme}>
      <Roadmaps />
    </ThemeProvider>
  </Layout>
);

export default Home;
