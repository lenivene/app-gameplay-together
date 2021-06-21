import React from 'react';
import {TouchableOpacityProps} from 'react-native';
// Components
import {
  Container,
  IconImage,
  IconWrapper,
  TextButton
} from './styles';

// Assets
import discordSrc from '../../assets/discord.png';

export const ButtonIcon: React.FC<TouchableOpacityProps> = ({ children, ...rest }:any) => {
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