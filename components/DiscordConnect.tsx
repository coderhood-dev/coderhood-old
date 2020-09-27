import React from 'react';
import { Flex, Image, SimpleGrid, Button, Link } from '@chakra-ui/core';
import { Text } from '../components';

const DiscordConnect = () => (
  <>
    <Flex
      w="100%"
      h="50vh"
      alignItems="center"
      justifyContent="center"
      bg="#f26840"
      mt="10vh"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        width="60%"
      >
        <Text
          color="gray.800"
          fontFamily="Poppins"
          fontWeight="700"
          fontSize={['1.2rem', '1.2rem', '2rem', '2.4rem', '2.8rem']}
          mb={['5px', '5px', '7px']}
        >
          Unite a la comunidad.
        </Text>
        <Text
          color="gray.800"
          fontFamily="Public Sans"
          fontSize={['0.9rem', '0.9rem', '1rem', '1rem', '1.4rem']}
          mt={['5px', '5px', '7px']}
          mb={['10px', '10px', '20px', '30px']}
        >
          Coderhood Academy utiliza Discord como plataforma donde se organizan
          en canales ordenados temas donde podes colaborar, compartir o
          participar de las clases.
        </Text>
        <Link
          width={['110px', '110px', '110px', '130px']}
          href="https://discord.gg/xw2dbyv"
          target="_blank"
          _hover={{ color: 'gray.300' }}
        >
          <Button
            bg="gray.800"
            _hover={{ bg: 'gray.800', color: '#E2E8F0' }}
            color="gray.300"
            variant="solid"
            size="md"
            fontSize="0.9rem"
            width={['110px', '110px', '110px', '130px']}
          >
            Sumate
          </Button>
        </Link>
      </Flex>
    </Flex>
  </>
);

export default DiscordConnect;
