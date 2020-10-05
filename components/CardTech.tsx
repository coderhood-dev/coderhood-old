import React, { useState } from 'react';
import styled from '@emotion/styled';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Layout, Card, Text } from '../components';
import {
  AvatarGroup,
  Avatar,
  Collapse,
  Link,
  Flex,
  Image,
  useColorMode,
  Heading,
} from '@chakra-ui/core';

const CardTech = ({ image, title, description }) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  const { colorMode } = useColorMode();
  const avatars = [
    { name: 'logo', image: '../branding/logo_compact.svg' },
    { name: 'logo', image: '../branding/logo_compact.svg' },
  ];
  return (
    <Flex
      onMouseOver={handleToggle}
      onMouseOut={handleToggle}
      w={['20rem', '40rem', '46rem', '46rem', '52rem']}
      p={['1rem', '2rem', '2.2rem', '2.5rem', '2.5rem']}
      display="flex"
      borderColor="#f26840"
      borderWidth="0.08rem"
      borderRadius="0.2rem"
      bg={colorMode === 'light' ? 'gray.300' : 'gray.800'}
      mt="3rem"
      h={['7.5rem', '14rem', '16rem', '16rem', '18rem']}
    >
      <Flex w="30%">
        <Image src={image} />
      </Flex>
      <Flex
        pl={['0.5rem', '2rem', '2.2rem', '2.5rem', '2.5rem']}
        w="70%"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Flex flexDirection="column">
          <Text
            color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
            fontFamily="DM Sans"
            fontSize={['1.2rem', '1.2rem', '2rem', '2.4rem', '2.8rem']}
          >
            {title}
          </Text>
          <Text
            color={colorMode === 'light' ? 'gray.800' : 'gray.300'}
            fontFamily="Public Sans"
            fontSize={['0.9rem', '0.9rem', '1rem', '1rem', '1.4rem']}
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
          >
            {description}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" w="100%">
          <AvatarGroup>
            {avatars.map((avatar, index) => (
              <Avatar
                key={index}
                bg={colorMode === 'light' ? 'gray.300' : 'gray.800'}
                w={['0%', '2.2rem', '2.2rem', '2.5rem', '3rem']}
                h={['0%', '2.2rem', '2.2rem', '2.5rem', '3rem']}
                name={avatar.name}
                src={avatar.image}
              />
            ))}
          </AvatarGroup>

          <Flex>
            <Link mt="0.3rem" _hover={{ color: 'gray.300' }} target="_blank">
              <Collapse
                color="#f26840"
                fontFamily="Public Sans"
                fontSize={['0.8rem', '0.9rem', '1rem', '1rem', '1.4rem']}
                isOpen={show}
              >
                Aprender
              </Collapse>
            </Link>
            <Link w="2rem" mt="0.5rem">
              <Image
                ml="0.5rem"
                src="../arrow.svg"
                alt="arrow"
                w="1rem"
                style={{
                  transform: 'rotate(90deg)',
                }}
              />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default CardTech;
