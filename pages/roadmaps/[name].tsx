import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import styled from '@emotion/styled';
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

const BoxCard = styled(Card)`
  max-width: 640;
  margin-bottom: 8;
`;

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
      <Box>
        <Flex direction="column" paddingY={4}>
          {roadmap.subjects.map((subject: Subject) => {
            return (
              <BoxCard key={subject._id}>
                <Box>
                  <Avatar size="md" src={subject.image_url} />
                  {subject.title}
                </Box>
                <Box>
                  <Text color="gray.800">{subject.description}</Text>
                  <Flex direction="row" pt={4}>
                    {/* <AvatarGroup max={4}>
                      {[
                        { id: 0, name: 'A', color: colors.amber[500] },
                        { id: 1, name: 'E', color: colors.indigo[500] },
                        { id: 2, name: 'L', color: colors.pink[500] },
                      ].map((person, i) => (
                        <Avatar
                          key={person.id}
                        // style={{
                        //   position: 'relative',
                        //   left: -theme.spacing(i),
                        //   color: theme.palette.getContrastText(person.color),
                        //   backgroundColor: person.color,
                        // }}
                        >
                          {person.name}
                        </Avatar>
                      ))}
                    </AvatarGroup> */}
                  </Flex>
                </Box>
                <Box>
                  {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton> */}
                  {/* 
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton> */}
                </Box>
                <Collapse mt={4} isOpen={expanded}>
                  <Box p="6">
                    <Text>Method:</Text>
                    <Text>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Text>
                    <Text>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Text>
                  </Box>
                </Collapse>
              </BoxCard>
            );
          })}
        </Flex>
      </Box>
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
