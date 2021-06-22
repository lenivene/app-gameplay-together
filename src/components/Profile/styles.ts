import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserContainer = styled.View`
  flex-direction: row;
`;

export const GreetingText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title500};
  font-size: 24px;
  color: ${({ theme }) => theme.textColors.heading};
  margin-right: 5px;
`;

export const UsernameText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: 24px;
  color: ${({ theme }) => theme.textColors.heading};
`;

export const TextMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  font-size: 24px;
  color: ${({ theme }) => theme.textColors.highlight};
`;