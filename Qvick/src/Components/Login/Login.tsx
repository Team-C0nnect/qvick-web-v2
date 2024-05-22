import React, { useEffect, useState } from "react";
import Title from "src/Assets/images/Head/logo.png";
import * as s from "src/Components/Login/Style";
import Uselogin from "src/hooks/auth/UseLogin";

export default function Login() {
  const {...login}=Uselogin();
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);


  useEffect(() => { // 버튼활성화 기능 필요 사용시 변경가능
    if (emailValid && pwValid) {
      setNotAllow(false);
    } else {
      setNotAllow(false);
    }
  }, [emailValid, pwValid]);

  return (
    <s.AllPage>
      <s.LoginPage>
        <s.LoginTitle>
          <s.TitleImg src={Title} alt = "이미지"></s.TitleImg>
        </s.LoginTitle>
        <s.ContentWrap>
          
            <s.Input
              type="text"
              placeholder="이메일을 입력해주세요."
              value={login.idValue}
              onChange={login.InputChange}
            />

            <s.Input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={login.passwordValue}
              onChange={login.InputChangePw}
            />
        </s.ContentWrap>
        <s.LoginButtonWrap>
          <s.LoginButton
            onClick={login.LoginButton}
            disabled={notAllow}
            style={{ fontSize: notAllow ? "initial" : "20px" }}
          >
            로그인
          </s.LoginButton>
        </s.LoginButtonWrap>
        
        
      </s.LoginPage>
    </s.AllPage>
  );
}