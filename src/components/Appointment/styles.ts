import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled(RectButton)``;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-self: center;
`;

export const ContentContainer = styled.View`
  flex: 1;
`;

export const GuildIcon = styled.Image`
  width: 64;
  height: 64;
  border-radius: 8;
  margin-right: 20;
`;

export const HeaderContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.textColors.heading};
  font-size: 18px;
`;

export const CategoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.textColors.highlight};
  font-size: 13px;
  margin-right: 24px;
`;

export const FooterContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text500};
  color: ${({ theme }) => theme.textColors.heading};
  font-size: 13px;
  margin-left: 7px;
`;

type PlayerProps = { color: string };
export const PlayerText = styled.Text<PlayerProps>`
  font-family: ${({ theme }) => theme.fonts.text500};
  color: ${(props) => props.color};
  font-size: 13px;
  margin-left: 7px;
  margin-right: 24px;
`;