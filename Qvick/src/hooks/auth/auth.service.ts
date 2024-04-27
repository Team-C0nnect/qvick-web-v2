import axios from "axios";
import api_URL from "src/config/authsign.json";

const auth_URL = api_URL;
class AuthService {
    // 로컬스토리지에 유저를 추가합니다.
    async login(name : string, email : string, password : string, stdId : string, room : string) {
        const response = await axios
            .post(api_URL + "sign up", {
                name,
                email,
                password,
                stdId,
                room,
            });
        // respone 응답에 accessToken이 존재하면
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    }
    // 로컬스토리지에서 유저삭제
    logout() {
        localStorage.removeItem("user");
    }
    // API서버에 signup POST
    register(name : string, email : string, password : string, stdId : string, room : string) {
        return axios.post(api_URL + "sign up", {
            name,
            email,
            password,
            stdId,
            room
        });
    }
    //로컬스토리지에 저장된 유저 확인해서 객체로 불러옴
    getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);
        return null;
    }
}
export default new AuthService();