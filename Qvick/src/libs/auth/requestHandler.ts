// 이 타입은 Axios 요청 설정의 타입을 정의
import { AxiosRequestConfig } from "axios"; // Axios 라이브러리에서 AxiosRequestConfig 타입을 가져옴

// 토큰 키 상수를 가져옴 이 상수들은 액세스 토큰, 요청 토큰, 리프레시 토큰의 키를 정의
import {
    ACCESS_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "src/constants/tokens/token.constants";

// Token 클래스를 가져옴 이 클래스는 쿠키를 사용하여 토큰을 관리하는 기능을 제공
import token from "src/libs/token/token";

// 요청을 처리하는 함수 Axios 요청 설정을 받아서 토큰을 헤더에 추가하고, 세션이 만료된 경우 사용자에게 알려줌
const requestHandler = (config: AxiosRequestConfig): AxiosRequestConfig => {
    // 리프레시 토큰이 존재하지 않는 경우
    if (token.getToken(REFRESH_TOKEN_KEY) === undefined) {
        // 사용자에게 세션이 만료되었음을 알림
        alert("세션만료");
        // 로그인 페이지로 리디렉션
        window.location.href = "/login";
        // 기존 요청 설정을 그대로 반환
        return config;
    }

    // 요청 헤더에 토큰을 추가
    config.headers = {
        ...config.headers,
        // 요청의 콘텐츠 타입을 JSON으로 설정
        "Content-Type": "application/json",
        // 요청 토큰 키를 헤더에 추가하여 액세스 토큰을 Bearer 토큰 형식으로 설정
        [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
    };

    return config; // 수정된 요청 설정을 반환
};

export default requestHandler; // requestHandler 함수를 기본 내보내기로 내보냄