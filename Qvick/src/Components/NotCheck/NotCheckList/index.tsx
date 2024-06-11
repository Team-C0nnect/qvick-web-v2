import React, { useEffect, useState } from "react";
import * as S from "src/Components/NotCheck/NotCheckList/style";
import { notCheckListType } from "@src/types/notCheck/notCheck.types";
import { qvickV1Axios } from "src/libs/auth/CustomAxios";
import * as XLSX from 'xlsx';

const NotCheckList = () => {
    const [notCheckList, setNotCheckList] = useState<notCheckListType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchNotCheckList = async() => {
        await qvickV1Axios.get(`attendance/non-check`,{
          params:{  page: 1,size: 1000},
        })
        .then((response) => {
            setNotCheckList(response.data);
            console.log("성공");
        })
        .catch((error) => {
            console.error("실패", error);
            setError(error);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };

    useEffect(() => {
        fetchNotCheckList();
    }, []);

    const exportToExcel = () => {
        const dataForExcel = notCheckList.map(({ stdId, room, name }) => ({ stdId, room, name }));
        const worksheet = XLSX.utils.json_to_sheet(dataForExcel);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Members');
        XLSX.writeFile(workbook, '미출석자.xlsx');
    };
    

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading data.</p>;
    }

    return (
        <S.MainWrap>
            <S.Title>미출석 관리</S.Title>
            <S.excelButton onClick={exportToExcel}>Excel</S.excelButton>
            <S.ListWrap>
                <S.Thead>
                    <S.theadTr>
                        <th>학번</th>
                        <th>이름</th>
                        <th>기숙사</th>
                        <th>출석시간</th>
                    </S.theadTr>
                </S.Thead>
                <S.Table>
                    <S.Tbody>
                        {Array.isArray(notCheckList) && notCheckList.length > 0 ? (
                        notCheckList.map((item,index) => (
                            <tr key={index}>
                                <td>{item.stdId}</td>
                                <td>{item.name}</td>
                                <td>{item.room}호</td>
                                <td id="tdRed">미출석</td>
                            </tr>
                        ))
                        ) : (
                            <tr>
                                <td colSpan={4}>No items to display</td>
                            </tr>
                        )}
                    </S.Tbody>
                </S.Table>
            </S.ListWrap>
        </S.MainWrap>
    )
}

export default NotCheckList;
