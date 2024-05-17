import cookie from "src/libs/cookie/cookie";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/tokens/token.constants";

class Token {
    public getToken(key: string): string | undefined {
        return cookie.getCookie(key);
    }

    public setToken(key: string, token: string): void{
        cookie.setCookie(key, token);
    }

    public clearToken() {
        cookie.removeCookie(ACCESS_TOKEN_KEY);
        cookie.removeCookie(REFRESH_TOKEN_KEY);
    }
}

export default new Token();