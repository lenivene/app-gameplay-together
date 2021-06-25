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

export const IconWrapper = styled.View`
  border-right-color : rgba(0,0,0,.1);
  border-right-width: 1px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 56px;
  width: 56px;
`;

export const IconImage = styled.Image`
  width: 24px;
  height: 18px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.textColors.heading};
  text-align: center;
  flex: 1;
`;