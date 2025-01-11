import styled from 'styled-components';
import BannerHome from '../../assets/banner-home.svg';
import Background from '../../assets/background.png'



export const Banner = styled.div`
    display: flex;
    background: url('${BannerHome}');
    background-size: contain;
    background-position: center;
    height:300px;

    h1 {
    font-family: 'Road Rage', serif;
    font-size: 80px;
    color: #ffffff;
    margin-left: 74%;
    margin-top: 4%;
    }
`;

export const Container = styled.div`
    background:linear-gradient(
    rgba(255,255,255, 0.3),
    rgba(255,255,255, 0.3)
    ),url('${Background}');
    background-size:cover;
    height:400px;
`;

export const Content = styled.div`
`;
