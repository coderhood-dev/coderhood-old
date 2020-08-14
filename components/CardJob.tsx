import React, { PropsWithChildren, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  BoxProps,
  Image,
  Flex,
  Text,
  Button,
  Heading,
  Tag,
  TagLabel,
  Collapse,
} from '@chakra-ui/core';
import styled from '@emotion/styled';
import { Card } from '../components';

import { Colors } from '../theme';

export const CardJob: React.FC<PropsWithChildren<BoxProps>> = ({
  children,
  ...props
}) => {
  const collapse = () => {
    return (
      <>
        <Text>
          Sporty is a mobile internet company with a focus on emerging markets.
          Our integrated sports media, betting, gaming and social platform
          serves a huge userbase across numerous countries. We have a talented
          and proven team of 200+ people comprised of 50+ tech staff and 150+
          product, operations and support, and are looking to expand our tech
          team count to 100+ people as we look to drive further geographical
          expansion, whilst iterating on our offering with a user-driven
          development approach.
        </Text>
        <Flex justifyContent="center" alignItems="center">
          <Button>Aplicar</Button>
        </Flex>
      </>
    );
  };

  return (
    <Card collapse={collapse}>
      <Flex>
        <Box>
          <Image
            boxSize="50px"
            objectFit="cover"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
          />
        </Box>
        <Flex justifyContent="center" flexDirection="column">
          <Text>Nombre de la Empresa</Text>
          <Heading as="h4" fontSize="1.2rem">
            Nombre del puesto
          </Heading>
        </Flex>
        <Flex
          justifyContent="flex-start"
          alignItems="center"
          pr="2rem"
          pl="2rem"
        >
          <Tag colorScheme="blue" size="sm" m="5px" variant="outline">
            <TagLabel>Backend</TagLabel>
          </Tag>
          <Tag colorScheme="blue" size="sm" m="5px" variant="outline">
            <TagLabel>Frontend</TagLabel>
          </Tag>
          <Tag colorScheme="blue" size="sm" m="5px" variant="outline">
            <TagLabel>React.js</TagLabel>
          </Tag>
          <Tag colorScheme="blue" size="sm" m="5px" variant="outline">
            <TagLabel>Node.js</TagLabel>
          </Tag>
        </Flex>
        <Flex alignItems="center" justifyContent="center" p="0 1rem">
          <Text fontSize="14px" fontWeight="500">
            12hs
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};
