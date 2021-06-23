import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

// Components
import { Container, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
  title: string;
  action?: ReactNode;
}

export const Header: React.FC<Props> = ({ title, action }) => {
  const themeConfig = useTheme();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  }

  return (
    <Container
      colors={themeConfig.headerBackgroundGradient}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather
          name="arrow-left"
          size={24}
          color={themeConfig.textColors.heading}
        />
      </BorderlessButton>

      <Title>{title}</Title>

      { action && (
        <View>
          {action}
        </View>
      )}
    </Container>
  );
}