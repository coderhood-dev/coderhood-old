import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { Box, BoxProps } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { Colors } from '../theme';

const AnimatedContainer = styled(motion.div)`
  border-width: 2px;
  border-style: solid;
  border-color: ${Colors.primary};
  border-radius: 4px;
  padding: 2rem;
  background-color: white;
  position: relative;
  top: -0.25rem;
  left: 0.25rem;
`;

const CardComponent: React.FC<PropsWithChildren<BoxProps>> = ({
  children,
  ...props
}) => {
  const variants = {
    hover: {
      translateY: -8,
      translateX: 8,
    },
    tap: {
      translateY: -8,
      translateX: 8,
    },
  };
  return (
    <Box position="relative" cursor="pointer" {...props}>
      <AnimatedContainer whileHover="hover" whileTap="tap" variants={variants}>
        {children}
      </AnimatedContainer>
      <Box
        w="full"
        h="full"
        position="absolute"
        top={0}
        zIndex="hide"
        borderRadius={4}
        borderWidth={2}
        borderColor={Colors.primary}
        bg={Colors.accent}
      />
    </Box>
  );
};

export default CardComponent;
