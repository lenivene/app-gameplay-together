import React from 'react';
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons"
import { useTheme } from 'styled-components';

import { Container } from './styles';

export const ButtonAdd: React.FC = () => {
  const themeConfig = useTheme();

  return (
    <Container>
      <Icon
        name="plus"
        color={themeConfig.textColors.heading}
        size={24}
      />
    </Container>
  );
}