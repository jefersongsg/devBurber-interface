
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item {
        padding-right: 15px;
        padding-left: 15px;
    }
    .react-multiple-carousel__arrow{
    position: absolute;
    outline: 0;
    transition: all .5s;
    z-index: 1000;
    background: rgba(0, 0, 0, 0);
    min-width: 43px;
    min-height: 43px;
    opacity: 1;
    }
    .react-multiple-carousel__arrow::before {
    font-size: 50px;
    font-weight: bolder;
    color: #9758a6;
    display: block;
    text-align: center;
    z-index: 2;
    position: relative; 
    }
    padding: 15px;
`;

export const  Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #9758a6;
    padding-bottom: 15px;
    position: relative;
    text-align: center;
    margin-bottom: 20px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color:#9758a6;
        left: calc(50% - 28px);
    }
`;

export const  ContainerItems = styled.div`
    background: url('${(props) =>  props.imgurl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    align-items: center;
    padding: 20px 10px;
    width: 90%;
    height: 200px;
`;

export const  CategoryButton = styled(Link)`
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 8px 20px;
        border-radius: 30px;
        font-size: 22.5px;
        font-weight: 500;
        margin-top: 115px;
        text-decoration: none;
        
        &:hover{
            background-color: #9758a6;
        }
`;