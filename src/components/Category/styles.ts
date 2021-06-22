import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export type MainProps = RectButtonProps & {
  checked?: boolean;
};

export const Main = styled(RectButton)<MainProps>`
  margin-right: 8px;
  width: 104px;
  height: 120px;
  opacity: ${(props: any) => props.checked ? 1 : .5}
`;

export const Container = styled(LinearGradient)`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  padding: 2px;
`;

export const Wrapper = styled(LinearGradient)`
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding-bottom: 17px;
  padding-top: 20px;
  width: 100%;
  height: 100%;
`;

export const Check = styled.View`
  width: 12px;
  height: 12px;
  background-color: ${({ theme}) => theme.secondary};
  align-self: flex-end;
  margin-right: 7px;
  margin-top: -4px;
  border-color: ${({ theme}) => theme.borderGradient[0]};
  border-width: 2px;
  border-radius: 4px;
`;

export const Checked = styled.View`
  width: 12px;
  height: 12px;
  background-color: ${({ theme}) => theme.primary};
  align-self: flex-end;
  margin-right: 7px;
  margin-top: -4px;
  border-color: ${({ theme}) => theme.borderGradient[0]};
  border-width: 2px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  font-family: ${({ theme}) => theme.fonts.title500};
  color: ${({ theme}) => theme.textColors.heading};
  font-size: 15px;
  line-height: 19px;
  margin-top: 7px;
`;