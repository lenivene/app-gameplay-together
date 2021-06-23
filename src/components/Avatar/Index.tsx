import React from 'react';
import { useTheme } from 'styled-components/native';

import { Container, Picture } from './styles';

type AvatarProps = { url: string; }
export const Avatar: React.FC<AvatarProps> = ({ url }) => {
  const themeConfig = useTheme();

  return (
    <Container colors={themeConfig.borderGradient}>
      <Picture
        source={{
          uri: url
        }}
      />
    </Container>
  );

}