import { useNavigate, useLocation } from "react-router-dom"; // 라우팅 관련 훅 불러오기
import React, { useEffect, useState } from "react"; // React 및 필요한 훅 불러오기
import "src/components/head/situation/style.scss"; // 스타일 시트 불러오기

// Name 컴포넌트 정의
export default function Name() {
    const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅 사용
    const location = useLocation(); // 현재 위치 정보를 얻기 위한 useLocation 훅 사용
    const { attendanceCount, absentCount } = location.state || { attendanceCount: 0, absentCount: 0 };
    // 전달된 출석 인원수와 미출석 인원수 받기 (기본값 0)

    const [currentDate, setCurrentDate] = useState<string>(""); // 현재 날짜 상태
    const [currentTime, setCurrentTime] = useState<string>(""); // 현재 시간 상태

    // 날짜와 시간을 업데이트하는 함수
    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date(); // 현재 날짜와 시간 가져오기
            setCurrentDate(now.toLocaleDateString("ko-KR", { year: 'numeric', month: 'long', day: 'numeric' }));
            // 한국어 형식으로 날짜 설정
            setCurrentTime(now.toLocaleTimeString("ko-KR", { hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' }));
            // 한국어 형식으로 시간 설정
        };

        updateDateTime(); // 컴포넌트가 처음 렌더링될 때 날짜와 시간 설정
        const intervalId = setInterval(updateDateTime, 1000); // 1초마다 날짜와 시간 업데이트

        return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리
    }, []);

    // location.state에 있는 값이 변경될 때마다 콘솔에 출력
    useEffect(() => {
        console.log('location.state:', location.state);
    }, [location.state]);

    // 컴포넌트 렌더링
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
