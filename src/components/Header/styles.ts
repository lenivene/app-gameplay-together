import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled(LinearGradient)`
  padding-top: ${getStatusBarHeight()}px;
  padding-right: 24px;
  padding-left: 24px;
  height: 104px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.title700};
  font-size: 20px;
  color: ${({ theme }) => theme.textColors.heading};
`;