import defaultTheme, { Theme } from '@chakra-ui/theme';
// import { stylesConfig } from '../coderhood-ui/button/styles';
import { Colors } from './colors';
import Button from '../components/button/Button';

const breakpoints = ['48rem', '62rem', '80rem', '100rem', '120rem'];

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

export const coderhoodTheme = {
  ...defaultTheme,
  breakpoints,
  styles: {
    global: {},
  },
  colors: {
    ...defaultTheme.colors,
    orange: {
      ...defaultTheme.colors.orange,
      400: '#EA7F61',
      500: Colors.brand,
      600: '#B55136',
    },
    gray: {
      ...defaultTheme.colors.gray,
      300: '#FAFAFA',
      600: '#2C2C2C',
      800: '#222222',
    },
  },
  components: {
    ...defaultTheme.components,
    // Button: stylesConfig,
    //Button,
    Heading: {
      ...defaultTheme.components.Heading,
      baseStyle: {
        ...defaultTheme.components.Heading.baseStyle,
        fontFamily: 'DM Sans',
        fontWeight: '700',
      },
    },
  },
  fonts: {
    dmSans: 'DM Sans, sans-serif',
    robotoMono: 'Roboto Mono, monospace',
  },
};
