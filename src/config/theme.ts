import { DefaultTheme } from "styled-components/native"

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;

    hr: string;
    overlay: string;
    success: string;

    backgroundGradient: Array<string>;
    headerBackgroundGradient: Array<string>;
    borderGradient: Array<string>;

    textColors: {
      heading: string;
      highlight: string;
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

  hr: '#495BCC',
  overlay: 'rgba(0,0,0,0.7)',
  success: '#32BD50',

  backgroundGradient: ['#0E1647', '#0A1033'],
  headerBackgroundGradient: ['#171F52', '#1D2766'],
  borderGradient: ['#243189', '#1B2565'],

  textColors: {
    heading: '#DDE3F0',
    highlight: '#ABB1CC',
  },

  fonts: {
    title700: 'Rajdhani_700Bold',
    title500: 'Rajdhani_500Medium',
    text400: 'Inter_400Regular',
    text500: 'Inter_500Medium',
  }
}