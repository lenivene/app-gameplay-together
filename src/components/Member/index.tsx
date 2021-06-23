import React from 'react';
import { View } from 'react-native';

// Types
type Props = { data: IMember };
import { IMember } from '../../@types/data';

// Components
import { Avatar } from '../Avatar/Index';
import {
  BulletStatus,
  Container,
  Status,
  StatusContainer,
  Title
} from './styles';

export const Member: React.FC<Props> = ({ data }) => {
  const isOnline = data.status === 'online';

  return (
    <Container>
      <Avatar url={data.avatar_url} />

      <View>
        <Title>
          {data.username}
        </Title>

        <StatusContainer>
          <BulletStatus isOnline={isOnline} />
          <Status>
            { isOnline ? 'Disponível' : 'Ocupado' }
          </Status>
        </StatusContainer>
      </View>
    </Container>
  );
}