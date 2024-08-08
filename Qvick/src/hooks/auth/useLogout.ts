import token from "src/libs/token/token"; // 토큰 관련 함수를 가져옴

// 로그아웃 기능을 제공하는 커스텀 훅
const useLogout = () => {
    // 로그아웃 함수
    const logOut = () => {
        window.location.href = "/"; // 메인 페이지로 이동
        token.clearToken(); // 저장된 토큰을 삭제
    }

    return { logOut }; // 로그아웃 함수를 반환
}

export default useLogout;
