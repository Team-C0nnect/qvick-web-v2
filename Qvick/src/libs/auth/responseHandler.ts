import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
} from "src/constants/tokens/token.constants"
import token from "src/libs/token/token"
import { qvickV1Axios } from "./CustomAxios";
import CONFIG from "src/config/config.json";
import { resolve } from "path";
import { rejects } from "assert";
import { access } from "fs";

//리프레쉬 작업중인지 아닌지를 구분하는 변수
let isRefreshing = false;
let refreshSubscribars: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
    refreshSubscribars.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
    refreshSubscribars.push(callback);
};

const errorResponseHandler = async (error: AxiosError) => {
    if (error.response) {
        const {
            config: originalRequest,
            response: {status},
        } = error;
        const usingAccessToken = token.getToken(ACCESS_TOKEN_KEY);
        const usingRefreshToken = token.getToken(REFRESH_TOKEN_KEY);

        if(
            usingAccessToken !== undefined &&
            usingRefreshToken !== undefined &&
            status == 401
        ) {
            if (!isRefreshing) {
                isRefreshing = true;

                try {
                    const data = await axios.post(`${CONFIG.serverUrl}/refresh`, {
                        refreshToken: usingRefreshToken,
                    }) 
                    const newAccessToken = data.data.data.access_token;
                    token.setToken(ACCESS_TOKEN_KEY, newAccessToken);
                    // 리프레쉬 작업을 마침
                    isRefreshing = false;
                    // 새로 받은 accessToken을 기반으로 이때까지 밀려있던 요청을 모두 처리 한다.
                    onTokenRefreshed(newAccessToken);
                } catch (error) {
                    // 리프레쉬 하다가 오류난거면 리프레쉬도 만료된 것이므로 다시 로그인하기
                    token.clearToken();
                    window.location.href = '/';
                }
            }
            // 어떤 요청이 리프레쉬 작업중이라면 여기로 와서 그 후에 요청된 다른 API Promise를 refreshSubscribers에 넣어준다
            return new Promise((resolve, rejects) => {
                addRefreshSubscriber((accessToken: string) => {
                    if (originalRequest) {
                        originalRequest.headers![
                            REFRESH_TOKEN_KEY
                        ] = `Bearer ${accessToken}`;
                        resolve(qvickV1Axios(originalRequest));
                    } else {
                        rejects("orginalRequest is undefined");
                    }
                });
            });
        }
    }
    return Promise.reject(error);
};

export default errorResponseHandler;
