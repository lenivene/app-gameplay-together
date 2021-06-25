import React from 'react';
import { useTheme } from 'styled-components/native';

// Icons
import { Feather } from '@expo/vector-icons';

// Components
import {
  Container,
  ContainerProps,
  Content,
  Role,
  Title
} from './styles';
import { GuildIcon } from '../GuildIcon';
import { WrapperView } from '../WrapperMain';

// Types
import { IGuild } from '../../@types/data';
type Props = Omit<ContainerProps & {
  data: IGuild;
}, "style">
export const Guild: React.FC<Props> = ({data, ...rest}: Props) => {
  const themeConfig = useTheme();

  return (
    <Container {...rest}>
      <GuildIcon
        guildId={String(data.id)}
        iconId={data.icon}
      />
      <Content>
        <WrapperView>
          <Title>
            {data.name}
          </Title>
          <Role>
            { data.owner ? 'Administrador' : 'Convidado'}
          </Role>
        </WrapperView>
      </Content>
      <Feather 
        name="chevron-right"
        color={themeConfig.textColors.heading}
        size={24}        
      />
    </Container>
  );
}