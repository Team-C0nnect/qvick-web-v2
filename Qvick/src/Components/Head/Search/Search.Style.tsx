import styled from "styled-components";

export const SearchBox = styled.div`
    width: 1250px;
    border-bottom: 1px solid #D9D9D9;
    height: 80px;
`;
export const Search = styled.input`
    position: absolute;
    top: 27px;
    left: 300px;
    font-size: 20px;
    border-top: #FFFFFF;
    border-left: #FFFFFF;
    border-right: #FFFFFF;
    border-bottom: #FFFFFF;
`;
export const ResultWrap = styled.div`
`;
export const User = styled.div`
    position: absolute;
    left: 1100px;
    top: 30px;
    font-size: 20px;
`;
export const UserCheck = styled.div`
    position: absolute;
    left: 1300px;
    top: 13px;
`;
export const SearchImg = styled.img`
  position: absolute;
`;
export const SearchIcon = styled.input`
    position: absolute;
    cursor: pointer;
    background-color: #FFF;
    top: 23px;
    left: 242px;
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    border: 1px solid #374C70;
    border-radius: 50%;
`;
export const serchIconLine = styled.div`
    position: absolute;
    cursor: pointer;
    top: 49px;
    left: 260px;
    background-color: #374C70;
    transform: rotate( 50deg );
    width: 13px;
    height: 1px;
    flex-shrink: 0;
    stroke-width: 1px;
    stroke: #1A9A18;
`;    