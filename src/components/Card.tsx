import React, { PropsWithChildren } from 'react';
import { Flex } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

interface Props {
  styles?: any;
}

const AnimatedContainer = styled(motion.div)`
  outline-width: 2px;
  outline-style: solid;
  outline-color: black;
`;

const CardComponent: React.FC<PropsWithChildren<Props>> = ({
  styles,
  children,
}) => {
  const variants = {
    hover: {
      boxShadow: '10px 10px 0px 0px rgba(0,0,0,1)',
      translateY: -10,
      translateX: -10,
    },
    tap: {
      scale: 0.98,
      boxShadow: '10px 10px 0px 0px rgba(0,0,0,1)',
      translateY: -10,
      translateX: -10,
    },
  };
  return (
    <AnimatedContainer
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      style={styles}
    >
      <Flex bg="green.300">{children}</Flex>
    </AnimatedContainer>
  );
};

export default CardComponent;
