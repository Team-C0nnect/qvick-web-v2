import styled from "styled-components";

export const AllPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #252931;
`;
export const LoginPage = styled.div`
    width: 850px;
    height: 100%;
    background-color: #252931;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
`;
export const LoginTitle = styled.div`
    font-size: 96px;
    font-weight: 700;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 30px;
`;
export const TitleImg = styled.img`
    width: 230px;
    height: 135px;
    margin-bottom: 20px;
`;
export const ContentWrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    height: 200px;
`;

export const Input = styled.input`
    width: 600px;
    height: 75px;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    border-color: #3A3F4A;
    background-color: #3A3F4A;
    padding-left: 20px;
    margin-bottom: 10px;
    color: #FFFFFF;
    &::placeholder {
        font-size: 20px;
        color: #787878;
        background-color: #3A3F4A;
    }
`;
export const LoginButtonWrap = styled.div`
    margin-top: 70px;
`;
export const LoginButton = styled.button`
    width: 600px;
    height: 75px;
    border: none;
    font-weight: 700;
    background-color: #41C982;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    float: right;
    &:disabled{
        background-color: #dadada;
        color: white;
        font-size: 25px;
    }
`;