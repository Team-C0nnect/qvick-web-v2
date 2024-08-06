// RefreshResponse 인터페이스를 정의합니다.
export interface RefreshResponse extends Response {
    data: string;
    // data: 서버에서 제공하는 추가 데이터입니다.
    // 이 데이터는 일반적으로 새로고침 요청과 관련된 정보를 포함합니다.

    accessToken: string;
    // accessToken: 새롭게 발급된 액세스 토큰입니다.
    // 클라이언트는 이 토큰을 사용하여 인증된 요청을 할 수 있습니다.
}
