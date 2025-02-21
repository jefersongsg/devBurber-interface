
import styled from 'styled-components';

export const Root = styled.table`
    border-collapse: collapse;
    background-color:  ${(props) => props.theme.darkWhite};
    border-radius: 20px;
`;

export const Header = styled.header`
 
`;

export const Tr = styled.tr`
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const Th = styled.th`
    width: 100%;
    padding: 16px;
    color:  ${(props) => props.theme.white};
    background-color:  ${(props) => props.theme.secondBlack};
    border-bottom: 1px solid  ${(props) => props.theme.lightGray};

    &:last-child {
        border-top-right-radius: 20px;   
    }
    &:first-child {
        border-top-left-radius: 20px;
    }
`;

export const Td = styled.td`
    margin-top: 30px;
    width: 100%;
    padding: 16px;
    color:  ${(props) => props.theme.secondBlack};
    font-weight: 500;
    line-height: 100%;
`;

export const Body = styled.body`
`;
