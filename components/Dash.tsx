import React from 'react';
import { Box } from '@chakra-ui/core';

interface Props {
  direction?: 'vertical' | 'horizontal';
}

export const Dash: React.FC<Props> = ({ direction }) => (
  <Box
    w={direction === 'vertical' ? 1 : 4}
    h={direction === 'vertical' ? 4 : 1}
    m={1}
    bg="black"
  />
);

Dash.defaultProps = {
  direction: 'vertical',
};
