import { createContext } from 'react';
import { Theme } from '@material-ui/core';

import light from '../../theme/defaultTheme';
import dark from '../../theme/darkTheme';

export interface IThemeContext {
  theme: Theme;
  switchTheme: (currentTheme: Theme, changerFn: (theme: Theme) => void) => void;
}

interface Themes {
  light: Theme;
  dark: Theme;
}

export const themes: Themes = { light, dark };

export const ThemeContext: React.Context<IThemeContext> = createContext(null);
