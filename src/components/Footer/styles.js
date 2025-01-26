
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    background-color:  ${(props) => props.theme.darkPurple};

    h1{
      color:  ${(props) => props.theme.white};
      font-size: 14px;
      font-weight: lighter;
    }
`;