import React from 'react';
import useSWR from 'swr';
import Layout from '../src/components/Layout';
import Card from '../src/components/Card';
import fetcher from '../src/utils/fetcher';

const Home = () => {
  const { data } = useSWR('/subjects', fetcher);

  return <Layout>{data ? data.data.map(item => <Card data={item} />) : <p>Loading...</p>}</Layout>;
};

export default Home;
