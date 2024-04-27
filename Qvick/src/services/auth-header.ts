export default function authHeader() {
    const userStr = localStorage.getItem("user");
    let user = null;
    // 로컬스트리지에 유저가 저장되어 있는지 검사
    if (userStr) 
        user = JSON.parse(userStr);
    //이미 로그인 한 경우
    if (user && user.accessToken) {
        return {Authorization: 'Bearer' + user.accessToken}; // HTTP Authorization Header를 반환
    } else {
        return {Authorization: ''} // 빈 오브젝트 반환 
    }
}