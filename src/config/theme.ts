import { extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const appTheme = {
  colors: {
    primary: {
      50: '#80ffdb',
      100: '#72efdd',
      200: '#64dfdf',
      300: '#56cfe1',
      400: '#48bfe3',
      500: '#4ea8de',
      600: '#5390d9',
      700: '#5e60ce',
      800: '#6930c3',
      900: '#7400b8',
    },
  },
  styles: {
    global: {
      body: {
        width: '100vw',
        height: '100vh',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === 'dark' ? 'primary.300' : 'primary.500',
        }),
        ghost: (props: StyleFunctionProps) => ({
          _hover: {
            bg: false,
          },
          _active: {
            bg: props.colorMode === 'dark' ? 'primary.300' : 'primary.500',
          },
        }),
      },
      defaultProps: {
        colorScheme: 'primary',
      },
    },
  },
  config: {
    initialColorMode: 'light',
  },
};

export const theme = extendTheme({ ...appTheme });
