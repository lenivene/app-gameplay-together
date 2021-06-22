import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

// Components
import {
  Container,
  IconImage,
  IconWrapper,
  TextButton
} from './styles';

// Assets
import discordSrc from '../../assets/discord.png';

export const ButtonIcon: React.FC<RectButtonProps> = ({ children, ...rest }:any) => {
  return (
    <Container {...rest}>
      <IconWrapper>
        <IconImage
          source={discordSrc}
        />
      </IconWrapper>
      <TextButton>
        {children}
      </TextButton>
    </Container>
  );
}