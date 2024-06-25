import React, { useEffect, useState } from "react";
import { notCheckListItem, notCheckListResponse } from "@src/types/notCheck/notCheck.types";
import { qvickV1Axios } from "src/libs/auth/CustomAxios";
import * as XLSX from 'xlsx';
import { AxiosError } from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import 'src/assets/scss/notCheckList/style.scss';

const NotCheckList = () => {
    const [notCheckList, setNotCheckList] = useState<notCheckListItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [absentCount, setAbsentCount] = useState(0); // 미출석 인원수 상태 추가

    const fetchNotCheckList = async () => {
        setIsLoading(true);
        setError(null);
    
        try {
            const response = await qvickV1Axios.get<notCheckListResponse>(`user-admin/non-check`, {
                params: { page: 1, size: 100 },
            });
            const data = response.data.data
                .filter((item: notCheckListItem) => !item.checked)
                .sort((a: notCheckListItem, b: notCheckListItem) => a.stdId - b.stdId);
            setNotCheckList(data);
            setAbsentCount(data.length); // 미출석 인원수 설정
            console.log("Success", data);
        } catch (error) {
            const axiosError = error as AxiosError;
            setError(axiosError);
            console.error("Failed", axiosError);
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
                <table className="table">
                    <thead className="thead">
                        <tr className="thead-tr">
                            <th>학번</th>
                            <th>이름</th>
                            <th>기숙사</th>
                            <th>출석시간</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {Array.isArray(notCheckList) && notCheckList.length > 0 ? (
                            notCheckList.map((item, index) => (
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
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NotCheckList;
