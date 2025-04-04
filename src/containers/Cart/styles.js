
import styled from 'styled-components';
import Backtop from '../../assets/background-login.svg';
import Background from '../../assets/background.png';

export const Container = styled.div`
    width: 100%;
    background: url('${Background}');
    background-color: ${(props) => props.theme.mainBlack};
    min-height: 100vh;
`;

export const Banner = styled.div`
    background: url('${Backtop}');
    background-color:  ${(props) => props.theme.mainBlack};
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 180px;

    img {
        height: 130px;
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme.green};
    padding-bottom: 10px;
    position: relative;
    text-align: center;
    margin: 40px 0px 10px 0px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: ${(props) => props.theme.purple};
        left: calc(50% - 28px);
    }
`;

export const Content = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 30%;
    gap: 40px;
    max-width: 1280px;
    padding: 40px;
    margin: 10px auto;
`;