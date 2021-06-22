import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { themeConfig } from './src/config/theme';
import { SignInScreen } from './src/screens/SignIn';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import { BackgroundContainer } from './src/components/Background';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium,
    Rajdhani_700Bold, Rajdhani_500Medium
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={themeConfig}>
      <BackgroundContainer>
        <StatusBar
          translucent
          style='light'
          backgroundColor='transparent'
        />
        <SignInScreen />
      </BackgroundContainer>
    </ThemeProvider>
  );
}