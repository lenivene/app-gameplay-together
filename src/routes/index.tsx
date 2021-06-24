import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/Auth";
import { AuthRoutes } from "./auth.routes";

// Screen
import { SignInScreen } from '../screens/SignIn';

export const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AuthRoutes /> : <SignInScreen />}
    </NavigationContainer>
  )
}