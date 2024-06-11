import * as S from "src/Components/Check/CheckList/style";
import { useEffect, useState } from "react";
import { ListType } from "src/types/check/check.types";
import { qvickV1Axios } from "src/libs/auth/CustomAxios";
import * as XLSX from 'xlsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AxiosError } from 'axios';
import styled from "styled-components";

const StyledDatePicker = styled(DatePicker)`
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 20px;
`;

const CheckList = () => {
    const [checkList, setCheckList] = useState<ListType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [filteredCheckList, setFilteredCheckList] = useState<ListType[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const fetchCheckList = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await qvickV1Axios.get(`attendance/check`, {
                params: { page: 1, size: 1000 },
            });
            setCheckList(response.data);
            console.log("성공", response.data);
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error("실패", axiosError);
            setError(axiosError);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchCheckList();
    }, []);

    useEffect(() => {
        if (selectedDate && checkList.length > 0) {
            const formattedSelectedDate = selectedDate.toISOString().split('T')[0];
            const filteredList = checkList.filter((item) =>
                item.checkedDate.startsWith(formattedSelectedDate)
            );
            setFilteredCheckList(filteredList);
        }
    }, [selectedDate, checkList]);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const exportToExcel = () => {
        const dataForExcel = filteredCheckList.map(({ stdId, name, room, checkedDate }) => ({ stdId, name, room, checkedDate }));
        const worksheet = XLSX.utils.json_to_sheet(dataForExcel);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Members');
        XLSX.writeFile(workbook, '출석자.xlsx');
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading data: {(error as AxiosError).message}</p>;
    }

    return (
        <S.MainWrap>
            <S.Title>출석인원 관리</S.Title>
            <S.excelButton onClick={exportToExcel}>Excel</S.excelButton>
            <StyledDatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                placeholderText="날짜를 선택하세요"
            />
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
                        {Array.isArray(filteredCheckList) && filteredCheckList.length > 0 ? (
                            filteredCheckList.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.stdId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.room}호</td>
                                    <td>{item.checkedDate}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>데이터가 존재하지 않습니다</td>
                            </tr>
                        )}
                    </S.Tbody>
                </S.Table>
            </S.ListWrap>
        </S.MainWrap>
    );
};

export default CheckList;
