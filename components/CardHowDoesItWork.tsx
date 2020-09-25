import React from 'react';
import { Flex, Image, SimpleGrid, useColorMode } from '@chakra-ui/core';
import { Text } from '.';

const CardHowDoesItWork = ({ image, title, description, imageSide }) => {
  //cards
  const w = ['100%', '45%', '45%', '45%', '45%'];
  const h = ['30vh', '50vh', '50vh', '50vh', '50vh'];

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex w="80%" h={['75vh', '50vh', '50vh', '70vh', '70vh']} as="section">
      <SimpleGrid
        columns={[1, 2, 2, 2]}
        display={imageSide === 'left' ? 'grid' : 'flex'}
        flexDirection="row-reverse"
        justifyContent="space-between"
        flexWrap="wrap"
        spacing={['0.5rem', '2rem', '3rem', '4rem', '5rem']}
      >
        <Flex w={imageSide === 'left' ? '100%' : w}>
          <Image
            src={image}
            alt="learning with friends videocall"
            justifyContent="flex-end"
            w="100%"
            h={h}
          />
        </Flex>
        <Flex
          direction="column"
          justifyContent="center"
          h={h}
          w={imageSide === 'left' ? '100%' : w}
        >
          <Text
            color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
            fontFamily="DM Sans"
            fontSize={['1.2rem', '1.2rem', '2rem', '2.4rem', '2.8rem']}
            mb={['0.3rem', '0.3rem', '0.5rem', '0.5rem']}
          >
            {title}
          </Text>
          <Text
            color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
            fontFamily="Public Sans"
            fontSize={['0.9rem', '0.9rem', '1rem', '1rem', '1.4rem']}
          >
            {description}
          </Text>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
};
export default CardHowDoesItWork;
