import React, { useEffect, useState, useMemo } from "react"; // React와 관련된 훅들을 가져옴
import { MemberType } from "src/types/member/member.type"; // 멤버 타입을 정의한 파일을 가져옴
import { qvickV1Axios } from "src/libs/auth/CustomAxios"; // 커스텀 Axios 인스턴스를 가져옴
import { AxiosError } from 'axios'; // AxiosError 타입을 가져옴
import * as XLSX from 'xlsx'; // Excel 파일 작성을 위한 XLSX 라이브러리를 가져옴
import "src/assets/scss/memberList/style.scss"; // 스타일 시트를 가져옴

const MemberList = () => {
    // 상태 변수들: 멤버 리스트, 로딩 상태, 에러 상태, 검색어 상태를 관리
    const [memberList, setMemberList] = useState<MemberType['data'][]>([]); // 구성원 목록을 저장하는 상태
    const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 상태를 관리
    const [error, setError] = useState<Error | null>(null); // 에러 상태를 관리
    const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태

    // 멤버 리스트를 서버에서 가져오는 함수
    const fetchMemberList = async () => {
        setIsLoading(true); // 데이터를 가져오기 시작할 때 로딩 상태를 true로 설정
        setError(null); // 에러 상태 초기화
        try {
            const response = await qvickV1Axios.get('user-admin/student-all', {
                params: { page: 1, size: 1000 }, // 페이지와 사이즈 설정
            });

            const data = response.data.data; // 응답 데이터에서 실제 데이터를 추출
            const sortedData = data.sort((a: MemberType['data'], b: MemberType['data']) => Number(a.stdId) - Number(b.stdId)); // 학번 기준 정렬
            setMemberList(sortedData); // 정렬된 데이터를 상태로 설정
            console.log("성공");
        } catch (error) {
            const axiosError = error as AxiosError; // AxiosError로 타입 단언
            console.error("실패", axiosError);
            setError(axiosError); // 에러 상태 설정
        } finally {
            setIsLoading(false); // 데이터를 가져온 후 로딩 상태를 false로 설정
        }
    };

    // 컴포넌트가 마운트될 때 fetchMemberList 호출
    useEffect(() => {
        fetchMemberList();
    }, []);

    // 멤버 리스트를 엑셀 파일로 내보내는 함수
    const exportToExcel = () => {
        const dataForExcel = memberList.map(({ stdId, name, room }) => ({
            "학번": stdId,
            "이름": name,
            "기숙사": room
        })); // 필요한 데이터만 추출
        const worksheet = XLSX.utils.json_to_sheet(dataForExcel);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Members');
        XLSX.writeFile(workbook, '전체인원.xlsx'); // 엑셀 파일 이름 설정
    };

    // useMemo를 사용하여 memberList가 변경될 때만 filteredList 및 sortedMemberList를 업데이트
    const filteredList = useMemo(() => {
        return memberList.filter(member =>
            member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            member.stdId.includes(searchTerm) ||
            member.room.includes(searchTerm)
        );
    }, [memberList, searchTerm]);

    const sortedMemberList = useMemo(() => filteredList, [filteredList]);

    // 로딩 상태일 때 표시할 내용
    if (isLoading) {
        return <p>Loading...</p>;
    }
    // 에러가 발생했을 때 표시할 내용
    if (error) {
        return <p>Error loading data: {error.message}</p>;
    }

    // 데이터가 로드되고 정렬된 멤버 리스트를 테이블로 표시
    return (
        <div className="main-wrap">
            <span className="title">구성원 관리</span>
            <input
                type="text"
                placeholder="검색 (이름 또는 학번)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="excel-button" onClick={exportToExcel}>Excel</button>
            <div className="list-wrap">
                <Table data={sortedMemberList} />
            </div>
        </div>
    );
};

// 테이블 컴포넌트
const Table = ({ data }: { data: MemberType['data'][] }) => (
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
                    <td colSpan={3}>데이터가 존재하지 않습니다.</td>
                </tr>
            )}
            </tbody>
        </table>
    </>
);

export default MemberList;
