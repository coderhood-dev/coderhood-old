import React from 'react';
import styled from '@emotion/styled';
import { Image, Box, Link, useColorMode, Button, Flex } from '@chakra-ui/core';
import DiscordInvite from '../components/DiscordInvite';
export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Image
        src="../waveup.svg"
        alt="wave up"
        w="100%"
        mb={['-0.8px', '-1px', '-1px', '-1px', '-1px']}
        transform="rotate(-180deg)"
        bg={colorMode === 'light' ? 'gray.300' : 'gray.800'}
        h="7rem"
      />
      <DiscordInvite />
      <Flex
        w="100%"
        px="3.1%"
        py="2.5%"
        bg="#f26840"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        as="footer"
      >
        <Button
          color={colorMode === 'light' ? 'gray.300' : 'gray.800'}
          onClick={toggleColorMode}
          variant="outlined"
        >
          Theme
        </Button>
        <Box
          d="flex"
          w={['50%', '36%', '22%']}
          justifyContent="space-between"
          mr="5"
        >
          <Link
            w="9%"
            href="https://www.youtube.com/channel/UCZiR1u5RtSYYt8qcenxr-Uw"
          >
            <Image src="youtube.svg" />
          </Link>
          <Link w="7%" href="https://twitter.com/coderhood_dev">
            <Image src="twitter.svg" />
          </Link>
          <Link w="7%" href="https://www.instagram.com/coderhood.dev/">
            <Image src="instagram.svg" />
          </Link>
          <Link w="7%" href="https://www.linkedin.com/company/coderhood/">
            <Image src="linkedin.svg" />
          </Link>
        </Box>
      </Flex>
    </>
  );
};
