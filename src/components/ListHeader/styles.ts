import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.textColors.heading};
  font-size: 18px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.textColors.highlight};
  font-size: 13px;
`;