import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Banner = styled.Image`
  height: 300px;
`;

export const ContentContainer = styled.View`
  margin-top: -40px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.textColors.heading};
  font-family: ${({ theme}) => theme.fonts.title700};
  text-align: center;
  line-height: 40px;
  font-size: 40px;
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.textColors.heading};
  font-family: ${({ theme}) => theme.fonts.title500};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
`;
