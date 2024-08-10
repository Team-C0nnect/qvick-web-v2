import React, { useEffect, useState } from "react"; // React와 관련된 훅들을 가져옴
import Title from "src/assets/images/head/logo.png"; // 로고 이미지 파일을 가져옴
import * as s from "src/components/login/Style"; // 스타일 컴포넌트를 가져옴
import UseLogin from "src/hooks/auth/useLogin"; // 로그인 관련 로직을 담은 커스텀 훅을 가져옴

export default function Login() {
  // UseLogin 훅에서 필요한 값과 함수들을 가져옴
  const { idValue, passwordValue, InputChange, InputChangePw, LoginButton } = UseLogin();

  // 이메일 유효성, 비밀번호 유효성, 로그인 버튼 활성화 여부를 관리하는 상태 변수
  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  // idValue와 passwordValue가 변경될 때마다 유효성 검사 및 버튼 활성화 여부를 업데이트
  useEffect(() => {
    if (idValue !== "" && passwordValue !== "") {
      setEmailValid(true); // 이메일이 입력되었음을 나타내는 상태를 true로 설정
      setPwValid(true); // 비밀번호가 입력되었음을 나타내는 상태를 true로 설정
    } else {
      setEmailValid(false); // 이메일이 입력되지 않으면 false로 설정
      setPwValid(false); // 비밀번호가 입력되지 않으면 false로 설정
    }
    setNotAllow(!(emailValid && pwValid)); // 이메일과 비밀번호가 모두 유효한 경우에만 버튼을 활성화
  }, [idValue, passwordValue, emailValid, pwValid]);

  // 렌더링되는 UI 구성
  return (
      <s.AllPage>
        <s.LoginPage>
          <s.LoginTitle>
            <s.TitleImg src={Title} alt="이미지"></s.TitleImg> {/* 로고 이미지 */}
          </s.LoginTitle>
          <s.ContentWrap>
            <s.Input
                type="text"
                placeholder="이메일을 입력해주세요."
                value={idValue}
                onChange={InputChange} // 이메일 입력 시 InputChange 함수를 호출
            />
            <s.Input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                value={passwordValue}
                onChange={InputChangePw} // 비밀번호 입력 시 InputChangePw 함수를 호출
            />
          </s.ContentWrap>
          <s.LoginButtonWrap>
            <s.LoginButton
                onClick={LoginButton} // 버튼 클릭 시 LoginButton 함수를 호출
                disabled={notAllow} // notAllow 상태에 따라 버튼 활성화 여부 결정
                style={{ fontSize: notAllow ? "initial" : "20px" }} // 버튼 활성화 시 글자 크기 조정
            >
              로그인
            </s.LoginButton>
          </s.LoginButtonWrap>
        </s.LoginPage>
      </s.AllPage>
  );
}
