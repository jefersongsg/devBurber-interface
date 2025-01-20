
import styled from 'styled-components';
import BannerMenu from '../../assets/bannerMenu.svg'
import Background from '../../assets/background.png'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
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
    background-color: #1f1f1f;

    h1 {
    font-family: 'Road Rage';
    font-size: 80px;
    line-height: 60px;
    position: absolute;
    color: #ffffff;

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

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) =>(props.$isActiveCategory ? ' #9758A6' : '#61a120')};
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '4px solid #61a120'};
   
    &:hover{
        border-bottom: 4px solid #6f357c;
    }
    &:active{
        color: #ff8c05;
    }
`;
export const ButtonReturn = styled(Link)`
 text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) =>(props.$isActiveCategory ? ' #9758A6' : '#61a120')};
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && '4px solid #61a120'};
   
    &:hover{
        border-bottom: 4px solid #6f357c;
    }
    &:active{
        opacity: #ff8c05;
        }
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 30px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto;
`;