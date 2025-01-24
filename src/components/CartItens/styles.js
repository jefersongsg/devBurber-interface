
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const ProductImage = styled.img`
    height: 60px;
    width: 80px;
    border-radius: 16px;
   
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #fff;
        border-radius: 4px;
        background-color: #9758a6;
        transition: all 0.4s;
        border: none;

        &:hover {
            background-color: #6f357c;
        }
    }
`;

export const EmptyCart = styled.p`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    margin: 70px auto;
`;
export const TotalPrice = styled.p`
    font-weight: bold;
`;

export const Trash = styled.img`
    height: 25px;
    width: 25px;
    cursor: pointer;
`;
export const LinkTo = styled(Link)`
    color: #5C2669;
    margin-left: 60%;
    font-size: 18px;
    line-height: 47px;
    text-decoration-skip-ink: none;
 `;
