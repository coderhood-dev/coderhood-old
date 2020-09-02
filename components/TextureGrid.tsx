import React from 'react';
import { Flex, Image, BoxProps } from '@chakra-ui/core';

interface Props {
  src: string;
  unitSize: number;
  x: number;
  y: number;
}

export const TextureGrid: React.FC<Props & BoxProps> = ({
  src,
  unitSize,
  x,
  y,
  ...rest
}) => {
  const images = new Array(x * y).fill(src);
  return (
    <Flex flexWrap="wrap" width={x * unitSize} {...rest}>
      {images.map((source, i) => (
        // TODO: use only one import, maybe using url-loader and one require
        <Image key={i} src={source} boxSize={unitSize} />
      ))}
    </Flex>
  );
};
