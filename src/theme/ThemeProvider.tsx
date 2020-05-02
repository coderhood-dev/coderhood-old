import { Theme } from '@material-ui/core';
import React, { useState } from 'react';
import light from './defaultTheme';
import dark from './darkTheme';

interface Themes {
  light: Theme;
  dark: Theme;
}

export const themes: Themes = { light, dark };

const ThemeContext: React.Context<Theme> = React.createContext(themes.dark);

export const ThemeProvider = ({ children }) => {
  function switchTheme(currentTheme: Theme, changerFn: (theme: Theme) => void) {
    changerFn(
      currentTheme.palette.type === 'dark' ? themes.light : themes.dark
    );
  }
  const [theme, setTheme] = useState(themes.dark);
  const themeContext = {
    theme,
    switchTheme: () => switchTheme(theme, setTheme),
  };
  return (
    // @ts-ignore
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
