// 이 인터페이스는 기본 응답 객체의 구조를 정의
import { Response } from "src/types/util/response.type"; // Response 인터페이스를 가져옴

// ListType 인터페이스를 정의합니다.
export interface ListType extends Response {
    // data: 리스트 항목의 정보를 담고 있는 객체
    data: {
        name: string;
        // name: 리스트 항목의 이름을 나타내는 문자열
        // 예를 들어, 항목의 이름이나 관련된 사람의 이름을 저장

        stdId: string;
        // stdId: 리스트 항목을 고유하게 식별하는 문자열형 학생 ID
        // 예를 들어, '123456'과 같은 학생 ID를 저장

        room: string;
        // room: 리스트 항목에 관련된 방을 나타내는 문자열
        // 예를 들어, 'Room 101'과 같은 방 번호를 저장

        checkedDate: string;
        // checkedDate: 리스트 항목의 체크된 날짜를 나타내는 문자열
        // 날짜 형식의 문자열로, 예를 들어 '2024-08-06'과 같은 형식을 가짐

        checked: boolean;
        // checked: 리스트 항목이 체크되었는지 여부를 나타내는 불리언 값
        // 체크된 경우 `true`, 체크되지 않은 경우 `false`로 설정
    };
}
