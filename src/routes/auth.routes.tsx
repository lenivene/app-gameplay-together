import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from 'styled-components/native';

const { Navigator, Screen } = createStackNavigator();

// Screens
import { HomeScreen } from '../screens/Home';
import { AppointmentDetailsScreen } from '../screens/AppointmentDetails';
import { AppointmentCreateScreen } from '../screens/AppointmentCreate';

export const AuthRoutes: React.FC = () => {
  const themeConfig = useTheme();

  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: themeConfig.secondary
        }
      }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="AppointmentDetails" component={AppointmentDetailsScreen} />
      <Screen name="AppointmentCreate" component={AppointmentCreateScreen} />
    </Navigator>
  )
}