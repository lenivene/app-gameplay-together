import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.primary};
  align-items: center;
  flex-direction: row;
  border-radius: 8px;
  min-width: 12px;
  height: 56px;
  width: 100%;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.textColors.heading};
  text-align: center;
  flex: 1;
`;