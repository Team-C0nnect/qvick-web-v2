import React, { useState } from "react";
import "./Login.css";
export default function Login() {
    const [email, Setemail] = useState("");
    const [pw, Setpw] = useState("");
    const HandleEmail = (e) => {
        Setemail(e.target.value);
        const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i; // 이 코드는 자바스크립트 정규표현식 입니다
    }
    return (
        <div className="LoginPage">
            <div className="LoginTitle">
                이메일과 비밀번호를 
                <br/>
                입력해주세요
            </div>
            <div className="ContentWrap">
                <div className="InputTitle">이메일 주소</div>
                <div className="InputWrap">
                    <input 
                        className="Input"
                        placeholder="test@example.com"
                        value={email}
                        onChange={HandleEmail}
                        />
                </div>
                <div className="ErrorMessage">
                    올바른 이메일을 입력해주세요.
                </div>
                <div className="InputTitle">비밀번호</div>
                <div className="InputWrap">
                    <input 
                        className="Input"
                        placeholder="영문, 숫자, 특수문자 포함 8자이상을 입력해주세요."
                        value={pw}
                        />
                </div>
                <div className="ErrorMessage">
                    영문, 숫자, 특수문자 포함 8자이상 입력해주세요.
                </div>
            </div>
            <div className="Login">
                <button disabled={true} className="LoginButton">로그인</button>
            </div>
        </div>
    )
}