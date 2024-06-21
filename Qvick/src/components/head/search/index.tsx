import React, { useState, useEffect, ChangeEvent } from "react";
import * as s from "src/components/head/search/Search.Style"; // 검색 바의 스타일 파일 경로에 맞게 수정해야 합니다.
import axios from "axios";
import { qvickV1Axios } from "@src/libs/auth/CustomAxios";
import SearchIcon from "src/Assets/images/Head/search.png";

interface User {
    id: number;
    name: string;
    email: string;
    approval: string;
    userRole: string;
}
  
interface AttendanceInfo {
    checkedDate: string;
}

const Search = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [userInfo, setUserInfo] = useState<User>({ id: 0, name: "", email: "", approval: "", userRole: "" });
    const [attendanceInfo, setAttendanceInfo] = useState<AttendanceInfo[]>([]);
    const [filteredData, setFilteredData] = useState<User[]>([]); // 검색된 데이터를 저장하는 상태 추가
    const url = process.env.REACT_APP_SERVER_URL;

    const searchUser = async () => {
        try {
            // 사용자 정보 조회
            const userResponse = await axios.get<User[]>(`${url}/users?name=${searchTerm}`);
            const userData = userResponse.data;

            setFilteredData(userData);
        } catch (err) {
            console.error(err);
            alert("사용자 정보를 가져오는 도중 오류가 발생했습니다.");
        }
    };

    useEffect(() => {
        if (searchTerm.trim() !== "") {
            searchUser();
        } else {
            setFilteredData([]);
        }
    }, [searchTerm]);

    return (
        <s.SearchBox>
            <s.searchIconWrap>
                <s.SearchIcon/>
                <s.serchIconLine />
            </s.searchIconWrap>
            <s.Search
                className="Search"
                placeholder="학생정보를 입력해주세요."
                value={searchTerm}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                type="text"
            />
            {filteredData.length > 0 && (
                <ul>
                    {filteredData.map(user => (
                        <li key={user.id}>
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                            {/* 필요한 다른 사용자 정보 추가 */}
                        </li>
                    ))}
                </ul>
            )}
        </s.SearchBox>
    );
};

export default Search;
