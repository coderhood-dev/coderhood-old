import React from 'react';
import { Button, useColorMode } from '@chakra-ui/core';

const ThemeSwitcher = () => {
  const { toggleColorMode } = useColorMode();
  return <Button onClick={toggleColorMode}>change color</Button>;
};

export default ThemeSwitcher;
