import { Theme } from '@material-ui/core';
import React, { useState } from 'react';
import light from './defaultTheme';
import dark from './darkTheme';

interface Themes {
  light: Theme;
  dark: Theme;
}

export interface IThemeContext {
  theme: Theme;
  switchTheme: (currentTheme: Theme, changerFn: (theme: Theme) => void) => void;
}

export const themes: Themes = { light, dark };

const ThemeContext: React.Context<IThemeContext> = React.createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);
  const themeContext: IThemeContext = {
    theme,
    switchTheme: () => {
      setTheme(theme.palette.type === 'dark' ? themes.light : themes.dark);
    },
  };
  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
