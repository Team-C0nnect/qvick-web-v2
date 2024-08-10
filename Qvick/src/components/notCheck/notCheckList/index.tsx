import React, { useEffect, useState } from "react"; // React와 필요한 훅들을 가져옴
import { notCheckListItem, notCheckListResponse } from "@src/types/notCheck/notCheck.types"; // 타입 정의를 가져옴
import { qvickV1Axios } from "src/libs/auth/CustomAxios"; // 커스텀 Axios 인스턴스를 가져옴
import * as XLSX from 'xlsx'; // Excel 파일 작업을 위한 XLSX 라이브러리를 가져옴
import { AxiosError } from 'axios'; // Axios에서 에러 타입을 가져옴
import 'react-datepicker/dist/react-datepicker.css'; // Datepicker 스타일을 가져옴
import 'src/assets/scss/notCheckList/style.scss'; // 스타일 시트를 가져옴

const NotCheckList = () => {
    const [notCheckList, setNotCheckList] = useState<notCheckListItem[]>([]); // 미출석자 목록을 저장하는 상태
    const [filteredNotCheckList, setFilteredNotCheckList] = useState<notCheckListItem[]>([]); // 필터링된 미출석자 목록 상태
    const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 상태를 관리
    const [error, setError] = useState<Error | null>(null); // 에러 상태를 관리
    const [absentCount, setAbsentCount] = useState(0); // 미출석 인원 수를 저장하는 상태
    const [searchTerm, setSearchTerm] = useState(""); // 검색어 상태

    // 서버에서 미출석자 목록을 가져오는 비동기 함수
    const fetchNotCheckList = async () => {
        setIsLoading(true); // 로딩 상태를 true로 설정
        setError(null); // 에러 상태를 초기화

        try {
            // 서버에 GET 요청을 보내어 데이터를 가져옵니다.
            const response = await qvickV1Axios.get<notCheckListResponse>(`user-admin/non-check`, {
                params: { page: 1, size: 100 }, // 페이지와 사이즈를 설정
            });

            // 응답 데이터를 필터링하여 미출석자 목록을 정렬하고 상태에 저장
            const data = response.data.data
                .filter((item: notCheckListItem) => !item.checked) // 체크되지 않은 항목만 필터링
                .sort((a: notCheckListItem, b: notCheckListItem) => a.stdId - b.stdId); // 학번 순으로 정렬
            setNotCheckList(data);
            setFilteredNotCheckList(data);
            setAbsentCount(data.length); // 미출석 인원 수를 설정
            console.log("Success", data);
        } catch (error) {
            const axiosError = error as AxiosError; // 에러를 AxiosError로 캐스팅
            setError(axiosError); // 에러 상태를 업데이트
            console.error("Failed", axiosError);
        } finally {
            setIsLoading(false); // 로딩 상태를 false로 설정
        }
    };

    // 컴포넌트가 마운트될 때 미출석자 목록을 가져옴
    useEffect(() => {
        fetchNotCheckList();
    }, []);

    // 검색어가 변경될 때마다 필터링된 미출석자 목록을 업데이트
    useEffect(() => {
        const filteredData = notCheckList.filter((item) =>
            item.name.includes(searchTerm) || item.stdId.toString().includes(searchTerm) // 이름 또는 학번에 검색어가 포함된 항목만 필터링
        );
        setFilteredNotCheckList(filteredData);
    }, [searchTerm, notCheckList]);

    // 검색어 입력이 변경될 때 호출되는 함수
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value); // 검색어 상태를 업데이트
    };

    // 필터링된 데이터를 Excel 파일로 내보내는 함수
    const exportToExcel = () => {
        const dataForExcel = filteredNotCheckList.map(({ stdId, name, room }) => ({
            "학번": stdId,
            "번호": name,
            "기숙사": room
        }));
        const worksheet = XLSX.utils.json_to_sheet(dataForExcel); // 데이터를 시트로 변환
        const workbook = XLSX.utils.book_new(); // 새로운 워크북을 생성
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Members'); // 시트를 워크북에 추가
        XLSX.writeFile(workbook, '미출석자.xlsx'); // Excel 파일로 저장
    };

    // 데이터 로딩 중일 때 표시할 내용
    if (isLoading) {
        return <p>Loading...</p>;
    }

    // 데이터 로딩 중 에러가 발생했을 때 표시할 내용
    if (error) {
        return <p>Error loading data.</p>;
    }

    return (
        <div className="main-wrap"> {/* 전체 레이아웃을 감싸는 컨테이너 */}
            <h1 className="title">미출석 관리</h1> {/* 페이지 제목 */}
            <input
                type="text"
                placeholder="검색 (이름 또는 학번)"
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
            <button className="excel-button" onClick={exportToExcel}>Excel</button> {/* Excel 파일 내보내기 버튼 */}
            <div className="list-wrap"> {/* 미출석자 목록을 감싸는 컨테이너 */}
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
                    {/* 필터링된 미출석자 목록을 렌더링 */}
                    {Array.isArray(filteredNotCheckList) && filteredNotCheckList.length > 0 ? (
                        filteredNotCheckList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.stdId}</td> {/* 학번 */}
                                <td>{item.name}</td> {/* 이름 */}
                                <td>{item.room}호</td> {/* 기숙사 호수 */}
                                <td id="tdRed">미출석</td> {/* 출석 상태 */}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4}>데이터가 존재하지 않습니다.</td> {/* 데이터가 없을 때 표시할 내용 */}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default NotCheckList;