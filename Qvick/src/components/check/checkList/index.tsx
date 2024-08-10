import React, { useEffect, useState } from "react"; // React와 필요한 훅을 가져옴
import { ListType } from "src/types/check/check.types"; // 체크 리스트 타입을 가져옴
import { qvickV1Axios } from "src/libs/auth/CustomAxios"; // 커스텀 Axios 인스턴스를 가져옴
import * as XLSX from 'xlsx'; // 엑셀 파일 생성을 위한 라이브러리
import DatePicker from 'react-datepicker'; // 날짜 선택 컴포넌트를 가져옴
import 'react-datepicker/dist/react-datepicker.css'; // 날짜 선택 컴포넌트의 스타일을 가져옴
import { AxiosError } from 'axios'; // Axios 에러 처리를 위한 타입을 가져옴
import styled from "styled-components"; // 스타일드 컴포넌트를 사용하기 위한 styled 가져옴
import 'src/assets/scss/checkList/style.scss'; // 체크 리스트 페이지의 스타일을 가져옴
import { useNavigate } from "react-router-dom"; // 네비게이션 훅을 가져옴

// 스타일드 컴포넌트로 DatePicker의 스타일을 커스터마이징
const StyledDatePicker = styled(DatePicker)`
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 20px;
`;

// CheckList 컴포넌트를 정의
const CheckList = () => {
    const [checkList, setCheckList] = useState<ListType['data'][]>([]); // 체크 리스트 상태
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태
    const [error, setError] = useState<Error | null>(null); // 에러 상태
    const [filteredCheckList, setFilteredCheckList] = useState<ListType['data'][]>([]); // 필터링된 체크 리스트 상태
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date()); // 선택된 날짜 상태
    const [searchTerm, setSearchTerm] = useState<string>(''); // 검색어 상태
    const navigate = useNavigate(); // 네비게이션 훅을 사용

    // 서버에서 체크 리스트 데이터를 가져오는 함수
    const fetchCheckList = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await qvickV1Axios.get(`user-admin/check`, {
                params: { page: 1, size: 1000 },
            });

            if (response.data && response.data.data) {
                const sortedData = response.data.data.sort((a: ListType['data'], b: ListType['data']) => parseInt(a.stdId) - parseInt(b.stdId)); // 학번 기준 정렬
                setCheckList(sortedData); // 체크 리스트 상태를 설정
                console.log("성공", sortedData);
            } else {
                throw new Error("Unexpected response structure"); // 예상치 못한 응답 구조일 때 에러 발생
            }
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error("실패", axiosError);
            setError(axiosError); // 에러 상태를 설정
        } finally {
            setIsLoading(false); // 로딩 상태 해제
        }
    };

    // 컴포넌트가 마운트될 때 fetchCheckList 호출
    useEffect(() => {
        fetchCheckList();
    }, []);

    // 필터링 로직을 적용하는 함수
    useEffect(() => {
        const applyFilters = () => {
            let filteredList = checkList;

            // 선택된 날짜에 따른 필터링
            if (selectedDate) {
                const formattedSelectedDate = selectedDate.toISOString().split('T')[0];
                filteredList = filteredList.filter((item) =>
                    item.checkedDate.startsWith(formattedSelectedDate)
                );
            }

            // 검색어에 따른 필터링
            if (searchTerm) {
                const lowerCaseSearchTerm = searchTerm.toLowerCase();
                filteredList = filteredList.filter((item) =>
                    item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                    item.stdId.toLowerCase().includes(lowerCaseSearchTerm) ||
                    item.room.toLowerCase().includes(lowerCaseSearchTerm)
                );
            }

            setFilteredCheckList(filteredList); // 필터링된 체크 리스트 상태를 설정
        };

        applyFilters();
    }, [selectedDate, searchTerm, checkList]);

    // 날짜 선택 핸들러
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    // 검색어 입력 핸들러
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    // 엑셀 파일로 내보내는 함수
    const exportToExcel = () => {
        const dataForExcel = filteredCheckList.map(({ stdId, name, room, checkedDate, checked }) => ({
            "학번": stdId,
            "이름": name,
            "기숙사": room,
            "출석시간": checkedDate,
            "출석여부": checked
        }));
        const worksheet = XLSX.utils.json_to_sheet(dataForExcel); // 데이터로 시트 생성
        const workbook = XLSX.utils.book_new(); // 새로운 엑셀 파일 생성
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Members'); // 시트를 파일에 추가
        XLSX.writeFile(workbook, '출석자.xlsx'); // 엑셀 파일로 저장
    };

    // 로딩 상태일 때 표시할 내용
    if (isLoading) {
        return <p>Loading...</p>;
    }

    // 에러가 발생했을 때 표시할 내용
    if (error) {
        return <p>Error loading data: {(error as AxiosError).message}</p>;
    }

    // 필터링된 출석 인원의 수를 계산
    const attendanceCount = filteredCheckList.length;

    // 필터링된 체크 리스트를 테이블로 표시
    return (
        <div className="main-wrap">
            <h1 className="title">출석인원 관리</h1>
            <button className="excel-buttons" onClick={exportToExcel}>Excel</button>
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
