import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 8px;
  height: 56px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.View`
  width: 56px;
  border-right-width: 1px;
  border-right-color : rgba(0,0,0,.1);
  justify-content: center;
  align-items: center;
  height: 56px;
`;

export const IconImage = styled.Image`
  width: 24px;
  height: 18px;
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.texts.heading};
  text-align: center;
  flex: 1;
`;