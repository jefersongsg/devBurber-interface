
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
        color:  ${(props) => props.theme.white};
        border-radius: 4px;
        background-color:  ${(props) => props.theme.purple};
        transition: all 0.4s;
        border: none;

        &:hover {
            background-color:  ${(props) => props.theme.secondDarkPurple};
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
    color:  ${(props) => props.theme.darkPurple};
    margin-left: 60%;
    font-size: 18px;
    line-height: 47px;
    text-decoration-skip-ink: none;
 `;
