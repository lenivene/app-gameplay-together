import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import {
  Alert,
  Linking,
  Platform,
  Share
} from 'react-native';
import { useTheme } from 'styled-components/native';
import { useRoute } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';

// Services
import { apiDiscord } from '../../services/apiDiscord';

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

// Types
import { IAppointments, IMember } from '../../@types/data';
import { Load } from '../../components/Load';
type Params = {
  guildSelected: IAppointments;
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: IMember[];  
}

export const AppointmentDetailsScreen: React.FC = () => {
  const themeConfig = useTheme();
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  const handleShareInvitation = useCallback(() => {
    const message = Platform.OS === 'ios' 
      ? `Junte-se a ${guildSelected.guild.name}` : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite
    });    
  }, [widget]);

  const handleOpenGuild = useCallback(() => {
    Linking.openURL(widget.instant_invite);
  }, [widget]);

  useEffect(() => {
    (async () => {
      try {
        const response = await apiDiscord.get(`/guilds/${guildSelected.guild.id}/widget.json`);
        setWidget(response.data);      
      } catch {
        Alert.alert('Verifique as configurações do servidor. Será que o Widget está habilitado?');      
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      <Header
        title="Detalhes"
        action={guildSelected.guild.owner && (
          <BorderlessButton onPress={handleShareInvitation}>
            <Fontisto
              name="share"
              size={24}
              color={themeConfig.primary}
              />
          </BorderlessButton>
        )}
      />
      <PictureWrapper>
        <PictureContent>
          <Title>
            {guildSelected.guild.name}
          </Title>
          <Subtitle>
            {guildSelected.description}
          </Subtitle>
        </PictureContent>
      </PictureWrapper>

      {loading ? <Load /> : (
        <>
          <ListHeader
            title="Jogadores"
            total={3}
          />

          <MemberList
            data={widget.members}
            keyExtractor={item => String(item.id)}
            ItemSeparatorComponent={() => <ListDivider isCentralized/>}
            renderItem={({ item }) => (
              <Member data={item} />
            )}
          />
        </>
      )}

      {guildSelected.guild.owner && (
        <Footer>
          <ButtonIcon onPress={handleOpenGuild}>
            Entrar na partida
          </ButtonIcon>
        </Footer>
      )}
    </Container>
  );
}