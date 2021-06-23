import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title700};
  color: ${({ theme }) => theme.textColors.heading};
  font-size: 18px;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Status = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text400};
  color: ${({ theme }) => theme.textColors.highlight};
  font-size: 13px;
`;

type BulletStatusProps = { isOnline: boolean };
export const BulletStatus = styled.View<BulletStatusProps>`
  background-color: ${(props) => props.isOnline ? props.theme.success : props.theme.primary};
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 9px;
`;