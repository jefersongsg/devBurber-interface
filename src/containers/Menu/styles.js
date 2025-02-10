
import styled from 'styled-components';
import BannerMenu from '../../assets/bannerMenu.svg'
import Background from '../../assets/background.png'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background:linear-gradient(
    rgba(255,255,255, 0.3),
    rgba(255,255,255, 0.5)
    ),url('${Background}');
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    width: 100%;
    position: relative;

    background: url('${BannerMenu}') no-repeat;
    background-position: center;
    background-size: cover;
    background-color:  ${(props) => props.theme.mainBlack};

    h1 {
    font-family: ${(props) => props.theme.roadRageFont};
    font-size: 80px;
    line-height: 60px;
    position: absolute;
    color:  ${(props) => props.theme.white};

    right: 20%;
    top: 25%;

    span {
    display: block;
    font-size: 19px;    
         }
      }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoriaButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => (props.$isActiveCategory ? 
        (props) => props.theme.purple : 
        (props) => props.theme.green)};
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => (props.$isActiveCategory ?
    `4px solid ${props.theme.purple}` : 'transparent')};
   
    &:hover{
        border-bottom: 4px solid  ${(props) => props.theme.secondDarkPurple};
    }
    &:active{
        color:  ${(props) => props.theme.orange};
    }
`;

export const ButtonReturn = styled(Link)`
 text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) =>(props.$isActiveCategory ? 
        (props) => props.theme.purple : 
        (props) => props.theme.green)};
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    
    &:hover{
        border-bottom: 4px solid  ${(props) => props.theme.secondDarkPurple};
    }
    &:active{
        opacity:  ${(props) => props.theme.orange};
        }
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 60px;
    gap: 60px;
    margin-top: 50px;
`;