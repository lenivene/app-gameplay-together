import React from 'react';
import { useTheme } from 'styled-components/native';

// Types
import { RectButtonProps } from 'react-native-gesture-handler';
import { IAppointments } from '../../@types/data';

// Data
import { categoriesData } from '../../mock/data/categories';

// Components
import {
  Wrapper,
  Container,
  GuildContainer,
  GuildIcon,
  HeaderContainer,
  ContentContainer,
  Title,
  CategoryName,
  FooterContainer,
  InfoContainer,
  DateText,
  PlayerText
} from './styles';

// Assets
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

type Props = RectButtonProps & {
  data: IAppointments;
}

export const Appointment: React.FC<Props> = ({ data, ...rest }) => {
  const colors = useTheme();

  const [category] = categoriesData.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const ownerColor = owner ? colors.primary : colors.success;

  return (
    <Wrapper {...rest}>
      <Container>
        <GuildContainer
          colors={colors.borderGradient}
        >
          <GuildIcon
            source={{
              uri: 'https://i.ibb.co/9pmBQkv/otfL5n8.png'
            }}
            resizeMode="cover"
          />
        </GuildContainer>
        <ContentContainer>
          <HeaderContainer>
            <Title>
              {data.guild.name}
            </Title>

            <CategoryName>
              {category.title}
            </CategoryName>
          </HeaderContainer>

          <FooterContainer>
            <InfoContainer>
              <CalendarSvg />

              <DateText>
                {data.date}
              </DateText>
            </InfoContainer>

            <InfoContainer>
              <PlayerSvg fill={ownerColor}/>
              <PlayerText color={ownerColor}>
                { owner ? 'Anfitrião' : 'Visitante' }
              </PlayerText>
            </InfoContainer>
          </FooterContainer>
        </ContentContainer>
      </Container>
    </Wrapper>
  );
}