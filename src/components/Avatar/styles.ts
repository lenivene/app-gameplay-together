import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 22px;
  padding: 2px;
  width: 48px;
  height: 48px;
`;

export const Picture = styled.Image`
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;