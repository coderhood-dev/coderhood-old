import React, { PropsWithChildren } from 'react';
import { Text as ChakraText, TextProps } from '@chakra-ui/core';

export const Text: React.FC<PropsWithChildren<TextProps>> = ({
  children,
  ...props
}) => (
  <ChakraText fontFamily="Roboto Mono" fontWeight="400" {...props}>
    {children}
  </ChakraText>
);
