
import styled from 'styled-components';

export const Container = styled.div`
    .crousel-item {
        padding-right: 30px;
    }
    padding: 30px;
`;

export const  Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #9758a6;
    padding-bottom: 12px;
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
    background: url('${(props) =>  props.imgUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    align-items: center;
    padding: 20px 10px;
    width: 90%;
    height: 200px;
    
    p {
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 22.5px;
        font-weight: 700;
        margin-top: 100px;
        width: 65%;
    }
`;