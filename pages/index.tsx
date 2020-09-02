import React from 'react';
import { GetStaticProps } from 'next';
import Typed from 'react-typed';
import Link from 'next/link';
import { Heading, Flex, Avatar, Image } from '@chakra-ui/core';
import { motion } from 'framer-motion';

import { getRoadmaps, GetRoadmapsResponse } from '../api/roadmaps';
import { Layout, Card, Text, TextureGrid, Dash } from '../components';
import { Button } from '../coderhood-ui';
import { Colors } from '../theme/colors';

interface Props {
  roadmaps: GetRoadmapsResponse;
}

const Home: React.FC<Props> = ({ roadmaps }) => {
  return (
    <>
      <Flex w="100%" h="100vh" pl="7rem" alignItems="center">
        <TextureGrid
          src="/textures/hideout.svg"
          unitSize={30}
          x={3}
          y={25}
          position="absolute"
          top={80}
          left={0}
          opacity={0.3}
        />
        <Flex direction="column" width="40%">
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
              fontSize: '2.5rem',
            }}
          />
          <Text paddingTop="1rem">
            {`${process.env.NEXT_PUBLIC_APP_NAME} es la comunidad que impulsa el aprendizaje autodidacta y colaborativo.`}
          </Text>
        </Flex>
        <Image
          src="hero.svg"
          alt="learning with friends videocall"
          objectPosition="70% 70%"
          flaot="right"
          width="100%"
        />
      </Flex>

      {/* dash container */}
      <Flex position="relative" direction="column" w="full">
        <Flex direction="column" alignSelf="center">
          <Dash />
          <Dash />
          <Dash />
          <Dash />
          <Dash />
          <Dash />
        </Flex>
        <Flex
          direction="row-reverse"
          alignItems="center"
          position="relative"
          bottom={-4}
          right="50vw"
        >
          <Dash direction="horizontal" />
          <Dash direction="horizontal" />
          <Dash direction="horizontal" />
          <Dash direction="horizontal" />
          <Dash direction="horizontal" />
          <Text px={4}>Elegi tu especializacion</Text>
          <Dash direction="horizontal" />
          <Dash direction="horizontal" />
          <Dash direction="horizontal" />
        </Flex>
        <Flex
          direction="column"
          alignSelf="flex-start"
          position="absolute"
          bottom={0}
        >
          <Dash />
          <Dash />
          <Dash />
          <Dash />
          <Dash />
          <Dash />
        </Flex>
      </Flex>

      {/* roadmaps */}
      <Flex direction="row" py={8} px={64} position="relative" right={2}>
        {roadmaps &&
          roadmaps.map((roadmap) => (
            <Card key={roadmap._id} m={4}>
              <Link href="/roadmaps/[name]" as={`/roadmaps/${roadmap.name}`}>
                <Flex direction="column">
                  <Heading as="h3">{roadmap.title}</Heading>
                  <Text>{roadmap.description}</Text>
                </Flex>
              </Link>
            </Card>
          ))}
      </Flex>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const roadmaps = await getRoadmaps();
  return {
    props: { roadmaps },
  };
};

export default Home;
