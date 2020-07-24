import React from 'react';
import styled from '@emotion/styled';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { CardContent } from '@material-ui/core';
import { Heading, Text, Flex, Avatar } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import { getRoadmaps, GetRoadmapsResponse } from '../src/api/roadmaps';
import { Layout, Card } from '../src/components';
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
        <Flex direction="row" width="100%">
          <Flex direction="column" flex={1}>
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
          <Flex direction="column" flex={1}>
            <motion.div
              animate={{ y: 15 }}
              transition={{
                flip: Infinity,
                ease: 'easeInOut',
                duration: 1,
              }}
              whileHover={{
                scale: 1.02,
              }}
            >
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </motion.div>
          </Flex>
        </Flex>
      </Hero>
      <Flex direction="row" p={8}>
        {roadmaps &&
          roadmaps.map((roadmap) => (
            <Card key={roadmap._id} styles={{ margin: 20 }}>
              <Link href="/roadmaps/[name]" as={`/roadmaps/${roadmap.name}`}>
                <CardContent>
                  <Heading as="h3">{roadmap.title}</Heading>
                  <Text>{roadmap.description}</Text>
                </CardContent>
              </Link>
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
