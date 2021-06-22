import React from 'react';
import { useTheme } from 'styled-components';

import { Container } from './styles';

export const BackgroundContainer: React.FC = ({ children }) => {
  const themeConfig = useTheme();

  return (
    <Container
      colors={themeConfig.backgroundGradient}
    >
      {children}
    </Container>
  );
}