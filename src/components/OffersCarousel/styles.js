
import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item {
        padding-right: 15px;
        padding-left: 15px;
    }
    overflow-x: hidden;
    
    .react-multi-carousel-list {
    overflow: visible;
    }
    .react-multiple-carousel__arrow{
    position: absolute;
    outline: 0;
    transition: all .5s;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.01);
    min-width: 43px;
    min-height: 43px;
    opacity: 1;
    margin: 0px 0px 190px 0px;
    }
    .react-multiple-carousel__arrow::before {
    font-size: 50px;
    font-weight: bolder;
    color: #61A120;
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
    color: #61A120;
    padding-bottom: 20px;
    position: relative;
    text-align: center;
    margin-bottom: 65px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 5px;
        background-color: #61A120;
        left: calc(50% - 28px);
    }
`;
