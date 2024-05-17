import axios from "axios";
import authHeader from "src/hooks/auth/auth-header";
import api_URL from "src/config/authlogin.json";

class UserService {
    getPublicContent() {
        return axios.get(api_URL + 'all');
    }
    // Autorizzation 여부와 JWT 반환해 headers에 쓰고, 해당하는 유저 data를 GET
    getUserBoard() {
        return axios.get(api_URL + 'user', {
            headers: authHeader()
        });
    }
    getModeratorBoard() {
        return axios.get(api_URL + 'mod', {
            headers: authHeader()
        });
    }
    getAdminBoard() {
        return axios.get(api_URL + 'admin', {
            headers: authHeader()
        })
    }
}