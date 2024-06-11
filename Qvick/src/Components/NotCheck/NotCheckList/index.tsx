import React, { useEffect, useState } from "react";
import * as S from "src/Components/NotCheck/NotCheckList/style";
import { notCheckListType } from "@src/types/notCheck/notCheck.types";
import { qvickV1Axios } from "src/libs/auth/CustomAxios";
import * as XLSX from 'xlsx';
import DatePicker from 'react-datepicker';
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

const NotCheckList = () => {
    const [notCheckList, setNotCheckList] = useState<notCheckListType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [filteredNotCheckList, setFilteredNotCheckList] = useState<notCheckListType[]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    const fetchNotCheckList = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await qvickV1Axios.get(`attendance/non-check`, {
                params: { page: 1, size: 1000 },
            });
            setNotCheckList(response.data);
            console.log("성공", response.data);
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error("실패", axiosError);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchNotCheckList();
    }, []);

    useEffect(() => {
        if (selectedDate && notCheckList.length > 0) {
            const formattedSelectedDate = selectedDate.toISOString().split('T')[0];
            const filteredList = notCheckList.filter(
                (item) => item.checkedDate && item.checkedDate.startsWith(formattedSelectedDate)
            );
            setFilteredNotCheckList(filteredList);
        }
    }, [selectedDate, notCheckList]);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const exportToExcel = () => {
        const dataForExcel = notCheckList.map(({ stdId, name, room }) => ({ stdId, name, room }));
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
                        {Array.isArray(filteredNotCheckList) && filteredNotCheckList.length > 0 ? (
                            filteredNotCheckList.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.stdId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.room}호</td>
                                    <td id="tdRed">미출석</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>데이터가 존재하지 않습니다.</td>
                            </tr>
                        )}
                    </S.Tbody>
                </S.Table>
            </S.ListWrap>
        </S.MainWrap>
    );
};

export default NotCheckList;
