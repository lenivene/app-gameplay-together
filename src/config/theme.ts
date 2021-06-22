import { DefaultTheme } from "styled-components/native"

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;

    backgroundGradient: Array<string>;

    texts: {
      heading: string;
    }

    fonts: {
      title700: string;
      title500: string;
      text400: string;
      text500: string;
    }
  }
}

export const themeConfig: DefaultTheme = {
  primary: '#E51C44',
  secondary: '#0D133D',

  backgroundGradient: ['#0E1647', '#0A1033'],

  texts: {
    heading: '#DDE3F0'
  },

  fonts: {
    title700: 'Rajdhani_700Bold',
    title500: 'Rajdhani_500Medium',
    text400: 'Inter_400Regular',
    text500: 'Inter_500Medium',
  }
}