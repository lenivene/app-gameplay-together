import React from 'react';

import { Container } from './styles';

export const GuildIcon: React.FC = () => {
  const uri = 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg';

  return (
    <Container 
      source={{ uri }}
      resizeMode="cover"    
    />
  )
}