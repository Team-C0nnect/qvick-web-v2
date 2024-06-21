import React, { useEffect, useState } from "react";
import Title from "src/assets/images/head/logo.png";
import * as s from "src/components/login/Style";
import UseLogin from "src/hooks/auth/useLogin";

export default function Login() {
  const { idValue, passwordValue, InputChange, InputChangePw, LoginButton } = UseLogin();
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (idValue !== "" && passwordValue !== "") {
      setEmailValid(true);
      setPwValid(true);
    } else {
      setEmailValid(false);
      setPwValid(false);
    }
    setNotAllow(!(emailValid && pwValid));
  }, [idValue, passwordValue, emailValid, pwValid]);

  return (
    <s.AllPage>
      <s.LoginPage>
        <s.LoginTitle>
          <s.TitleImg src={Title} alt="이미지"></s.TitleImg>
        </s.LoginTitle>
        <s.ContentWrap>
          <s.Input
            type="text"
            placeholder="이메일을 입력해주세요."
            value={idValue}
            onChange={InputChange}
          />
          <s.Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            value={passwordValue}
            onChange={InputChangePw}
          />
        </s.ContentWrap>
        <s.LoginButtonWrap>
          <s.LoginButton
            onClick={LoginButton}
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
