import React from 'react';
import { View } from 'react-native';
import { Avatar } from '../Avatar/Index';
import { useAuth } from '../../hooks/Auth';

import {
  Container,
  UserContainer,
  GreetingText,
  UsernameText,
  TextMessage
} from './styles';

export const Profile: React.FC = () => {
  const { user } = useAuth();
  return (
    <Container>
      <Avatar url={user.avatar}/>
      <View>
        <UserContainer>
          <GreetingText>Olá,</GreetingText>
          <UsernameText>{user.firstName}</UsernameText>
        </UserContainer>
        <TextMessage>
          Hoje é dia de vitória
        </TextMessage>
      </View>
    </Container>
  );
}