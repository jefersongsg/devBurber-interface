
import styled from 'styled-components';
import BannerHome from '../../assets/banner-home.svg';
import Background from '../../assets/background.png'

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
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

export const Container = styled.div`
    background:linear-gradient(
    rgba(255,255,255, 0.3),
    rgba(255,255,255, 0.5)
    ),url('${Background}');
`;
