import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      light: '#4A90E2', // Light blue
      main: '#357ABD', // Main blue
      dark: '#2E6BA4', // Dark blue
    },
    secondary: {
      main: '#E94E77', // Red
    },
    background: {
      main: '#1F1F1F', // Dark background
    },
  },
  styles: {
    global: {
      body: {
        bg: 'background.main', // Dark background
        color: 'primary.main', // Main blue
      },
    },
  },
});

export default theme;
