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
export const LoginTtitle = styled.div`
    margin-top: 97px;
    font-size: 96px;
    font-weight: 700;
    color: #FFFFFF;
    text-align: center;
`;
export const ContentWrap = styled.div`
    margin-top: 26px;
    flex: 0;
`;
export const LoginInputWrap = styled.div`
    display: flex;
    border-radius: 5px;
    padding: 16px;
    margin-top: 68px;
    margin-bottom: 58px;
    margin-left: 40px;
    background-color: #3A3F4A;
    border: 1px solid #3A3F4A;
    width: 700px;
    height: 35px;
    align-items: center;
    box-shadow: 2px 2px 2px 2px #1D1F25;
`;
export const PwInputWrap = styled.div`
    display: flex;
    border-radius: 5px;
    padding: 16px;
    margin-top: 8px;
    margin-left: 40px;
    background-color: #3A3F4A;
    border: 1px solid #3A3F4A;
    width: 700px;
    height: 35px;
    align-items: center;
    box-shadow: 2px 2px 2px 2px #1D1F25;
`;
export const InputWrap = styled.div`
    &:focus-within {
        border: 1px solid #868afc;
    }
`;
export const Input = styled.div`
    width: 865px;
    outline: none;
    border: none;
    height: 37px;
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
export const Login = styled.div`
    border-top: 2px solid #3A3F4A;
    margin-top: 70px;
`;
export const LoginButton = styled.div`
    width: 230px;
    height: 68px;
    border: none;
    font-weight: 700;
    background-color: #58B7D3;
    border-radius: 15px;
    color: white;
    margin-bottom: 16px;
    margin-top: 50px;
    margin-right: 60px;
    cursor: pointer;
    float: right;
    &:disabled{
        background-color: #dadada;
        color: white;
        font-size: 25px;
    }
`;
export const LostPw = styled.div`
    color: #3A3F4A;
    margin-bottom: 10px;
    margin-top: 70px;
    margin-left: 100px;
    font-size: 25px;
    cursor: pointer;
    position: absolute;
`;