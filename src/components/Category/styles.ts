import styled from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

export type MainProps = RectButtonProps & {
  hasCheckbox?: boolean;
  checked?: boolean;
};

export const Main = styled(RectButton).attrs<MainProps>((attr) => ({
  hasCheckbox: Boolean(attr.hasCheckbox) || false
}))<MainProps>`
  margin-right: 8px;
  width: 104px;
  height: 120px;
  opacity: ${(props: any) => ! props.hasCheckbox ? 1 : (props.checked ? 1 : .5)};
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
  padding-bottom: 20px;
  padding-top: 20px;
  width: 100%;
  height: 100%;
`;

export const Check = styled.View`
  border-color: ${({ theme}) => theme.borderGradient[0]};
  background-color: ${({ theme}) => theme.secondary};
  position: absolute;
  border-radius: 4px;
  border-width: 2px;
  height: 12px;
  width: 12px;
  right: 8px;
  top: 8px;
`;

export const Checked = styled.View`
  border-color: ${({ theme}) => theme.borderGradient[0]};
  background-color: ${({ theme}) => theme.primary};
  position: absolute;
  border-radius: 4px;
  border-width: 2px;
  height: 12px;
  width: 12px;
  right: 8px;
  top: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme}) => theme.fonts.title700};
  color: ${({ theme}) => theme.textColors.heading};
  font-size: 15px;
  line-height: 19px;
  margin-top: 7px;
`;