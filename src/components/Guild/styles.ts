import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';

export type ContainerProps = TouchableOpacityProps;
export const Container = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding-right: 24px;
  padding-left: 24px;
  width: 100%;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.textColors.heading};
  margin-bottom: 4px;
  font-size: 18px;
`;

export const Role = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.textColors.highlight};
  margin-bottom: 12px;
  font-size: 13px;
`;