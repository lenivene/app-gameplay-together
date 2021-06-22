import React from 'react';
import { View } from 'react-native';
import { Avatar } from '../Avatar/Index';

import {
  Container,
  UserContainer,
  GreetingText,
  UsernameText,
  TextMessage
} from './styles';

export const Profile: React.FC = () => {
  return (
    <Container>
      <Avatar
        url="http://github.com/lenivene.png"
      />
      <View>
        <UserContainer>
          <GreetingText>Olá,</GreetingText>
          <UsernameText>Lenivene</UsernameText>
        </UserContainer>
        <TextMessage>
          Hoje é dia de vitória
        </TextMessage>
      </View>
    </Container>
  );
}