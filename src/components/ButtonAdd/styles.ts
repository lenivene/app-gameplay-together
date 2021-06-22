import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.primary};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 6px 12px;
`;