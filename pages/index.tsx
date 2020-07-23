import React from 'react';
import styled from '@emotion/styled';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Typography, CardActionArea, CardContent } from '@material-ui/core';
import { Heading, Text } from '@chakra-ui/core';
import { getRoadmaps, GetRoadmapsResponse } from '../src/api/roadmaps';
import { Layout, Flex, Card } from '../src/components';
import { useAuth } from '../src/hooks';

interface Props {
  roadmaps: GetRoadmapsResponse;
}

const Hero = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px 11%;
  background-color: orange;
`;

const Home: React.FC<Props> = ({ roadmaps }) => {
  const { user } = useAuth();
  return (
    <Layout>
      <Hero>
        <Flex direction="column" width="50%">
          <Heading size="2xl" fontFamily="Lato">
            Todos pueden programar, aprendamos juntos.
          </Heading>
          <Text>
            {`${process.env.NEXT_PUBLIC_APP_NAME} es la plataforma open source que impulsa el aprendizaje colaborativo y continuo.`}
          </Text>
          <Heading size="md" fontFamily="Lato">
            {user && user.email}
          </Heading>
        </Flex>
      </Hero>
      <Flex direction="column" alignItems="flex-end" pr={16}>
        <Typography variant="h4" color="inherit">
          Elige un camino
        </Typography>
      </Flex>
      <Flex direction="row" center p={8}>
        {roadmaps &&
          roadmaps.map((roadmap) => (
            <Card key={roadmap._id}>
              <CardActionArea>
                <Link href="/roadmaps/[name]" as={`/roadmaps/${roadmap.name}`}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {roadmap.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {roadmap.description}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          ))}
      </Flex>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const roadmaps = await getRoadmaps();
  return {
    props: { roadmaps },
  };
};

export default Home;
