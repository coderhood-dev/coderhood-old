import defaultTheme, { Theme } from '@chakra-ui/theme';

const breakpoints = ['30em', '48em', '62em', '80em', '100em'];

// @ts-ignore
breakpoints.xs = breakpoints[0];
// @ts-ignore
breakpoints.sm = breakpoints[1];
// @ts-ignore
breakpoints.md = breakpoints[2];
// @ts-ignore
breakpoints.lg = breakpoints[3];
// @ts-ignore
breakpoints.xl = breakpoints[4];

export const coderhoodTheme: Theme = {
  ...defaultTheme,
  breakpoints,
  styles: {
    global: {},
  },
  colors: {
    ...defaultTheme.colors,
    // define more colors..
  },
  components: {
    ...defaultTheme.components,
    Heading: {
      ...defaultTheme.components.Heading,
      baseStyle: {
        ...defaultTheme.components.Heading.baseStyle,
        fontFamily: 'DM Sans',
        fontWeight: '700',
      },
    },
  },
};

export const Colors = {
  accent: coderhoodTheme.colors.orange[300],
  primary: coderhoodTheme.colors.orange[500],
  secondary: coderhoodTheme.colors.black[700],
};
