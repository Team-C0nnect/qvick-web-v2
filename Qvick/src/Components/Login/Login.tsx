import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../../Assets/img/logo.png";
import * as s from "src/Components/Login/Style/Login.Style"
const User = {
  email: 'qvick@gmail.com',
  pw: 'qvick1234@+'
}

export default function Login() {
  const [email, setemail] = useState("");
  const [pw, setPw] = useState("");
  // const [keepLoggedIn, setKeepLoggedIn] = useState<boolean>(false); // 로그인 유지하기 상태
  const [keepLoggedIn, setKeepLoggedIn] = useState<boolean>(false); // 로그인 유지하기 상태
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const HandleEmail = (e) => { // 이메일 확인 추후 아이디로 변경예정
    setemail(e.target.value); // 이메일 지우기 기능
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;  //자바스크립트 공식문입니다(특수부호 감별)
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }

  const HandlePassWord = (e) => { // 비밀번호 확인
    setPw(e.target.value); // 비밀번호 지우기 가능
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  }

  const onclickConfirmButton = () => {
    if (email === User.email && pw === User.pw) {
      alert('로그인 성공');
      navigateToMain(); // 로그인 성공 시 메인 페이지로 이동
    } else {
      alert('로그인 실패');
    }
  }

  const navigate = useNavigate(); // 네이게이션 활성화

  const navigateToMain = () => { 
    navigate("/Main");
  }
  const handleKeepLoggedIn = () => { // 로그인 유지
    setKeepLoggedIn((prevValue) => !prevValue);
  };

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
          <s.LoginInputWrap>
            <s.Input
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={HandleEmail}
            />
          </s.LoginInputWrap>
          <s.PwInputWrap>
            <s.Input
              type="password"
              placeholder="Enter password"
              value={pw}
              onChange={HandlePassWord}
            />
          </s.PwInputWrap>
        </s.ContentWrap>
        <s.LoginButtonWrap>
          <s.LoginButton
            onClick={onclickConfirmButton}
            disabled={notAllow}
            style={{ fontSize: notAllow ? "initial" : "20px" }}
          >
            Login
          </s.LoginButton>
        </s.LoginButtonWrap>
        <s.CheckboxWrapper>
          <s.CheckboxBundle>
          <s.Checkbox
            type="checkbox"
            id="keepLoggedInCheckbox"
            checked={keepLoggedIn}
            onChange={handleKeepLoggedIn}
          />
          <s.CheckboxLabel htmlFor="keepLoggedInCheckbox">
            로그인 유지
          </s.CheckboxLabel>
          </s.CheckboxBundle>
        </s.CheckboxWrapper>
      </s.LoginPage>
    </s.AllPage>
  );
}
