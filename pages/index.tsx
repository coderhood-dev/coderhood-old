import React from 'react';
import { GetStaticProps } from 'next';
import Typed from 'react-typed';
import { Flex, Image, SimpleGrid, Button, Link } from '@chakra-ui/core';
import { getRoadmaps, GetRoadmapsResponse } from '../api/roadmaps';
import { Text } from '../components';
import CardComoFunciona from '../components/CardComoFunciona';
import DiscordConnect from '../components/DiscordConnect';
import { useBreakpointValue } from '@chakra-ui/media-query';

interface Props {
  roadmaps: GetRoadmapsResponse;
}

const Home: React.FC<Props> = ({ roadmaps }) => {
  const titleFontSize = useBreakpointValue({
    xs: '2.5rem',
    sm: '2.5rem',
    md: '2.5rem',
  });

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
      title: 'Acompañamiento continuo..',
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
      <Flex w="100%" h="100vh" alignItems="center">
        <Flex w="100%" h="60vh" alignItems="center" justifyContent="center">
          <Flex direction="column" justifyContent="flex-start" width="80%">
            <Text
              color="white"
              fontFamily="DM Sans"
              fontSize={['2rem', '2rem', '2rem', '3.5rem', '3.5rem', '5.3rem']}
              mb={['5px', '5px', '7px']}
              width="50%"
            >
              Todos pueden programar.
            </Text>
            <Text
              color="#f26840"
              fontFamily="DM Sans"
              fontSize={['2rem', '2rem', '2rem', '3.5rem', '3.5rem', '5.3rem']}
              mb={['5px', '5px', '7px']}
            >
              Bienvenido a tu comunidad.
            </Text>
            <Text
              color="white"
              fontSize={['1rem', '1rem', '1rem', '1.5rem', '1.1rem', '1.7rem']}
              mt={['5px', '5px', '7px']}
              mb={['10px', '10px', '20px', '30px']}
            >
              En coderhood impulzamos el aprendizaje autodidacta y colaborativo.
            </Text>
            <Link
              width={['60px', '80px', '100px', '120px']}
              href="https://discord.gg/xw2dbyv"
            >
              <Button
                bg="#f26840"
                _hover={{ bg: '#f26840', color: '#E2E8F0' }}
                color="white"
                variant="solid"
                borderRadius="4px"
                size="sm"
                width={['100px', '100px', '100px', '120px']}
              >
                Sumate
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      {HowDoesItWork.map((how) => (
        <CardComoFunciona
          image={how.image}
          title={how.title}
          description={how.description}
          imageSide={how.imageSide}
        />
      ))}

      <DiscordConnect />
    </>
  );
};

export default Home;
