
import styled from "styled-components";

export const ContainerButton = styled.button`
    background-color:  ${(props) => props.theme.purple};
    width: 100%;
    height: 40px;
    border-radius: 7px;
    border: 0;
    font-size: 30px;
    color:  ${(props) => props.theme.white};

    &:hover {
      background-color:  ${(props) => props.theme.secondDarkPurple};
    }
    &:active {
      background-color: ${(props) => props.theme.green};
    }
`; 