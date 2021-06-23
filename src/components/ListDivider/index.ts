import styled from "styled-components/native";

export const ListDivider = styled.View`
    background-color: ${({ theme }) => theme.borderGradient[0]};
    align-self: flex-end;
    margin-bottom: 21px;
    margin-top: 2px;
    height: 1px;
    width: 78%;
`;