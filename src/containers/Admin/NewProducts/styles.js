
import { Button } from '../../../components';

import ReactSelect from 'react-select';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
`;

export const Form = styled.form`
    border-radius: 10px;
    background-color: ${(props) => props.theme.black};
    padding: 35px;
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 29px;
`;

export const InputGrup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px; 
`;

export const Label = styled.label`
   color: ${(props) => props.theme.white};
   font-size: 16px;
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 5px;
    padding: 0 12px;
    border: none;
`;

export const LabelUpload = styled.label`
    cursor: pointer;
    border: 1px dashed ${(props) => props.theme.white};
    border-radius: 5px;
    padding: 10px;
    display: flex;
    color: ${(props) => props.theme.white};
    margin: 20px 0; 

    input{
        display: none;
    }
    > svg {
        width: 20px;
        height: 20px;
        fill: ${(props) => props.theme.white};
        margin-right: 10px;
    }
`;

export const Select = styled(ReactSelect)``;

export const SubmitButt = styled(Button)`
    margin-top: 40px;
`;

export const ErrorMessage = styled.span`
     color: ${(props) => props.theme.darkRed};
     font-size: 14px;
     line-height: 80%;
     font-weight: 60px;
`;