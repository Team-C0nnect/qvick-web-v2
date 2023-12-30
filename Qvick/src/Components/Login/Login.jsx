import React, { useEffect, useState } from "react";
import "./Login.css";

const User = {  // 더미데이터 입니다(서버연결시 사라질 코드입니다)
    email: 'qvick@gmail.com',
    pw: 'qvick1234@+'
}

export default function Login() {
    const [email, setemail] = useState("");
    const [pw, setPw] = useState("");

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const HandleEmail = (e) => {
        setemail(e.target.value);
        const regex =
            /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i; // 이 코드는 자바스크립트 정규표현식 입니다
            if(regex.test(email)) {
                setEmailValid(true);
            }
            else {
                setEmailValid(false);
            }
    }

    const HandlePassWord = (e) => {
        setPw(e.target.value);
        const regex =
        /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(pw)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    const onclickConfirmButton = () => {
        if(email == User.email && pw == User.pw) {
            alert('로그인 성공');
        }
        else {
            alert('로그인 실패');
        }
    }

    useEffect(() => {
        if(emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[emailValid,pwValid]) // 이 두개의 설정 값의 변화가 일어날때 마다 버튼활성화 여부 체크

    return (
        <div className="AllPage">
            <div className="LoginPage">
                <div className="LoginTitle">
                    Qvick
                </div>
                <div className="ContentWrap">
                    <div className="LoginInputWrap">
                        <input 
                            type="text"
                            className="Input"
                            placeholder="이메일을 입력해주세요."
                            value={email}
                            onChange={HandleEmail}
                            />
                    </div>
                    <div className="PwInputWrap">
                        <input 
                            type="password"
                            className="Input"
                            placeholder="영문, 숫자, 특수문자 포함 비밀번호를 입력해주세요."
                            value={pw}
                            onChange={HandlePassWord}
                            />
                    </div>
                </div>
                <div className="Login">
                    <button onClick={onclickConfirmButton} disabled={notAllow} className="LoginButton">
                        로그인
                    </button>
                </div>
            </div>
        </div>
        
    )
}