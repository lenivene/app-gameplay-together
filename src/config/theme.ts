import { DefaultTheme } from "styled-components/native"

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string;
    secondary: string;

    texts: {
      heading: string;
    }
  }
}

export const themeConfig: DefaultTheme = {
  primary: '#E51C44',
  secondary: '#0D133D',

  texts: {
    heading: '#DDE3F0'
  }
}