import React, { useState } from "react";
import { showToast } from "src/libs/toast/swal";
import axios from "axios";
import CONFIG from "src/config/config.json";
import token from "src/libs/token/token";
import { LoginRespones } from "src/types/login/login.type";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/tokens/token.constants";
import { useNavigate } from "react-router-dom";


const Uselogin = () => {
    const navigate = useNavigate();
    const [clickName, setClickName] = useState<string>("");
    const [idValue, setIdValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");
    const [isShowPswd, setIsShowPswd] = useState(false);

    const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setIdValue(e.target.value);
    };

    const InputChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if(e.key === "Enter") {
            LoginButton();
        }
    };

    const LoginButton = async () => {
        if (idValue === "" || passwordValue === "") {
            showToast("error", "아이디와 비밀번호를 입력해주세요.");
        } else {
            try {
               await axios.post<LoginRespones>(`${CONFIG.serverUrl}auth/sign-in`,{
                email: idValue,
                password: passwordValue
               }).then((res) => {
                        token.setToken(ACCESS_TOKEN_KEY, res.data.accessToken);
                        token.setToken(REFRESH_TOKEN_KEY, res.data.refreshToken);
                        showToast("success", "로그인 성공");
                        navigate("/main");
                    });
            } catch (error) {
                console.log(error);
                
            }
        }
    };

    return{
        idValue,
        isShowPswd,
        passwordValue,
        clickName,
        setClickName,
        handleKeyDown,
        setIdValue,
        setIsShowPswd,
        InputChange,
        LoginButton,
        InputChangePw,
    }
}
export default Uselogin;