import React from 'react';
import { useTheme } from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

// Data
import { membersData } from '../../mock/data/members';

// Components
import {
  Container,
  PictureWrapper,
  Title,
  Subtitle,
  PictureContent,
  MemberList,
  Footer
} from './styles';
import { Header } from '../../components/Header';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from "../../components/ListDivider"
import { Member } from '../../components/Member';
import { ButtonIcon } from '../../components/ButtonIcon';

export const AppointmentDetailsScreen: React.FC = () => {
  const themeConfig = useTheme();

  return (
    <Container>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={themeConfig.primary}
            />
          </BorderlessButton>
        }
      />
      <PictureWrapper>
        <PictureContent>
          <Title>Lendários</Title>
          <Subtitle>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Subtitle>
        </PictureContent>
      </PictureWrapper>

      <ListHeader
        title="Jogadores"
        total={3}
      />

      <MemberList
        data={membersData}
        keyExtractor={item => String(item.id)}
        ItemSeparatorComponent={() => <ListDivider />}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
      />

      <Footer>
        <ButtonIcon>
          Entrar na partida
        </ButtonIcon>
      </Footer>
    </Container>
  );
}