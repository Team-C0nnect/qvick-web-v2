import axios, { AxiosRequestConfig } from "axios";
import CONFIG from "src/config/config.json";
import {
    ACCESS_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
} from "src/constants/tokens/token.constants";
import token from "src/libs/token/token";
import RequestHandler from "src/libs/auth/requestHandler";
import ResponseHandler from "src/libs/auth/responseHandler";
import { requestHandler } from '../axios/requestHandler';

const createAxiosInstance = (config: AxiosRequestConfig) => {
    const ACCESS_TOKEN = token.getToken(ACCESS_TOKEN_KEY);
    const baseConfig: AxiosRequestConfig = {
        headers: { 
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      };
      return axios.create({
        ...baseConfig,
        ...config
      });
};

export const qvickV1Axios = createAxiosInstance({
    baseURL: CONFIG.serverUrl,
    headers: {
        [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`
    },
});

export const qvickV1AxiosSetAccessToken = (newToken: string) => {
    qvickV1Axios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newToken}`;
};

qvickV1Axios.interceptors.request.use(requestHandler as any, (response) => response);
qvickV1Axios.interceptors.response.use((response) => response, ResponseHandler);