import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "src/components/head/situation/style.scss"; 

export default function Name() {
    const navigate = useNavigate();
    const location = useLocation();
    const { attendanceCount, absentCount } = location.state || { attendanceCount: 0, absentCount: 0 }; // 전달된 출석 인원수와 미출석 인원수 받기
    const [currentDate, setCurrentDate] = useState<string>("");
    const [currentTime, setCurrentTime] = useState<string>("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            setCurrentDate(now.toLocaleDateString("ko-KR", { year: 'numeric', month: 'long', day: 'numeric' }));
            setCurrentTime(now.toLocaleTimeString("ko-KR", { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' }));
        };

        updateDateTime(); 
        const intervalId = setInterval(updateDateTime, 1000); // 매 초 업데이트

        return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리
    }, []);

    useEffect(() => {
        console.log('location.state:', location.state); // 전달된 state 값 확인
    }, [location.state]);

    return (
        <div className="container">
            <div className="display">
                현재 날짜: {currentDate}
            </div>
            <div className="display">
                현재 시간: {currentTime}
            </div>
            <div className="display">
                <span className="checkText">출석 인원수: </span>
                <span className="checkNumber">{attendanceCount}명</span>
            </div>
            <div className="display">
                <span className="notCheckText">미출석 인원수: </span>
                <span className="notCheckNumber">{absentCount}명</span>
            </div>
        </div>
    );
}
