import React from 'react';
import { Alert, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

// Hooks
import { useAuth } from '../../hooks/Auth';

// Components
import {
  Container,
  UserContainer,
  GreetingText,
  UsernameText,
  TextMessage
} from './styles';
import { Avatar } from '../Avatar';

export const Profile: React.FC = () => {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    Alert.alert('Logout', 'Deseja sair do GamePlay?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: () => signOut()
        }
      ])
  }

  return (
    <Container>
      <RectButton onPress={handleSignOut}>
        <Avatar url={user.avatar}/>
      </RectButton>
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