// Response 인터페이스를 정의합니다.
export interface Response {
    status: string;
    // status: 응답 상태를 나타내는 문자열입니다.
    // 예를 들어, "success", "error" 등의 값을 가짐

    message: string;
    // message: 응답에 대한 추가 설명이나 메시지를 제공하는 문자열
}
