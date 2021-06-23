import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-top: 100px;
`;

export const Overlay = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.overlay};
`;

export const Bar = styled.View`
  background-color: ${({ theme }) => theme.hr};
  margin-bottom: 103px;
  align-self: center;
  border-radius: 2px;
  margin-top: 13px;
  width: 39px;
  height: 2px;
`;