import React, { useEffect, useState } from "react";
import * as S from "src/Components/Member/MemberList/style"
import { MemberType } from "src/types/Member/member.type";
import { qvickV1Axios } from "src/libs/auth/CustomAxios";
import * as XLSX from 'xlsx';

const MemberList = () => {
    const [memberList, setMemberList] = useState<MemberType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchMemberList = async() => {
        await qvickV1Axios.get(`user-admin/student-all`, {
            params:{ page: 1, size: 1000},
        })
        .then((response) => {
            setMemberList(response.data);
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
        fetchMemberList();
    },[]);

    const exportToExcel = () => {
        const dataForExcel = memberList.map(({ stdId, name, room})=> ({stdId, name, room}));
        const worksheet = XLSX.utils.json_to_sheet(dataForExcel);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Members');
        XLSX.writeFile(workbook, '전체인원.xlsx');
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error loading data.</p>;
    }

     return (
        <S.MainWrap>
            <S.Title>구성원 관리</S.Title>
            <S.excelButton onClick={exportToExcel}>Excel</S.excelButton>
            <S.ListWrap>
                <S.Thead>
                    <S.theadTr>
                        <th>학번</th>
                        <th>이름</th>
                        <th>기숙사</th>
                    </S.theadTr>
                </S.Thead>
                <S.Table>
                    <S.Tbody>
                    {Array.isArray(memberList) && memberList.length > 0 ? (
                        memberList.map((item,index) => (
                            <tr key={index}>
                                <td>{item.stdId}</td>
                                <td>{item.name}</td>
                                <td>{item.room}호</td>
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

export default MemberList