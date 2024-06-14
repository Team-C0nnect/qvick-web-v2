import React, { useEffect, useState, useMemo } from "react";
import { MemberType } from "src/types/Member/member.type";
import { qvickV1Axios } from "src/libs/auth/CustomAxios";
import * as XLSX from 'xlsx';
import "src/Assets/Scss/memberList/style.scss"

const MemberList = () => {
    const [memberList, setMemberList] = useState<MemberType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchMemberList = async () => {
        try {
            const response = await qvickV1Axios.get('user-admin/student-all', {
                params: { page: 1, size: 1000 },
            });
            const sortedData = response.data.sort((a: MemberType, b: MemberType) => a.stdId - b.stdId); // 학번 기준 정렬
            setMemberList(sortedData);
            console.log("성공");
        } catch (error) {
            if (error instanceof Error) {
                setError(error);
            } else {
                setError(new Error("Unknown error"));
            }
            console.error("실패", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchMemberList();
    }, []);

    const exportToExcel = () => {
        const dataForExcel = memberList.map(({ stdId, name, room }) => ({ stdId, name, room })); // 데이터 불러오기
        const worksheet = XLSX.utils.json_to_sheet(dataForExcel);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Members');
        XLSX.writeFile(workbook, '전체인원.xlsx'); // Excel 파일 이름
    };

    const sortedMemberList = useMemo(() => memberList, [memberList]);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error loading data: {error.message}</p>;
    }

    return (
        <div className="main-wrap">
            <span className="title">구성원 관리</span>
            <button className="excel-button" onClick={exportToExcel}>Excel</button>
            <div className="list-wrap">
                <Table data={sortedMemberList} />
            </div>
        </div>
    );
};

const Table = ({ data }: { data: MemberType[] }) => (
    <>
        <div className="thead">
            <div className="thead-tr">
                <div>학번</div>
                <div>이름</div>
                <div>기숙사</div>
            </div>
        </div>
        <table className="table">
            <tbody className="tbody">
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.stdId}</td>
                            <td>{item.name}</td>
                            <td>{item.room}호</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No items to display</td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
);

export default MemberList;
