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

export const AppointmentsList = styled(FlatList as new () => FlatList<IAppointments>)`
  margin-top: 24px;
  margin-left: 24px;
`;