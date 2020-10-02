import React, { useState } from 'react';
import styled from '@emotion/styled';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getRoadmaps,
  getRoadmap,
  GetRoadmapResponse,
  Subject,
} from '../../api/roadmaps';
import { Layout, Card, Text } from '../../components';
import CardTech from '../../components/CardTech';
import {
  Link,
  Flex,
  Image,
  Button,
  useColorMode,
  Center,
} from '@chakra-ui/core';
interface Props {
  roadmap: GetRoadmapResponse;
}

const Roadmap: React.FC<Props> = ({ roadmap }) => {
  const [expanded, setExpanded] = useState(false);
  const [show, setShow] = React.useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex h="90vh" flexDirection="column" w="100%">
        <Center h="80vh" color="black" w="100%">
          <Text
            color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
            fontFamily="Poppins"
            fontSize={['2rem', '2rem', '3.5rem', '3.2rem', '4.1rem']}
            fontWeight="400"
            w="70%"
            textAlign="center"
          >
            Tu camino como{' '}
            <span style={{ color: '#f26840' }}>{roadmap.title}</span> empiezá
            acá.
          </Text>
        </Center>
        <Center
          h={['20vh', '26vh', '28vh', '28vh', '28vh']}
          w="100%"
          display="flex"
          flexDirection="column"
        >
          <Link
            href="#roadmap"
            w="2rem"
            h={['20vh', '26vh', '26vh', '26vh', '26vh']}
          >
            <Image
              w="2rem"
              src="../arrow.svg"
              alt="arrow down"
              style={{
                transform: 'rotate(180deg)',
              }}
            />
          </Link>
          <Image
            src="../waves.svg"
            alt="wave up"
            w="100%"
            mb={['-0.8px', '-1px', '-1px', '-1px', '-1px']}
            style={{
              transform: 'rotate(-180deg)',
            }}
            h={['8vh', '26vh', '26vh', '26vh', '26vh']}
          />
        </Center>
      </Flex>
      <Center
        w="100%"
        h={['30vh', '30vh', '30vh', '40vh', '40vh']}
        bg="#f26840"
        color="white"
      >
        <Text
          textAlign="center"
          color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
          fontSize={['1rem', '1rem', '1.2rem', '1.4rem', '1.6rem']}
          fontWeight="400"
          w="80%"
        >
          {roadmap.description}
        </Text>
      </Center>
      <Center
        id="roadmap"
        display="flex"
        flexDirection="column"
        w="100%"
        backgroundImage="url('../line.svg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize={['130vh', '180vh', '180vh', '180vh', '180vh']}
      >
        <Flex
          h={['8vh', '17vh', '24vh', '25vh', '25vh']}
          w="100%"
          flexDirection="column"
          mt={-1}
        >
          <Image
            src="../wave_abajo_rotar.svg"
            alt="wave down"
            w="100%"
            h="25vh"
            style={{
              transform: 'rotate(180deg)',
            }}
          />
        </Flex>

        {roadmap.subjects.map((subject: Subject) => (
          <CardTech
            image={subject.image_url}
            title={subject.title}
            description={subject.description}
          />
        ))}
      </Center>
      <Center h="70vh" w="100%">
        <Center
          h="25vh"
          w={['80%', '80%', '100%', '100%', '100%']}
          flexDirection="column"
          justifyContent="space-around"
        >
          <Text
            color="#f26840"
            fontFamily="Poppins"
            fontWeight="700"
            fontSize={['1.2rem', '1.2rem', '2rem', '2.4rem', '2.8rem']}
            mb="1rem"
            textAlign="center"
          >
            Estas trabado con algo o necesitas ayuda?
          </Text>
          <Text
            color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
            fontFamily="Poppins"
            fontWeight="700"
            textAlign="center"
            fontSize={['0.9rem', '0.9rem', '1rem', '1rem', '1.4rem']}
            mb="1rem"
          >
            Sacate las dudas que tengas en nuestra comunidad en discord
          </Text>
          <Link
            href="https://discord.gg/xw2dbyv"
            width={['4rem', '6rem', '7rem', '8rem']}
            _hover={{ color: 'gray.300' }}
            target="_blank"
          >
            <Button
              _hover={{ bg: '#f26840' }}
              bg="#f26840"
              borderRadius="0.2rem"
              color="gray.300"
              size="md"
              fontSize="0.9rem"
              width={['4rem', '6rem', '7rem', '8rem']}
            >
              Unite
            </Button>
          </Link>
        </Center>
      </Center>
    </>
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
