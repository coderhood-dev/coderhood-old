import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getRoadmaps,
  getRoadmap,
  GetRoadmapResponse,
  Subject,
} from '../../api/roadmaps';
import { Layout, Card, Text } from '../../components';

import { Box, Avatar, Collapse, Flex } from '@chakra-ui/core';

interface Props {
  roadmap: GetRoadmapResponse;
}

const Roadmap: React.FC<Props> = ({ roadmap }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Layout>
      <Text fontSize="6xl" color="inherit">
        {roadmap.title}
      </Text>
      <Text color="inherit">{roadmap.description}</Text>
      <Flex direction="column" py={16} px={12}>
        {roadmap.subjects.map((subject: Subject) => (
          <Card key={subject._id} my={2}>
            <Box>
              <Avatar size="md" src={subject.image_url} />
              {subject.title}
            </Box>
            <Box>
              <Text color="gray.800">{subject.description}</Text>
            </Box>
            <Collapse mt={4} isOpen={expanded}>
              <Box p="6">
                <Text>Method:</Text>
                <Text>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Text>
                <Text>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Text>
              </Box>
            </Collapse>
          </Card>
        ))}
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
