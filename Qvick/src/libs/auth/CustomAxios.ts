import axios, { AxiosRequestConfig } from "axios"; // axios 라이브러리와 AxiosRequestConfig 타입을 가져옴

import CONFIG from "src/config/config.json"; // 서버 설정을 가져오는 CONFIG 파일을 가져옴

import {
    ACCESS_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
} from "src/constants/tokens/token.constants"; // 토큰 키 상수를 가져옴

import token from "src/libs/token/token"; // Token 클래스를 가져옴

// 요청 및 응답 처리기를 가져옴
import RequestHandler from "src/libs/auth/requestHandler";
import ResponseHandler from "src/libs/auth/responseHandler";

import { requestHandler } from '../axios/requestHandler'; // requestHandler를 가져옴

// Axios 인스턴스를 생성하는 함수
const createAxiosInstance = (config: AxiosRequestConfig) => {
    // 쿠키에서 액세스 토큰을 가져옴
    const ACCESS_TOKEN = token.getToken(ACCESS_TOKEN_KEY);
    // 기본 설정을 정의
    const baseConfig: AxiosRequestConfig = {
        headers: {
            // 요청 헤더에 Authorization을 추가하여 Bearer 토큰 형식으로 액세스 토큰을 설정
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
    };
    // 기본 설정과 인자로 받은 설정을 병합하여 새로운 Axios 인스턴스를 생성
    return axios.create({
        ...baseConfig,
        ...config
    });
};

// 서버 URL을 기반으로 Axios 인스턴스를 생성
export const qvickV1Axios = createAxiosInstance({
    baseURL: CONFIG.serverUrl,
    headers: {
        // 요청 토큰 키를 헤더에 추가하여 Bearer 토큰 형식으로 액세스 토큰을 설정
        [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`
    },
});

// 새로운 액세스 토큰으로 Axios 인스턴스의 기본 헤더를 업데이트하는 함수
export const qvickV1AxiosSetAccessToken = (newToken: string) => {
    // 새로운 액세스 토큰을 헤더에 설정
    qvickV1Axios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newToken}`;
};

// 요청 인터셉터를 설정 요청이 전송되기 전에 requestHandler를 사용하여 요청을 처리합니다.
qvickV1Axios.interceptors.request.use(requestHandler as any, (response) => response);

// 응답 인터셉터를 설정 응답을 받으면 ResponseHandler를 사용하여 응답을 처리
qvickV1Axios.interceptors.response.use((response) => response, ResponseHandler);