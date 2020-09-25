import React from 'react';
import styled from '@emotion/styled';
import { Image, Box, Link, useColorMode, Button, Flex } from '@chakra-ui/core';

export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      px="2.5%"
      py="3.1%"
      bg={colorMode === 'light' ? '#FAFAFA' : '#222222'}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Button
        color={colorMode === 'light' ? 'black' : 'white'}
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
  );
};
