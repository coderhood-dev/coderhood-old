import React from 'react';
import { GetStaticProps } from 'next';
import Typed from 'react-typed';
import { Flex, Image } from '@chakra-ui/core';

import { getRoadmaps, GetRoadmapsResponse } from '../api/roadmaps';
import { Text } from '../components';

interface Props {
  roadmaps: GetRoadmapsResponse;
}

const Home: React.FC<Props> = ({ roadmaps }) => {
  return (
    <>
      <Flex w="100%" h="100vh" pl="7rem" alignItems="center">
        <Flex direction="column" width="40%">
          <Typed
            strings={[
              'Todos pueden programar, aprendamos juntos.',
              `Todos pueden programar.\nBienvenido a tu comunidad.`,
            ]}
            typeSpeed={80}
            backSpeed={50}
            showCursor
            style={{
              color: 'white',
              fontFamily: 'DM Sans',
              fontWeight: 'bold',
              fontSize: '2.5rem',
            }}
          />
          <Text
            paddingTop="1rem"
            color="white"
            fontSize={['10px', '10px', '17px']}
          >
            {`${process.env.NEXT_PUBLIC_APP_NAME} es la comunidad que impulsa el aprendizaje autodidacta y colaborativo.`}
          </Text>
        </Flex>
        <Flex justifyContent="flex-end" width="60%">
          <Image
            pt={['10px', '40px', '70px', '120px']}
            src="hero.svg"
            alt="learning with friends videocall"
            objectPosition={['10px', '10px', '10px', '170px']}
            w={['30%', '70%', '100%']}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
