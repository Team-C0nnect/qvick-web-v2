// 이 라이브러리는 쿠키를 설정, 가져오기, 삭제하는 기능을 제공
import cookie from "js-cookie"; // js-cookie 라이브러리를 가져옴

// Cookie 클래스를 정의 이 클래스는 쿠키를 관리하는 여러 메서드를 제공
class Cookie {
    // getCookie 메서드를 정의 이 메서드는 주어진 키에 해당하는 쿠키 값을 반환
    public getCookie(key: string): string | undefined { // 키가 존재하지 않으면 undefined를 반환
        return cookie.get(key);
    }

    // setCookie 메서드를 정의 이 메서드는 주어진 키와 값을 사용하여 쿠키를 설정
    public setCookie(key: string, value: string): void {
        cookie.set(key, value);
    }

    // removeCookie 메서드를 정의 이 메서드는 주어진 키에 해당하는 쿠키를 삭제
    public removeCookie(key: string): void {
        cookie.remove(key);
    }
}

export default new Cookie(); // Cookie 클래스의 인스턴스를 생성하고 내보냄 이를 통해 다른 파일에서 Cookie 클래스를 바로 사용할 수 있음