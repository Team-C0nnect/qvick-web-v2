import styled from "styled-components";

export const AllPage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #252931;
`;
export const LoginPage = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 800px;
    padding: 0 20px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #252931;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;
export const LoginTitle = styled.div`
    margin-top: 97px;
    font-size: 96px;
    font-weight: 700;
    color: #FFFFFF;
    text-align: center;
`;
export const TitleImg = styled.img`
    width: 160px;
    height: 85px;
    margin-bottom: 20px;
`;
export const ContentWrap = styled.div`
    margin-bottom: 10px;
    flex: 0;
`;
export const LoginInputWrap = styled.div`
    position: relative;
    display: flex;
    border-radius: 5px;
    padding: 16px;
    margin-top: 43px;
    margin-bottom: 58px;
    margin-left: 100px;
    background-color: #3A3F4A;
    border: 1px solid #3A3F4A;
    width: 600px;
    height: 29px;
    align-items: center;
    box-shadow: 2px 2px 2px 2px #1D1F25;
`;
export const Input = styled.input`
    position: absolute;
    width: 600px;
    outline: none;
    border: none;
    height: 30px;
    font-size: 14px;
    font-weight: 400;
    border-color: #3A3F4A;
    background-color: #3A3F4A;
    color: #FFFFFF;
    &::placeholder {
        font-size: 20px;
        color: #787878;
        background-color: #3A3F4A;
    }
    &:focus::placeholder {
        background-color: #3A3F4A;
    }
`;
export const PwInputWrap = styled.div`
    position: relative;
    display: flex;
    border-radius: 5px;
    padding: 16px;
    margin-top: -8px;
    margin-left: 100px;
    background-color: #3A3F4A;
    border: 1px solid #3A3F4A;
    width: 600px;
    height: 29px;
    align-items: center;
    box-shadow: 2px 2px 2px 2px #1D1F25;
`;
export const InputWrap = styled.div`
    &:focus-within {
        border: 1px solid #868afc;
    }
`;
export const LoginButtonWrap = styled.div`
    margin-top: 70px;
`;
export const LoginButton = styled.button`
    width: 630px;
    height: 72px;
    border: none;
    font-weight: 700;
    background-color: #41C982;
    border-radius: 5px;
    color: white;
    margin-bottom: 16px;
    margin-top: -10px;
    margin-right: 70px;
    cursor: pointer;
    float: right;
    &:disabled{
        background-color: #dadada;
        color: white;
        font-size: 25px;
    }
`;
export const CheckboxWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    width: 200px;
    height: 30px;
`;

export const CheckboxBundle = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center; 
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
    position: absolute;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: 1px solid #cccccc;
    border-radius: 2px;
    margin-right: 10px;
    margin-left: 105px;
    outline: none;
    cursor: pointer;
    align-items: center; 
    &:checked {
        background-color: #41C982;
        border-color: #41C982;
        &:checked::after {
            content: "✔️";
            position: absolute;
            color: #ffffff;
            top: 50%;
            left: 50%;
            transform: translate(-33%, -38%);
            width: 20px;
            height: 20px;
        }
    }
`;

export const CheckboxLabel = styled.label`
    font-size: 18px;
    color: #FFFFFF;
    margin-left: 140px;
    align-items: center; 
    width: 100px;
    margin-top: 3px;
`;
