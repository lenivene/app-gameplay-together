import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 8px;
  height: 56px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.textColors.heading};
  text-align: center;
  flex: 1;
`;