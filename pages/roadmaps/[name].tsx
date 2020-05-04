import React from 'react';
import { Typography } from '@material-ui/core';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getRoadmaps,
  getRoadmap,
  GetRoadmapResponse,
} from '../../src/api/roadmaps';
import { Layout, Flex } from '../../src/components';

interface Props {
  roadmap: GetRoadmapResponse;
}

const Roadmap: React.FC<Props> = ({ roadmap }) => {
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
  const roadmaps = await getRoadmaps();

  // Get the paths we want to pre-render based on roadmaps
  const paths = roadmaps.map((roadmap) => `/roadmaps/${roadmap.name}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const roadmap = await getRoadmap(params.name);
  return {
    props: { roadmap },
  };
};

export default Roadmap;
