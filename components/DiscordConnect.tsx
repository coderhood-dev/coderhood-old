import React from 'react';
import { Flex, Image, SimpleGrid, Button, Link } from '@chakra-ui/core';
import { Text } from '../components';

const DiscordConnect = () => (
  <Flex w="100%" h="80vh" alignItems="center">
    <Flex
      w="100%"
      h="45vh"
      alignItems="center"
      justifyContent="center"
      bg="#f26840"
    >
      <Flex direction="column" justifyContent="flex-start" width="70%">
        <Text
          color="black"
          fontFamily="DM Sans"
          fontSize={['3rem', '3rem', '3rem', '3rem', '2.3rem', '3.4rem']}
          mb={['5px', '5px', '7px']}
        >
          Unete a la comunidad.
        </Text>
        <Text
          color="black"
          fontSize={[
            '0.8rem',
            '0.8rem',
            '0.8rem',
            '0.8rem',
            '0.9rem',
            '1.4rem',
          ]}
          mt={['5px', '5px', '7px']}
          mb={['10px', '10px', '20px', '30px']}
        >
          Coderhood Academy utiliza Discord como plataforma donde se organizan
          en canales ordenados temas donde puedes colaborar, compartir o
          simplemente hablar de tu dia sin monopolizar un chat de grupó. Unete
          hoy mismo y se parte de todos los beneficios que solo Coderhood puede
          dar.
        </Text>
        <Link
          width={['60px', '80px', '100px', '120px']}
          href="https://discord.gg/xw2dbyv"
        >
          <Button
            bg="black"
            _hover={{ bg: 'black', color: '#E2E8F0' }}
            color="white"
            variant="solid"
            size="sm"
            width={['100px', '100px', '100px', '120px']}
          >
            <Flex justifyContent="space-around">
              Sumate
              <Image
                src="discord.svg"
                alt="learning with friends videocall"
                w="18%"
              />
            </Flex>
          </Button>
        </Link>
      </Flex>
    </Flex>
  </Flex>
);

export default DiscordConnect;
