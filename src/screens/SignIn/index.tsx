import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
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
          <ButtonIcon onPress={handleSignIn}>
            Entrar com discord
          </ButtonIcon>
        </ContentContainer>
      </Container>
    </>
  );
}