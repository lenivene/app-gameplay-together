import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { HomeScreen } from '../screens/Home';
import { SignInScreen } from '../screens/SignIn';

export const AuthRoutes: React.FC = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen name="SignIn" component={SignInScreen} />
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  )
}