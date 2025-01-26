
import styled from 'styled-components';

export const ContainerButton = styled.button`
 width: 100%;
 height: 52px;
 border: none;
 background-color:  ${(props) => props.theme.purple};
 color:  ${(props) => props.theme.white};
 border-radius: 5px;
 font-family: ${(props) => props.theme.roadRageFont};
 font-size: 30px;
 
 &:hover {
    background-color:  ${(props) => props.theme.secondDarkPurple};
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='5' ry='5' stroke='%23FFF8F8FF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;
 }
`;