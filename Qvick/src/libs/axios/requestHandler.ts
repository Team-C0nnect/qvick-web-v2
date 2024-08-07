// 이 타입은 Axios 요청 설정의 타입을 정의
import { AxiosRequestConfig } from "axios"; // AxiosRequestConfig 타입을 가져옴

// 토큰 키 상수를 가져옴 이 상수들은 액세스 토큰, 리프레시 토큰, 요청 토큰의 키를 정의
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
} from "src/constants/tokens/token.constants";

// Token 클래스를 가져옴
import Token from "../token/token"; // 이 클래스는 쿠키를 사용하여 토큰을 관리하는 기능을 제공

// requestHandler 함수를 정의 이 함수는 Axios 요청 설정을 처리하며, 토큰을 헤더에 추가하는 역할
export const requestHandler = (config: AxiosRequestConfig) => {
    // 액세스 토큰과 리프레시 토큰을 쿠키에서 가져옴
    const access_token = Token.getToken(ACCESS_TOKEN_KEY);
    const refresh_token = Token.getToken(REFRESH_TOKEN_KEY);

    // 액세스 토큰이나 리프레시 토큰이 존재하면, 요청 헤더에 토큰을 추가
    if (access_token || refresh_token) {
        config.headers = {
            "Content-Type": "application/json", // 요청의 콘텐츠 타입을 JSON으로 설정
            [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`, // 요청 토큰 키를 헤더에 추가하고, 액세스 토큰을 Bearer 토큰 형식으로 설정
        };
    }
    return config;     // 수정된 요청 설정을 반환합니다.
};
