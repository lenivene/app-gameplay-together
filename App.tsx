import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { themeConfig } from './src/config/theme';
import { SignInScreen } from './src/screens/SignIn';

export default function App() {
  return (
    <ThemeProvider theme={themeConfig}>
      <StatusBar
        translucent
        style='light'
        backgroundColor='transparent'
      />
      <SignInScreen />
    </ThemeProvider>
  );
}