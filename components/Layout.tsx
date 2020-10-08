import React, { PropsWithChildren } from 'react';
import { Flex, useColorMode } from '@chakra-ui/core';

import Head from './Head';
import { Header, Footer } from './';

interface Props {
  title?: string;
}

export const Layout: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex direction="column" minHeight="100vh">
      <Head title={title} />
      <Header />
      <Flex
        bg={colorMode === 'light' ? 'gray.300' : 'gray.800'}
        direction="column"
        flex={1}
        alignItems="center"
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

Layout.defaultProps = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
};
