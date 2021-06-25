import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container } from './styles';

export const Load: React.FC = () => {
  const themeConfig = useTheme();

  return (
    <Container>
      <ActivityIndicator
        size="large"
        color={themeConfig.primary}
      />
    </Container>
  );
}