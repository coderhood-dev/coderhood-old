import React from 'react';
import Link from 'next/link';
import { Box, Flex, Image, useColorMode } from '@chakra-ui/core';
import { rgba } from 'polished';

import { Colors } from '../theme/colors';
import { useAuth } from '../hooks';

const HeaderButton = ({
  children,
  href,
}: {
  children: string;
  href?: string;
}) => (
  <Box
    as="a"
    href={href}
    fontFamily="robotoMono"
    fontSize={13}
    fontWeight="600"
    borderRadius={4}
    px={4}
    py={2}
    mx={1}
    _hover={{ backgroundColor: rgba(Colors.primary, 0.1) }}
  >
    {children}
  </Box>
);

export const Header = () => {
  const { user, doSignOut } = useAuth();
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="header"
      align="stretch"
      justify="space-between"
      px="2rem"
      py="1.25rem"
      width="full"
      height="4.5rem"
      bg={colorMode === 'light' ? 'gray.300' : 'gray.800'}
    >
      <Link href="/">
        <Image
          src="branding/logo.svg"
          alignSelf="flex-start"
          height="100%"
          cursor="pointer"
        />
      </Link>
    </Flex>
  );
};
