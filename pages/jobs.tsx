import React from 'react';
import { Layout, Text, CardJob } from '../components';

const Jobs = ({ posts }) => (
  <Layout>
    <Text fontSize="2xl" color="inherit">
      Trabajos de Programación
    </Text>
    {[1, 2, 3, 4].map((index) => (
      <CardJob />
    ))}
  </Layout>
);

export default Jobs;
