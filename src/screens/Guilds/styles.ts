import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { IGuild } from '../../@types/data';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 24;
`;

export const GuildsList = styled(FlatList as new () => FlatList<IGuild>)`
  width: 100%;
`;
