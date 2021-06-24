import React from 'react';
import AppLoading from 'expo-app-loading';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import { useFonts } from "expo-font";
import { ThemeProvider } from 'styled-components/native';
import { themeConfig } from './src/config/theme';
import { BackgroundContainer } from './src/components/Background';
import { Routes } from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.']);

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
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </BackgroundContainer>
    </ThemeProvider>
  );
}