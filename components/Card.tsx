import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/core';
import styled from '@emotion/styled';

import { Colors } from '../theme';

interface Props {
  styles?: any;
}

const AnimatedContainer = styled(motion.div)`
  border-width: 2px;
  border-style: solid;
  border-color: ${Colors.primary};
  border-radius: 4px;
  padding: 2rem;
  background-color: white;
  position: relative;
  top: -5px;
  left: 5px;
`;

const CardComponent: React.FC<PropsWithChildren<Props>> = ({
  styles,
  children,
}) => {
  const variants = {
    hover: {
      translateY: -10,
      translateX: 10,
    },
    tap: {
      translateY: -5,
      translateX: 5,
    },
  };
  return (
    <Box position="relative" style={styles} cursor="pointer">
      <AnimatedContainer whileHover="hover" whileTap="tap" variants={variants}>
        {children}
      </AnimatedContainer>
      <Box
        w="100%"
        h="100%"
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
