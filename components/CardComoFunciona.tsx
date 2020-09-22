import React from 'react';
import { Flex, Image, SimpleGrid } from '@chakra-ui/core';
import { Text } from '../components';

const CardComoFunciona = ({ image, title, description, imageSide }) => {
  return (
    <>
      <Flex
        w={['80%', '100%', '80%', '80%', '75%', '80%']}
        h={['80vh', '50vh', '50vh', '80vh', '70vh', '70vh']}
      >
        <SimpleGrid columns={[1, 2, 2, 2]}>
          {imageSide === 'left' ? (
            <>
              <Flex width="100%" pr="10px">
                <Image
                  src={image}
                  alt="learning with friends videocall"
                  h="50vh"
                />
              </Flex>
              <Flex
                direction="column"
                justifyContent="center"
                width="100%"
                h="50vh"
                pl="10px"
              >
                <Text
                  color="white"
                  fontFamily="DM Sans"
                  fontSize={[
                    '3rem',
                    '3rem',
                    '3rem',
                    '3rem',
                    '2.3rem',
                    '3.4rem',
                  ]}
                  mb={['5px', '5px', '8px', '8px']}
                >
                  {title}
                </Text>
                <Text
                  color="white"
                  fontSize={[
                    '0.8rem',
                    '0.8rem',
                    '0.8rem',
                    '0.8rem',
                    '0.9rem',
                    '1.4rem',
                  ]}
                  mt={['5px', '5px', '8px', '8px']}
                >
                  {description}
                </Text>
              </Flex>
            </>
          ) : (
            <>
              <Flex
                direction="column"
                justifyContent="center"
                width="100%"
                h="50vh"
                pl="10px"
              >
                <Text
                  color="white"
                  fontFamily="DM Sans"
                  fontSize={[
                    '3rem',
                    '3rem',
                    '3rem',
                    '3rem',
                    '2.3rem',
                    '3.4rem',
                  ]}
                  mb={['5px', '5px', '8px', '8px']}
                >
                  {title}
                </Text>
                <Text
                  color="white"
                  fontSize={[
                    '0.8rem',
                    '0.8rem',
                    '0.8rem',
                    '0.8rem',
                    '0.9rem',
                    '1.4rem',
                  ]}
                  mt={['5px', '5px', '8px', '8px']}
                >
                  {description}
                </Text>
              </Flex>
              <Flex width="100%" pr="10px">
                <Image
                  src={image}
                  alt="learning with friends videocall"
                  w="100%"
                  h="50vh"
                />
              </Flex>
            </>
          )}
        </SimpleGrid>
      </Flex>
    </>
  );
};
export default CardComoFunciona;
