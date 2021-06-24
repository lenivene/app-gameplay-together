import React from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { useTheme } from 'styled-components/native';

// Hooks
import { useAuth } from '../../hooks/Auth';

import {
  Container,
  Banner,
  ContentContainer,
  Title,
  Description
} from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';

// Assets
import bannerSrc from '../../assets/illustration.png';

export const SignInScreen: React.FC = () => {
  const { loading, signIn } = useAuth();
  const themeConfig = useTheme();
  
  const handleSignIn = async () => {
    try {
      await signIn();
    }
    catch (error: any) {
      Alert.alert(error);
    }
  }

  return (
    <>
      <Container>
        <Banner
          source={bannerSrc}
          resizeMode='stretch'
        />
        <ContentContainer>
          <Title>
            Organize{`\n`}
            suas jogatinas{`\n`}
            facilmente
          </Title>
          <Description>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Description>
          {loading ? (
            <ActivityIndicator color={themeConfig.primary} />
          ) : (
            <ButtonIcon onPress={handleSignIn}>
              Entrar com discord
            </ButtonIcon>
          )}
        </ContentContainer>
      </Container>
    </>
  );
}