import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';
import { IAppointments } from '../../@types/data';

const statusBarHeight = getStatusBarHeight();

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding-right: 24px;
  padding-left: 24px;
  margin-top: ${statusBarHeight + 26}px;
  margin-bottom: 42px;
  width: 100%;
`;

export const ContentContainer = styled.View`
  margin-top: 42px;
`;

export const HeaderContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.textColors.heading};
  font-size: 18px;
`;

export const HeaderSubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.textColors.highlight};
  font-size: 13px;
`;

export const AppointmentsList = styled(FlatList as new () => FlatList<IAppointments>)`
  margin-top: 24px;
  margin-left: 24px;
`

export const AppointmentSeparatorList = styled.View`
    background-color: ${({ theme }) => theme.borderGradient[0]};
    align-self: flex-end;
    margin-bottom: 21px;
    margin-top: 21px;
    height: 1px;
    width: 80%;
`;