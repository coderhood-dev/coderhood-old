import React from 'react';
import styled from 'styled-components';
import { GetStaticProps } from 'next';
import { Typography } from '@material-ui/core';
import { getRoadmaps, GetRoadmapsResponse } from '../src/api/roadmaps';
import { Layout, Flex, Card } from '../src/components';

interface Props {
  roadmaps: GetRoadmapsResponse;
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px 11%;
`;

const Home: React.FC<Props> = ({ roadmaps }) => {
  return (
    <Layout>
      <Container>
        <Flex width="50%">
          <Typography variant="h1" color="inherit" gutterBottom>
            Todos pueden programar, aprendamos juntos.
          </Typography>
          <Typography variant="subtitle1" color="inherit">
            {`${process.env.APP_NAME} es la plataforma open source que impulsa el aprendizaje colaborativo y continuo.`}
          </Typography>
        </Flex>
      </Container>
      <Flex alignItems="flex-end" pr={16}>
        <Typography variant="h4" color="inherit">
          Elige un camino
        </Typography>
      </Flex>
      <Flex row center p={8}>
        {roadmaps &&
          roadmaps.map((roadmap) => (
            <Card
              key={roadmap._id}
              title={roadmap.title}
              description={roadmap.description}
              href="/roadmaps/[name]"
              as={`/roadmaps/${roadmap.name}`}
            />
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
