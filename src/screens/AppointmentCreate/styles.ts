import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const WrapperMain = styled.ScrollView``;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.textColors.heading}; 
  font-size: 18px;
`;

export const FormContainer = styled.View`
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 32px;
`;

export const SelectButtonContainer = styled(RectButton)``;

export const SelectButtonWrapper = styled.View`
  border-color: ${({ theme}) => theme.borderGradient[0]};
  flex-direction: row;
  align-items: center;
  padding-right: 25px;
  border-radius: 8px;
  border-width: 1px;   
  width: 100%; 
  height: 68px;
`;

export const SelectImage = styled.View`
  background-color: ${({ theme }) => theme.borderGradient[0]};
  border-radius: 8px;
  height: 68px;
  width: 64px;
`;

export const SelectBody = styled.View`
  flex: 1;
  align-items: center;
`;

export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const ColumnField = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SmallInput = styled.TextInput.attrs({ keyboardType: 'numeric' })`
  background-color: ${({ theme }) => theme.headerBackgroundGradient[1]};
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.textColors.heading};
  text-align: center;
  border-radius: 8px;
  margin-right: 4px;
  font-size: 13px;
  height: 48px;
  width: 48px;
`;

export const SeparatorText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text500};
  color: ${({ theme }) => theme.textColors.highlight}; 
  font-size: 15px;
  margin-right: 4px;
`;

export const LengthText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.textColors.highlight}; 
  font-size: 13px;
`;

export const Textarea = styled.TextInput`
  background-color: ${({ theme }) => theme.headerBackgroundGradient[1]};
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.textColors.heading};
  text-align: center;
  border-radius: 8px;
  margin-right: 4px;
  font-size: 13px;
  height: 95px;
  width: 100%;
`;

export const Footer = styled.View`
  margin-bottom: 56px;
  margin-top: 20px;
`;