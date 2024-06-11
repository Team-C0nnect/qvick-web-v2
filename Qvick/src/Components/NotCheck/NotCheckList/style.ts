import styled from "styled-components";

export const MainWrap = styled.div`
    display: flex;
    width: 1512px;
    height: 100vh;
    background-color: #EEF2F4;
    transform: translateX(200px) translateY(-983px); 
    flex-direction: column;
    align-items: center;
    /* position: fixed; */
`;
export const ListWrap = styled.div`
    position: relative;
    transform: translateX(0px) translateY(60px);
    width: 1400px;
    height: 670px;
    overflow-x: auto;
`;
export const Title = styled.span`
    color: #2E335D;
    transform: translateX(-550px) translateY(60px);
    width: 220px;
    height: 40px;
    font-size: 25px;
    font-weight: 500;
    position: absolute;
`;
export const excelButton = styled.button`
    background-color: #41C982;
    color: #FFFFFF;
    font-size: 20px;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    transform: translateX(550px) translateY(50px);
`;
export const Table = styled.table`  
    border: 1px #a39485 solid;
    font-size: .9em;
    box-shadow: 0 2px 5px rgba(0,0,0,.25);
    width: 1400px;
    border-collapse: collapse;
    /* border-radius: 5px; */
    overflow: hidden;
`;
export const Thead = styled.thead`
    width: 100%;
    height: 50px;
    display: flex;
    font-weight: bold;
    color: #fff;
    background: #343A47;
    z-index: 1;
    position: sticky;
    top: 0; 
`;
export const Tbody = styled.tbody`
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    white-space: nowrap;
    tr {
        display: flex;  
        justify-content: space-evenly;
        border-bottom: 1px solid #ddd;
        height: 50px; 
    }
    tr:last-child {        
        border-bottom: none;
    }
    td, th {
        padding: 15px; 
        font-size: 20px; 
        gap: 100px;
        margin-left: 100px;
    }
    #tdRed {
        color: red;
    }
`;
export const theadTr = styled.tr`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
export const theadTh = styled.th`
    font-size: 0px;
`;
// table {
//     
//   }