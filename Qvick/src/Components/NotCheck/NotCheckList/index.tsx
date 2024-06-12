import React, { useEffect, useState } from "react";
import { notCheckListType } from "@src/types/notCheck/notCheck.types";
import { qvickV1Axios } from "src/libs/auth/CustomAxios";
import * as XLSX from 'xlsx';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AxiosError } from 'axios';
import styled from "styled-components";
import 'src/Assets/Scss/notCheckList/style.scss';

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

    const fetchNotCheckList = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await qvickV1Axios.get(`user-admin/non-check`, {
                params: { page: 1, size: 100 },
            });
            const data = response.data.filter((item: notCheckListType) => !item.checked);
            setNotCheckList(data);
            console.log("성공", data);
        } catch (error) {
            const axiosError = error as AxiosError;
            setError(axiosError);
            console.error("실패", axiosError);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchNotCheckList();
    }, []);

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
        <div className="main-wrap">
            <h1 className="title">미출석 관리</h1>
            <button className="excel-button" onClick={exportToExcel}>Excel</button>
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
                        {Array.isArray(notCheckList) && notCheckList.length > 0 ? (
                            notCheckList.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.stdId}</td>
                                    <td>{item.name}</td>
                                    <td>{item.room}호</td>
                                    <td>{item.checked}</td>
                                    <td id="tdRed">미출석</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>데이터가 존재하지 않습니다.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NotCheckList;
