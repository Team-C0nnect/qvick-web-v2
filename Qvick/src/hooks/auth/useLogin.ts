import React, { useState } from "react"; // React와 useState 훅을 가져옴
import { showToast } from "src/libs/toast/swal"; // showToast 함수를 가져옴
import axios from "axios"; // axios 라이브러리를 가져옴
import CONFIG from "src/config/config.json"; // 서버 설정을 가져오는 CONFIG 파일을 가져옴
import token from "src/libs/token/token"; // 토큰 관련 함수를 가져옴
import { LoginResponse } from "src/types/login/login.type"; // 로그인 응답 타입을 가져옴
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/tokens/token.constants"; // 토큰 상수를 가져옴
import { useNavigate } from "react-router-dom"; // 라우팅을 위한 useNavigate 훅을 가져옴

const UseLogin = () => {
    const navigate = useNavigate(); // 페이지 이동을 위한 네비게이트 훅을 초기화
    const [clickName, setClickName] = useState<string>(""); // 클릭된 이름 상태를 관리
    const [idValue, setIdValue] = useState<string>(""); // 아이디 입력 값을 관리
    const [passwordValue, setPasswordValue] = useState<string>(""); // 비밀번호 입력 값을 관리
    const [isShowPswd, setIsShowPswd] = useState(false); // 비밀번호 표시 여부를 관리

    // 아이디 입력 값이 변경될 때 호출되는 함수
    const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIdValue(e.target.value);
    };

    // 비밀번호 입력 값이 변경될 때 호출되는 함수
    const InputChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value);
    };

    // 엔터 키를 눌렀을 때 로그인 버튼을 클릭한 것처럼 동작하는 함수
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if(e.key === "Enter") {
            LoginButton();
        }
    };

    // 로그인 버튼을 클릭했을 때 호출되는 함수
    const LoginButton = async () => {
        if (idValue === "" || passwordValue === "") {
            showToast("error", "아이디와 비밀번호를 입력해주세요."); // 아이디와 비밀번호가 비어있으면 에러 토스트 메시지를 표시
        } else {
            try {
                // 서버에 로그인 요청을 보내기
                await axios.post<LoginResponse>(`${CONFIG.serverUrl}auth/sign-in`, {
                    email: idValue,
                    password: passwordValue
                }).then((res) => {
                    // 응답으로 받은 액세스 토큰과 리프레시 토큰을 저장
                    token.setToken(ACCESS_TOKEN_KEY, res.data.data.accessToken);
                    token.setToken(REFRESH_TOKEN_KEY, res.data.data.refreshToken);
                    showToast("success", "로그인 성공"); // 성공 토스트 메시지를 표시
                    navigate("/main"); // 메인 페이지로 이동
                });
            } catch (error) {
                console.log(error); // 에러를 콘솔에 출력
            }
        }
    };

    return {
        idValue,
        isShowPswd,
        passwordValue,
        clickName,
        setClickName,
        handleKeyDown,
        setIdValue,
        setIsShowPswd,
        InputChange,
        LoginButton,
        InputChangePw,
    };
}

export default UseLogin;
