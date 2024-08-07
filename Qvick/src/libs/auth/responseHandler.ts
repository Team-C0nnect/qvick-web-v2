// Axios 라이브러리와 타입을 가져옴
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"; // AxiosError, AxiosRequestConfig, AxiosResponse 타입을 정의

// 토큰 키 상수를 가져옴 이 상수들은 액세스 토큰, 리프레시 토큰, 요청 토큰의 키를 정의
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
} from "src/constants/tokens/token.constants";

import token from "src/libs/token/token"; // Token 클래스를 가져옴 이 클래스는 쿠키를 사용하여 토큰을 관리하는 기능을 제공

import { qvickV1Axios } from "./CustomAxios"; // 커스텀 Axios 인스턴스를 가져옴

import CONFIG from "src/config/config.json"; // 환경설정 파일을 가져옴

let isRefreshing = false; // 리프레시 작업 중인지 아닌지를 구분하는 변수

let refreshSubscribars: ((accessToken: string) => void)[] = []; // 리프레시 작업이 완료된 후 실행할 콜백들을 저장하는 배열

// 새로운 액세스 토큰을 받은 후 콜백들을 실행하는 함수
const onTokenRefreshed = (accessToken: string) => {
    refreshSubscribars.map((callback) => callback(accessToken));
};

// 리프레시 작업이 완료된 후 실행할 콜백을 추가하는 함수
const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
    refreshSubscribars.push(callback);
};

// Axios 오류 응답을 처리하는 함수
const errorResponseHandler = async (error: AxiosError) => {
    if (error.response) {
        const {
            config: originalRequest,
            response: { status },
        } = error;

        // 액세스 토큰과 리프레시 토큰을 쿠키에서 가져옴
        const usingAccessToken = token.getToken(ACCESS_TOKEN_KEY);
        const usingRefreshToken = token.getToken(REFRESH_TOKEN_KEY);

        // 액세스 토큰과 리프레시 토큰이 존재하고 상태 코드가 401 (Unauthorized)인 경우
        if (
            usingAccessToken !== undefined &&
            usingRefreshToken !== undefined &&
            status == 401
        ) {
            if (!isRefreshing) {
                // 리프레시 작업이 진행 중이 아니면 리프레시 작업을 시작
                isRefreshing = true;

                try {
                    // 서버에 리프레시 토큰을 보내서 새로운 액세스 토큰을 요청
                    const data = await axios.post(`${CONFIG.serverUrl}/refresh`, {
                        refreshToken: usingRefreshToken,
                    });

                    // 새로운 액세스 토큰을 받아서 저장
                    const newAccessToken = data.data.data.access_token;
                    token.setToken(ACCESS_TOKEN_KEY, newAccessToken);

                    // 리프레시 작업을 완료합니다.
                    isRefreshing = false;

                    // 새로 받은 액세스 토큰을 기반으로 밀려있던 요청을 모두 처리
                    onTokenRefreshed(newAccessToken);
                } catch (error) {
                    // 리프레시 작업 중 오류가 발생하면 토큰을 지우고 로그인 페이지로 이동
                    token.clearToken();
                    window.location.href = '/';
                }
            }

            // 리프레시 작업 중인 경우, 밀려있던 요청을 처리하기 위해 Promise를 반환
            return new Promise((resolve, rejects) => {
                addRefreshSubscriber((accessToken: string) => {
                    if (originalRequest) {
                        originalRequest.headers![
                            REFRESH_TOKEN_KEY
                            ] = `Bearer ${accessToken}`;
                        resolve(qvickV1Axios(originalRequest));
                    } else {
                        rejects("originalRequest is undefined");
                    }
                });
            });
        }
    }
    return Promise.reject(error); // 오류를 그대로 반환
};

export default errorResponseHandler; // 오류 응답 처리기를 기본 내보내기로 내보냅니다.