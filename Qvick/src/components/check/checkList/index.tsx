import React, { useEffect, useState } from "react";
import { ListType } from "src/types/check/check.types";
import { qvickV1Axios } from "src/libs/auth/CustomAxios";
import * as XLSX from 'xlsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AxiosError } from 'axios';
import styled from "styled-components";
import 'src/assets/scss/checkList/style.scss';
import { useNavigate } from "react-router-dom";

const StyledDatePicker = styled(DatePicker)`
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 20px;
`;

const CheckList = () => {
    const [checkList, setCheckList] = useState<ListType['data'][]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [filteredCheckList, setFilteredCheckList] = useState<ListType['data'][]>([]);
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useNavigate();

    const fetchCheckList = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await qvickV1Axios.get(`user-admin/check`, {
                params: { page: 1, size: 1000 },
            });

            if (response.data && response.data.data) {
                const sortedData = response.data.data.sort((a: ListType['data'], b: ListType['data']) => parseInt(a.stdId) - parseInt(b.stdId)); // 학번 기준 정렬
                setCheckList(sortedData);
                console.log("성공", sortedData);
            } else {
                throw new Error("Unexpected response structure");
            }
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
        const applyFilters = () => {
            let filteredList = checkList;

            if (selectedDate) {
                const formattedSelectedDate = selectedDate.toISOString().split('T')[0];
                filteredList = filteredList.filter((item) =>
                    item.checkedDate.startsWith(formattedSelectedDate)
                );
            }

            if (searchTerm) {
                const lowerCaseSearchTerm = searchTerm.toLowerCase();
                filteredList = filteredList.filter((item) =>
                    item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                    item.stdId.toLowerCase().includes(lowerCaseSearchTerm) ||
                    item.room.toLowerCase().includes(lowerCaseSearchTerm)
                );
            }

            setFilteredCheckList(filteredList);
        };

        applyFilters();
    }, [selectedDate, searchTerm, checkList]);

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const exportToExcel = () => {
        const dataForExcel = filteredCheckList.map(({ stdId, name, room, checkedDate, checked }) => ({ stdId, name, room, checkedDate, checked }));
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

    const attendanceCount = filteredCheckList.length;

    return (
        <div className="main-wrap">
            <h1 className="title">출석인원 관리</h1>
            <button className="excel-button" onClick={exportToExcel}>Excel</button>
            <StyledDatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                placeholderText="날짜를 선택하세요"
            />
            <input
                type="text"
                placeholder="검색 (이름 또는 학번)"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
            <div className="list-wrap">
                <thead className="thead">
                <tr className="thead-tr">
                    <th>학번</th>
                    <th>이름</th>
                    <th>기숙사</th>
                    <th>출석시간</th>
                </tr>
                </thead>
                <table className="table">
                    <tbody className="tbody">
                    {Array.isArray(filteredCheckList) && filteredCheckList.length > 0 ? (
                        filteredCheckList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.stdId}</td>
                                <td>{item.name}</td>
                                <td>{item.room}호</td>
                                <td>{new Date(item.checkedDate).toLocaleTimeString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4}>데이터가 존재하지 않습니다</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CheckList;
