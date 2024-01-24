import React, { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Title from "../../Assets/img/logo.png";

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
  const HandleEmail = (e) => {
    setemail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;  //자바스크립트 공식문입니다(특수부호 감별)
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
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
    if (email === User.email && pw === User.pw) {
      alert('로그인 성공');
      navigateToMain(); // 로그인 성공 시 메인 페이지로 이동
    } else {
      alert('로그인 실패');
    }
  }

  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/Main");
  }
  const handleKeepLoggedIn = () => {
    setKeepLoggedIn((prevValue) => !prevValue);
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
    } else {
      setNotAllow(false);
    }
  }, [emailValid, pwValid]);
  return (
    <div className="AllPage">
      <div className="LoginPage">
        <div className="LoginTitle">
          <img className="TitleImg" src={Title} alt = "이미지"></img>
        </div>
        <div className="ContentWrap">
          <div className="LoginInputWrap">
            <input
              type="text"
              className="Input"
              placeholder="Enter email"
              value={email}
              onChange={HandleEmail}
            />
          </div>
          <div className="PwInputWrap">
            <input
              type="password"
              className="Input"
              placeholder="Enter password"
              value={pw}
              onChange={HandlePassWord}
            />
          </div>
        </div>
        <div className="Login">
          <button
            onClick={onclickConfirmButton}
            disabled={notAllow}
            className="LoginButton"
            style={{ fontSize: notAllow ? "initial" : "20px" }}
          >
            Login
          </button>
        </div>
        <div className="CheckboxWrapper">
          <div className="CheckboxBundle">
          <input
            className="Checkbox"
            type="checkbox"
            id="keepLoggedInCheckbox"
            checked={keepLoggedIn}
            onChange={handleKeepLoggedIn}
          />
          <label className="CheckboxLabel" htmlFor="keepLoggedInCheckbox">
            로그인 유지
          </label>
          </div>
        </div>
      </div>
    </div>
  );
}
