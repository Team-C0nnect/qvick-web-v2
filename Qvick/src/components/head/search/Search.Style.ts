import styled from "styled-components";

export const SearchBox = styled.div`
    width: 1250px;
    border-bottom: 1px solid #D9D9D9;
    height: 80px;
    display: flex;
`;
export const searchIconWrap = styled.div`
    display: flex;
`
export const SearchIcon = styled.button`
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
export const Search = styled.input`
    position: absolute;
    width: 1000px;
    top: 27px;
    left: 300px;
    font-size: 20px;
    border-top: #FFFFFF;
    border-left: #FFFFFF;
    border-right: #FFFFFF;
    border-bottom: #FFFFFF;
`;