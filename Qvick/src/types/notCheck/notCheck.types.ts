// 이 인터페이스는 기본 응답 객체의 구조를 정의
import { Response } from "src/types/util/response.type"; // Response 인터페이스를 가져옴

// notCheckListItem 인터페이스를 정의
export interface notCheckListItem {
    stdId: number;
    // stdId: 항목을 고유하게 식별하는 숫자형 ID
    // 예를 들어, 학생의 ID나 항목의 고유 식별자로 사용

    name: string;
    // name: 항목의 이름을 나타내는 문자열
    // 예를 들어, 학생의 이름이나 항목의 명칭을 저장

    room: string;
    // room: 항목에 관련된 방을 나타내는 문자열
    // 예를 들어, 학생이 속한 방의 번호를 저장하거나 항목의 위치를 나타낼 수 있음

    checked: boolean;
    // checked: 항목이 체크되었는지 여부를 나타내는 불리언 값
    // 체크되지 않은 항목을 나타내며, true 또는 false로 설정
}

// notCheckListResponse 인터페이스를 정의합니다.
export interface notCheckListResponse extends Response {
    data: notCheckListItem[];
    // data: 체크되지 않은 항목들의 배열
    // notCheckListItem 객체들을 포함하며, 항목 목록을 전달
}
