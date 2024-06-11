import styled from "styled-components";

export const SideWrap = styled.div`
    display: flex;
    width: 200px;
    height: 100vh;
    background-color: #343A47;
`;
export const SideM = styled.div`
    width: 200px;
    height: 100vh;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-size: 25px;
    font-weight: 400;
    align-items: center;
    color: #FFFFFF;
    
`;
export const moveWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    gap: 17px;
    width: 155px;
    height: 55px;
    background-color: #314162;
    border-left: 3px solid #41C982;
    line-height: 60px;
    span {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px; 
        text-align: center;
    }
    img {
        width: 30px;
        height: 30px;
    }
`;
