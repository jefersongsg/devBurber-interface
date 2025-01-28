
import styled from 'styled-components';

export const ContainerButton = styled.button`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   width: 100%;
   height: 50px;
   border: none;
   background-color:  ${(props) => props.theme.purple};
   color:  ${(props) => props.theme.white};
   font-family: ${(props) => props.theme.poppinsFont};
   font-size: 20px;
   padding: 15px;
   gap: 15px;
   margin-bottom: 10px; 
   margin-top: 10px;
 
 &:hover {
    background-color:  ${(props) => props.theme.secondDarkPurple};
 }
`;