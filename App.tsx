import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import { useFonts } from "expo-font";
import { ThemeProvider } from 'styled-components/native';
import { themeConfig } from './src/config/theme';
import { BackgroundContainer } from './src/components/Background';
import { Routes } from './src/routes';

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
        <Routes />
      </BackgroundContainer>
    </ThemeProvider>
  );
}