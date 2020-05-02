import React from 'react';
import fetch from 'isomorphic-unfetch';
import { Typography } from '@material-ui/core';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout, Flex } from '../../src/components';

const Roadmap = ({ roadmap }) => {
  return (
    <Layout>
      <Flex>
        <Typography variant="h1" color="inherit" gutterBottom={true}>
          {roadmap.title}
        </Typography>
      </Flex>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const url = `${process.env.BASE_URL}/roadmaps`;
  const res = await fetch(url);
  const { data: roadmaps } = await res.json();

  // Get the paths we want to pre-render based on roadmaps
  const paths = roadmaps.map((roadmap) => `/roadmap/${roadmap.name}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params: roadmap }) => {
  const url = `${process.env.BASE_URL}/roadmaps/${roadmap.name}`;
  const res = await fetch(url);
  const { data } = await res.json();

  return {
    props: { roadmap: data },
  };
};

export default Roadmap;
