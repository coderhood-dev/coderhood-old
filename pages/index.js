import React from 'react';
import Typography from '@material-ui/core/Typography';
import Head from '../components/head';
import Header from '../components/Header';

const Home = () => (
  <div>
    <Head title="Code Garage" />
    <Header />
    <Typography variant="h6" color="inherit">
      Holis dev
    </Typography>
  </div>
);

export default Home;
