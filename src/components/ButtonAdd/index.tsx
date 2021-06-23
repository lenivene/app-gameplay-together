import React from 'react';
import { useTheme } from 'styled-components/native';

// Types
import { RectButtonProps } from 'react-native-gesture-handler';

// Components
import { Container } from './styles';
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons"

export const ButtonAdd: React.FC<RectButtonProps> = ({...rest}) => {
  const themeConfig = useTheme();

  return (
    <Container {...rest}>
      <Icon
        name="plus"
        color={themeConfig.textColors.heading}
        size={24}
      />
    </Container>
  );
}