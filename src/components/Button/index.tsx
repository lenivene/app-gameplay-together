import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

// Components
import { Container, TextButton } from './styles';

export const Button: React.FC<RectButtonProps> = ({ children, ...rest }:any) => {
  return (
    <Container {...rest}>
      <TextButton>
        {children}
      </TextButton>
    </Container>
  );
}