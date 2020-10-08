import React from 'react';
import styled from '@emotion/styled';
import {
  Flex,
  Image,
  SimpleGrid,
  Button,
  Link,
  useColorMode,
} from '@chakra-ui/core';
import { GetRoadmapsResponse } from '../api/roadmaps';
import { Text } from '../components';
import CardHowDoesItWork from '../components/CardHowDoesItWork';

interface Props {
  roadmaps: GetRoadmapsResponse;
}

const CardRoadmap = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  border-color: #f26840;
  border-width: 0.08rem;
  border-radius: 0.2rem;
`;

const Home: React.FC<Props> = ({ roadmaps }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const HowDoesItWork = [
    {
      image: 'learn.svg',
      title: 'Un lugar para aprender y enseñar.',
      description:
        'En Coderhood Academy es y siempre será un lugar donde no sólo podés estudiar programacion sino también compartir tu conocimiento con otras personas que sienten lo mismo que vos, un lugar donde vas a poder tanto estudiar como enseñar.',
      imageSide: 'left',
    },

    {
      image: 'study.svg',
      title: 'Acompañamiento continuo.',
      description:
        'Desde la dirección y los profesores hasta nuestro CEO, todos nos encontramos a tu disposición día a día para brindarte la mejor calidad de servicio.',
      imageSide: 'right',
    },

    {
      image: 'game.svg',
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
              color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
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
              color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
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

      <Flex w="100%" h="100vh" alignItems="center" mb="5rem">
        <Flex w="100%" h="60vh" alignItems="center" justifyContent="center">
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            width="80%"
          >
            <Image
              src="rocket.svg"
              alt="rocket image"
              justifyContent="flex-end"
              w={['14rem', '20rem', '30rem', '30rem', '30rem']}
              mb={['-3.2rem', '-7rem', '-7rem', '-7rem', '-7rem']}
            />
            <Text
              color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
              fontFamily="Poppins"
              fontWeight="700"
              fontSize={['1.2rem', '1.2rem', '2rem', '2.4rem', '2.8rem']}
              mb={['5px', '5px', '7px', '7px', '7px']}
            >
              Empeza a aprender hoy.
            </Text>
            <Text
              color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
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
              columns={[1, 2, 2, 2, 2]}
              spacing={['0.5rem', '2rem', '3rem', '4rem', '5rem']}
            >
              <Link href="/" _hover={{ color: 'gray.300' }} target="_blank">
                <CardRoadmap>
                  <Text
                    color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
                    fontFamily="Poppins"
                    fontWeight="500"
                    fontSize={['1.2rem', '1.2rem', '2rem', '2.3rem', '2.6rem']}
                  >
                    Frontend
                  </Text>
                  <Text
                    color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
                    fontFamily="Public Sans"
                    fontSize={['0.9rem', '0.9rem', '1rem', '1rem', '1.4rem']}
                    mt={['0.3rem', '0.3rem', '0.4rem', '0.5rem']}
                  >
                    Guia paso a paso para convertirte en un desarrollador
                    frontend moderno.
                  </Text>
                </CardRoadmap>
              </Link>
              <Link href="/" _hover={{ color: 'gray.300' }} target="_blank">
                <CardRoadmap>
                  <Text
                    color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
                    fontFamily="Poppins"
                    fontWeight="500"
                    fontSize={['1.2rem', '1.2rem', '2rem', '2.3rem', '2.6rem']}
                  >
                    Backend
                  </Text>
                  <Text
                    color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
                    fontFamily="Public Sans"
                    fontSize={['0.9rem', '0.9rem', '1rem', '1rem', '1.4rem']}
                    mt={['0.3rem', '0.3rem', '0.4rem', '0.5rem']}
                  >
                    Guia paso a paso para convertirte en un desarrollador
                    backend moderno.
                  </Text>
                </CardRoadmap>
              </Link>
            </SimpleGrid>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
