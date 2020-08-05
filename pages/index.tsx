import React from 'react';
import { GetStaticProps } from 'next';
import Typed from 'react-typed';
import Link from 'next/link';
import { Heading, Flex, Avatar, Box } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import { getRoadmaps, GetRoadmapsResponse } from '../api/roadmaps';
import { Layout, Card, Text, TextureGrid } from '../components';

interface Props {
  roadmaps: GetRoadmapsResponse;
}

const Home: React.FC<Props> = ({ roadmaps }) => {
  return (
    <Layout>
      <Flex w="100%" h="100vh" px="8rem" py="11%" alignItems="center">
        <TextureGrid
          src="/images/hideout.svg"
          unitSize={30}
          x={3}
          y={25}
          position="absolute"
          top={80}
          left={0}
          opacity={0.3}
        />
        <Flex direction="column" flex={1}>
          <Typed
            strings={[
              'Todos pueden programar, aprendamos juntos.',
              `Todos pueden programar.\nBienvenido a tu comunidad.`,
            ]}
            typeSpeed={80}
            backSpeed={50}
            showCursor
            style={{
              fontFamily: 'DM Sans',
              fontWeight: 'bold',
              fontSize: '3rem',
            }}
          />
          <Text paddingTop="1rem">
            {`${process.env.NEXT_PUBLIC_APP_NAME} es la comunidad que impulsa el aprendizaje autodidacta y colaborativo.`}
          </Text>
        </Flex>
        <Flex direction="column" flex={1.2}>
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
      <Flex direction="row" p={8}>
        {roadmaps &&
          roadmaps.map((roadmap) => (
            <Card key={roadmap._id} styles={{ margin: 20 }}>
              <Link href="/roadmaps/[name]" as={`/roadmaps/${roadmap.name}`}>
                <Flex direction="column">
                  <Heading as="h3">{roadmap.title}</Heading>
                  <Text>{roadmap.description}</Text>
                </Flex>
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
