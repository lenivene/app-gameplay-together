import React from 'react';
import { configDiscord } from '../../config/auth/discordAuth';

import DiscordSvg from '../../assets/discord.svg';
import { Container } from './styles';

type Props = {
  guildId: string;
  iconId: string | null;
}

export const GuildIcon: React.FC<Props> = ({guildId, iconId}) => {
  const uri = `${configDiscord.cdn_image}/icons/${guildId}/${iconId}.png`;

  return iconId ? (
    <Container
      source={{ uri }}
      resizeMode="cover"
    />
  ) : (
    <DiscordSvg 
      width={40} 
      height={40}
    />
  );
}