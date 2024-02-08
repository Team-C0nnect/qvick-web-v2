import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import axios from "axios";

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

export default function Search() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [userInfo, setUserInfo] = useState<User>({ id: 0, name: "", email: "", approval: "", userRole: "" });
    const [attendanceInfo, setAttendanceInfo] = useState<AttendanceInfo[]>([]);
    const url =  process.env.REACT_APP_SERVER_URL;

    const searchUser = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            try {
                // 사용자 정보 조회
                const userResponse = await axios.get<User[]>(`${url}/users?name=${searchTerm}`);
                const userData = userResponse.data[0]; // 가정: 첫 번째로 검색된 사용자를 선택

                // 출석 정보 조회
                if (userData) {
                  const attendanceResponse = await axios.get<AttendanceInfo[]>(`${url}/attendance?userId=${userData.id}`);
                  const attendanceData = attendanceResponse.data;

                  setUserInfo(userData);
                  setAttendanceInfo(attendanceData);
                }
            } catch (err) {
                console.error(err);
                alert("사용자 정보 또는 출석 정보를 가져오는 도중 오류가 발생했습니다.");
            }
        }
    }

    useEffect(() => {
        // userInfo가 변경될 때마다 실행되는 부분(방어코드입니다)
        console.log("User Info Updated:", userInfo);
    }, [userInfo]);
    
    return (
        <div className="SearchBox">
                <input
                    className="Search"
                    placeholder="학생정보를 입력해주세요."
                    value={searchTerm}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    type="text"
                    onKeyDown={searchUser}
                />
                {Object.keys(userInfo).length !== 0 && (
                    <div className="ResultWrap">
                        <div className="User">{userInfo.name}</div>
                        <div className="UserCheck">
                            {attendanceInfo.length > 0 ? (
                                <p>{`출석일: ${attendanceInfo.map(item => item.checkedDate).join(', ')}`}</p>
                            ) : (
                                <p>출석 기록이 없습니다.</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
    )
}