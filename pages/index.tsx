import React from 'react';
import { GetStaticProps } from 'next';
import Typed from 'react-typed';
import {
  Flex,
  Image,
  SimpleGrid,
  Button,
  Link,
  useColorMode,
} from '@chakra-ui/core';
import { getRoadmaps, GetRoadmapsResponse } from '../api/roadmaps';
import { Text } from '../components';
import CardHowDoesItWork from '../components/CardHowDoesItWork';
import DiscordConnect from '../components/DiscordConnect';
import { useBreakpointValue } from '@chakra-ui/media-query';

interface Props {
  roadmaps: GetRoadmapsResponse;
}

const Home: React.FC<Props> = ({ roadmaps }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const HowDoesItWork = [
    {
      image: 'indexone.svg',
      title: 'Un lugar para aprender y enseñar.',
      description:
        'En Coderhood Academy es y siempre será un lugar donde no sólo podés estudiar programacion sino también compartir tu conocimiento con otras personas que sienten lo mismo que vos, un lugar donde vas a poder tanto estudiar como enseñar.',
      imageSide: 'left',
    },

    {
      image: 'indextwo.svg',
      title: 'Acompañamiento continuo.',
      description:
        'Desde la dirección y los profesores hasta nuestro CEO, todos nos encontramos a tu disposición día a día para brindarte la mejor calidad de servicio.',
      imageSide: 'right',
    },

    {
      image: 'indexthree.svg',
      title: 'Valores.',
      description:
        'Sabemos la importancia de acompañar tus estudios que te representen y los esgrimimos con orgullo: honestidad, transparencia, accesibilidad, buena voluntad, inclusión, proactividad y mejora continua. ¡Estudiar en Coderhood Academy es invertir en tu futuro con garantía certera de satisfacción y sin fecha de expiración!',
      imageSide: 'left',
    },
  ];

  return (
    <>
      <Flex w="100%" h="90vh" alignItems="center">
        <Flex w="100%" h="60vh" alignItems="center" justifyContent="center">
          <Flex direction="column" justifyContent="flex-start" width="80%">
            <Text
              color={colorMode === 'light' ? 'gray.800' : 'white'}
              fontFamily="Poppins"
              fontSize={['2rem', '2rem', '3.5rem', '3.2rem', '4.1rem']}
              width="50%"
              fontWeight="400"
            >
              Todos pueden programar.
            </Text>
            <Text
              color="#f26840"
              fontFamily="Poppins"
              fontWeight="600"
              fontSize={['2rem', '2rem', '3.5rem', '3.2rem', '4.1rem']}
            >
              Bienvenido a tu comunidad.
            </Text>
            <Text
              color={colorMode === 'light' ? 'gray.800' : 'white'}
              fontFamily="Public Sans"
              fontSize={['1rem', '1rem', '1.1rem', '1.1rem', '1.3rem']}
              mt={['0.3rem', '0.3rem', '0.5rem']}
              mb={['0.7rem', '10px', '1.5rem', '2rem']}
            >
              En coderhood impulzamos el aprendizaje autodidacta y colaborativo.
            </Text>
            <Link
              width={['4rem', '6rem', '7rem', '8rem']}
              href="https://discord.gg/xw2dbyv"
              _hover={{ color: 'white' }}
              target="_blank"
            >
              <Button
                _hover={{ bg: '#f26840' }}
                bg="#f26840"
                borderRadius="0.2rem"
                color="white"
                size="md"
                fontSize="0.9rem"
                width={['4rem', '6rem', '7rem', '8rem']}
              >
                Unite
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      {HowDoesItWork.map((how) => (
        <CardHowDoesItWork
          image={how.image}
          title={how.title}
          description={how.description}
          imageSide={how.imageSide}
        />
      ))}

      <Flex w="100%" h="100vh" alignItems="center">
        <Flex w="100%" h="60vh" alignItems="center" justifyContent="center">
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            width="80%"
          >
            <Image
              src="indexroadmap.svg"
              alt="learning with friends videocall"
              justifyContent="flex-end"
              w="25%"
            />
            <Text
              color={colorMode === 'light' ? 'gray.800' : 'white'}
              fontFamily="Poppins"
              fontWeight="700"
              fontSize={['1.2rem', '1.2rem', '2rem', '2.4rem', '2.8rem']}
              mb={['5px', '5px', '7px']}
            >
              Empeza a aprender hoy.
            </Text>
            <Text
              color={colorMode === 'light' ? 'gray.800' : 'white'}
              fontFamily="Public Sans"
              fontSize={['0.9rem', '0.9rem', '1rem', '1rem', '1.4rem']}
              mt={['5px', '5px', '7px']}
              mb={['10px', '10px', '20px', '30px']}
            >
              Elegi una de nuestras guias de aprendizaje y comenza a aprender
              nuevas tecnologias que potenciaran tu futuro.
            </Text>
            <SimpleGrid
              justifyContent="space-around"
              w="90%"
              mt={['1.3rem', '1.3rem', '1.4rem', '1.5rem']}
              columns={[1, 2, 2, 2]}
              spacing={['0.5rem', '2rem', '3rem', '4rem', '5rem']}
            >
              <Link href="/" _hover={{ color: 'white' }} target="_blank">
                <Flex
                  p="1.5rem"
                  flexDirection="column"
                  justifyContent="flex-start"
                  textAlign="start"
                  borderColor="#F26840"
                  borderWidth="0.08rem"
                  borderRadius="0.2rem"
                >
                  <Text
                    color={colorMode === 'light' ? 'gray.800' : 'white'}
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize={['1.2rem', '1.2rem', '2rem', '2.3rem', '2.6rem']}
                  >
                    Frontend
                  </Text>
                  <Text
                    color={colorMode === 'light' ? 'gray.800' : 'white'}
                    fontFamily="Public Sans"
                    fontSize={['0.9rem', '0.9rem', '1rem', '1rem', '1.4rem']}
                    mt={['0.3rem', '0.3rem', '0.4rem', '0.5rem']}
                  >
                    Guia paso a paso para convertirte en un desarrollador
                    frontend moderno.
                  </Text>
                </Flex>
              </Link>
              <Link href="/" _hover={{ color: 'white' }} target="_blank">
                <Flex
                  p="1.5rem"
                  flexDirection="column"
                  justifyContent="flex-start"
                  textAlign="start"
                  borderColor="#F26840"
                  borderWidth="0.08rem"
                  borderRadius="0.2rem"
                >
                  <Text
                    color={colorMode === 'light' ? 'gray.800' : 'white'}
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize={['1.2rem', '1.2rem', '2rem', '2.3rem', '2.6rem']}
                  >
                    Backend
                  </Text>
                  <Text
                    color={colorMode === 'light' ? 'gray.800' : 'white'}
                    fontFamily="Public Sans"
                    fontSize={['0.9rem', '0.9rem', '1rem', '1rem', '1.4rem']}
                    mt={['0.3rem', '0.3rem', '0.4rem', '0.5rem']}
                  >
                    Guia paso a paso para convertirte en un desarrollador
                    backend moderno.
                  </Text>
                </Flex>
              </Link>
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>

      <DiscordConnect />
    </>
  );
};

export default Home;
