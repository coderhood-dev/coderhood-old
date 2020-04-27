import React, { useState } from 'react';
import light from './defaultTheme';
import dark from './darkTheme';

export const themes = { light, dark };

const ThemeContext = React.createContext(themes.dark);

export const ThemeProvider = props => {
  function switchTheme(theme, setTheme) {
    setTheme(theme.name === 'dark' ? themes.light : themes.dark);
  }
  const [theme, setTheme] = useState(themes.dark);
  const themeContext = {
    theme,
    switchTheme: () => switchTheme(theme, setTheme),
  };
  const { children } = props;
  return <ThemeContext.Provider value={themeContext}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
