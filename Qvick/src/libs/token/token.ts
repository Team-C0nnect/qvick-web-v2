// 이 라이브러리는 쿠키를 설정하고 가져오는 기능을 제공
import cookie from "src/libs/cookie/cookie"; // 쿠키 라이브러리를 가져옴

// 토큰 키 상수를 가져옴
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/tokens/token.constants"; // 이 상수들은 액세스 토큰과 리프레시 토큰의 키를 정의

// 이 클래스는 쿠키를 사용하여 액세스 토큰과 리프레시 토큰을 관리하는 메서드를 제공
class Token {
    // getToken 메서드를 정의 이 메서드는 주어진 키에 해당하는 토큰을 쿠키에서 가져옴
    public getToken(key: string): string | undefined {     // 키가 존재하지 않으면 undefined를 반환합니다.
        return cookie.getCookie(key);
    }

    // setToken 메서드를 정의 이 메서드는 주어진 키와 토큰 값을 사용하여 쿠키에 토큰을 설정
    public setToken(key: string, token: string): void {
        cookie.setCookie(key, token);
    }

    // clearToken 메서드를 정의 이 메서드는 ACCESS_TOKEN_KEY와 REFRESH_TOKEN_KEY에 해당하는 쿠키를 제거
    public clearToken(): void {
        cookie.removeCookie(ACCESS_TOKEN_KEY);
        cookie.removeCookie(REFRESH_TOKEN_KEY);
    }
}

export default new Token(); // Token 클래스의 인스턴스를 생성하고 내보냄 이를 통해 다른 파일에서 Token 클래스를 바로 사용할 수 있음