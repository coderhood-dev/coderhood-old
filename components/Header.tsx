import React from 'react';
import Link from 'next/link';
import { Heading, Flex, Button } from '@chakra-ui/core';
import { useAuth } from '../hooks';

const Header = () => {
  const { user, doSignOut } = useAuth();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      px="2rem"
      py="1rem"
      position="absolute"
      width="100%"
    >
      <Flex align="center" mr={5}>
        <Link href="/">
          <Heading as="h1" size="lg">
            {process.env.NEXT_PUBLIC_APP_NAME}
          </Heading>
        </Link>
      </Flex>

      <Flex align="center" justify="flex-end" flexGrow={1}>
        <Link href="/jobs">
          <Button variant="ghost">Trabajos</Button>
        </Link>
        <Link href="/blog">
          <Button variant="ghost">Blog</Button>
        </Link>
        {!user ? (
          <>
            <Link href="/signin">
              <Button variant="ghost">Iniciar sesión</Button>
            </Link>
            <Link href="/signup">
              <Button variant="ghost">Registrate</Button>
            </Link>
          </>
        ) : (
          <Button variant="ghost" onClick={doSignOut}>
            Salir
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
