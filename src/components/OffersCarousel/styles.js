
import styled from 'styled-components';

export const Container = styled.div`
    .crousel-item {
        padding-right: 40px;
    }
    overflow-x: hidden;
    
    .react-multi-carousel-list {
    overflow: visible;
    }
    padding: 40px;  
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
