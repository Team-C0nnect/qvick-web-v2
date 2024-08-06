// 이 인터페이스는 기본 응답 객체의 구조를 정의
import { Response } from "src/types/util/response.type"; // Response 인터페이스를 가져옴

// LoginResponse 인터페이스를 정의
export interface LoginResponse extends Response {
    // data: 로그인 요청에 대한 응답으로 반환되는 객체
    data: {
        accessToken: string;
        // accessToken: 사용자의 인증을 위한 액세스 토큰
        // 이 토큰은 사용자가 인증된 상태로 서버에 요청을 할 때 사용

        refreshToken: string;
        // refreshToken: 액세스 토큰을 갱신하기 위한 리프레시 토큰
        // 이 토큰은 액세스 토큰이 만료되었을 때 새 토큰을 발급받기 위해 사용
    };
}