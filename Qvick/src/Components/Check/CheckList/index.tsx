import * as S from "src/Components/Check/CheckList/style";
import { useEffect, useState } from "react";
import { ListType } from "src/types/check/check.types";
import { qvickV1Axios } from "src/libs/auth/CustomAxios";
import * as XLSX from 'xlsx';

const CheckList = () => {
    const [checkList, setCheckList] = useState<ListType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null); // 타입을 명시적으로 지정

    const fetchCheckList = async() => {
        await qvickV1Axios.get(`attendance/check`,{
          params:{  page: 1,size: 1000},
        })
        .then((response) => {
            setCheckList(response.data);
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
        fetchCheckList();
    }, []);

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(checkList);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Members');
        XLSX.writeFile(workbook, 'check_list.xlsx');
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading data.</p>;
    }

    return (
        <S.MainWrap>
            <S.Title>출석인원 관리</S.Title>
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
                        {Array.isArray(checkList) && checkList.length > 0 ? (
                        checkList.map((item,index) => (
                            <tr key={index}>
                                <td>{item.stdId}</td>
                                <td>{item.name}</td>
                                <td>{item.room}호</td>
                                <td>{item.checkedDate}</td>
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
    );
};

export default CheckList;
