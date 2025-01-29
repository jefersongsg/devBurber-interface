
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    
    background-color: ${(props) => props.theme.black};

   img{
        align-self: center;
        width: 180px;
        height: 165px;
        margin-top: 40px;
    }
`;
export const NavLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    width: 100%;
    text-decoration: none;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => 
    props.$isActive ?
    props.theme.purple : 'transparent'};
    font-size: 20px;
    padding: 15px;
    gap: 15px;
    border-radius: 3px;
 `;

export const Footer = styled.footer`
    width: 100%;
    margin-top: auto;
`;


