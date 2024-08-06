// User 인터페이스를 정의합니다.
export interface User {
    id: number;
    // id: 사용자를 고유하게 식별하는 숫자형 ID
    // 데이터베이스나 시스템 내에서 사용자 객체를 식별하는 데 사용

    name: string;
    // name: 사용자의 이름을 나타내는 문자열
    // 사용자에게 표시될 이름을 저장

    email: string;
    // email: 사용자의 이메일 주소를 나타내는 문자열
    // 사용자의 고유 이메일 주소를 저장하며, 주로 인증 및 통신에 사용

    approval: string;
    // approval: 사용자의 승인 상태를 나타내는 문자열
    // 예를 들어, 'pending', 'approved', 'rejected' 등의 상태 값을 가질 수 있음

    userRole: string;
    // userRole: 사용자의 역할을 나타내는 문자열
    // 예를 들어, 'admin', 'user', 'editor' 등의 역할을 정의하여 사용자의 권한을 구분

    checked: boolean;
    // checked: 사용자가 체크된 상태를 나타내는 불리언 값
    // 일반적으로 사용자가 특정 작업이나 확인을 완료했는지 여부를 나타내는 데 사용
}
