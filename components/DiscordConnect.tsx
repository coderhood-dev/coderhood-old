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
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        width="60%"
      >
        <Text
          color="black"
          fontFamily="Poppins"
          fontWeight="700"
          fontSize={['3rem', '3rem', '3rem', '3rem', '2.3rem', '3.4rem']}
          mb={['5px', '5px', '7px']}
        >
          Unete a la comunidad.
        </Text>
        <Text
          color="black"
          fontFamily="Public Sans"
          fontSize={[
            '0.8rem',
            '0.8rem',
            '0.8rem',
            '0.8rem',
            '1.1rem',
            '1.6rem',
          ]}
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
        >
          <Button
            bg="black"
            _hover={{ bg: 'black', color: '#E2E8F0' }}
            color="white"
            variant="solid"
            size="md"
            fontSize="0.9rem"
            width={['110px', '110px', '110px', '130px']}
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
  </>
);

export default DiscordConnect;
