import { AxiosRequestConfig } from "axios";
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
    REQUEST_TOKEN_KEY,
} from "src/constants/tokens/token.constants"

import Token from "../token/token";

export const requestHandler = (config: AxiosRequestConfig) => {
    const access_token = Token.getToken(ACCESS_TOKEN_KEY);
    const refresh_token = Token.getToken(REFRESH_TOKEN_KEY);

    if (access_token || refresh_token) {
        config.headers = {
            "Content-Type": "application/json",
            [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
        };
    }
    return config;
}