// 이 인터페이스는 기본 응답 객체의 구조를 정의
import { Response } from "src/types/util/response.type"; // Response 인터페이스를 가져옴

// MemberType 인터페이스를 정의
export interface MemberType extends Response {
    // data: 멤버의 정보를 담고 있는 객체
    data: {
        name: string;
        // name: 멤버의 이름을 나타내는 문자열
        // 예를 들어, '김건우'와 같은 멤버의 전체 이름을 저장

        stdId: string;
        // stdId: 멤버를 고유하게 식별하는 문자열형 학생 ID
        // 예를 들어, '123456'과 같은 학생 ID를 저장

        room: string;
        // room: 멤버가 속한 방을 나타내는 문자열
        // 예를 들어, 'Room 101'과 같은 방의 번호를 저장

        email: string;
        // email: 멤버의 이메일 주소를 나타내는 문자열
        // 예를 들어, 'john.doe@example.com'과 같은 이메일 주소를 저장
    }
}
