import React from 'react';
import SocialIcons from './SocialIcons';
import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/core';

import { ThemeSwitcher, Text } from '../components';

const FooterContainer = styled.div`
  width: 100%;
  padding: 40px 80px;
  background-color: blue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Footer = () => (
  <FooterContainer>
    <Flex direction="column">
      <Text color="gray.800">
        {`${process.env.NEXT_PUBLIC_APP_NAME} ${new Date().getFullYear()}`}
      </Text>
      <Text color="gray.800">
        {`Made with 🦄 by ${process.env.NEXT_PUBLIC_APP_NAME} Team`}
      </Text>
    </Flex>
    <SocialIcons />
    <ThemeSwitcher />
  </FooterContainer>
);
