
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.black};

   img{
        width: 180px;
        height: 165px;
        align-self: center;
        margin-top: 40px;
    }
`;


