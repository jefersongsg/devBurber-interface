
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 90%;
    position: relative;

    div {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 40px;
    } 
    p {
        font-size: 18px;
        color: #ff8c05;
        line-height: 20px;
        font-weight: 700;
    }
    strong {
        font-size: 15px;
        color: #363636;
        font-weight: 800;
        line-height: 30px;
    }
`;
   
export const CardImage = styled.img`
    height: 100px;
    position: absolute;
    top: -50px;
`;