import styled from "styled-components/native";

type ListDividerProps = {
    isCentralized?: boolean;
}
export const ListDivider = styled.View<ListDividerProps>`
    background-color: ${({ theme }) => theme.borderGradient[0]};
    align-self: flex-end;
    margin-bottom: ${(props) => props.isCentralized ? '12px' : '31px'};
    margin-top: ${(props) => props.isCentralized ? '12px' : '2px'};
    height: 1px;
    width: 78%;
`;