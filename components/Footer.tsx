import React from 'react';
import styled from '@emotion/styled';
import { Image, Box, Link } from '@chakra-ui/core';

const FooterContainer = styled.div`
  width: 100%;
  padding: 2.5% 3.1%;
  background-color: #222222;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Footer = () => (
  <FooterContainer>
    <Image w={['36%', '24%', '12%']} src="Logo.png" alt="Logo" />
    <Box
      d="flex"
      w={['50%', '36%', '22%']}
      justifyContent="space-between"
      mr="5"
    >
      <Link
        w="11%"
        href="https://www.youtube.com/channel/UCZiR1u5RtSYYt8qcenxr-Uw"
      >
        <Image src="youtube.svg" />
      </Link>
      <Link w="9%" href="https://twitter.com/coderhood_dev">
        <Image src="twitter.svg" />
      </Link>
      <Link w="9%" href="https://www.instagram.com/coderhood.dev/">
        <Image src="instagram.svg" />
      </Link>
      <Link w="9%" href="https://www.linkedin.com/company/coderhood/">
        <Image src="linkedin.svg" />
      </Link>
    </Box>
  </FooterContainer>
);
