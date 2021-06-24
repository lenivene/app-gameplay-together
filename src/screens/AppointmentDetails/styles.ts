import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { IMember } from '../../@types/data';
import pictureSrc from "../../assets/banner.png";

export const Container = styled.View`
  flex: 1;
`;

export const PictureWrapper = styled.ImageBackground.attrs({ source: pictureSrc })`
  width: 100%;
  height: 234px;
  margin-bottom: 30px;
`;

export const PictureContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.textColors.heading};
  font-size: 28px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.textColors.heading};
  line-height: 21px;
  font-size: 13px;
`;

export const MemberList = styled(FlatList as new () => FlatList<IMember>)`
  margin-top: 24px;
  margin-left: 24px;
`;

export const Footer = styled.View`
  padding: 20px 24px;
  margin-bottom: ${getBottomSpace()}px;
`;