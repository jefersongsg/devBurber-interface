
import styled from 'styled-components';
import BannerHome from '../../assets/Burger.png';
import Background from '../../assets/background.png'

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 100%;
    position: relative;
    background: url('${BannerHome}') no-repeat;
    background-size: cover;
    background-position: center;
    background-color: ${(props) => props.theme.mainBlack};
    
    h1 {
    font-family: 'Road Rage';
    font-size: 80px;
    line-height: 60px;
    position: absolute;
    color:  ${(props) => props.theme.white};
    right: 10%;
    top: 30%;
    }
`;

export const ContainerCarousel = styled.div`
    background:url('${Background}');
    background-color: ${(props) => props.theme.mainBlack};
`;
