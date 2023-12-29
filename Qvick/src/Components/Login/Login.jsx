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
                        type="text"
                        className="Input"
                        placeholder="test@example.com"
                        value={email}
                        onChange={HandleEmail}
                        />
                </div>
                <div className="ErrorMessageWrap">
                    {
                        !emailValid && email.length > 0 && ( // 이메일칸에 적힌 글자수가 0 보다 커지면 출력(올바른 이메일이 확인되면 삭제)
                            <div>올바른 이메일을 입력해주세요.</div>
                        )
                    }
                </div>
                <div className="InputTitle">비밀번호</div>
                <div className="InputWrap">
                    <input 
                        type="password"
                        className="Input"
                        placeholder="영문, 숫자, 특수문자 포함 8자이상을 입력해주세요."
                        value={pw}
                        onChange={HandlePassWord}
                        />
                </div>
                <div className="ErrorMessageWrap">
                    {
                        !pwValid && pw.length > 0 && (
                            <div>영문, 숫자, 특수문자 포함 8자이상 입력해주세요.</div> // 비밀번호 박스에 적힌 글자수가 0보다 크면 활성화(원하는 조건을 만족하면 삭제)
                        )
                    }
                </div>
            </div>
            <div className="Login">
                <button onClick={onclickConfirmButton} disabled={notAllow} className="LoginButton">
                    로그인
                </button>
            </div>
        </div>
    )
}