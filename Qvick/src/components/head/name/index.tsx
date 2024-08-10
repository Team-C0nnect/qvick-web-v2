import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate 훅 불러오기
import React from "react"; // React 불러오기
import * as S from "src/components/head/name/Name.Style"; // 스타일 컴포넌트 불러오기
import UseLogout from "src/hooks/auth/useLogout"; // 로그아웃 기능을 위한 훅 불러오기

// Name 컴포넌트 정의
export default function Name() {
    const navigate = useNavigate(); // 페이지 이동에 사용되는 navigate 함수 가져오기
    const { logOut } = UseLogout(); // 로그아웃 기능 가져오기

    return (
        <S.NameWrap> {/* 스타일이 적용된 NameWrap 컴포넌트 */}
            <S.Name>관리자님</S.Name> {/* 사용자 이름 표시 */}
            <S.logOut onClick={logOut}> {/* 로그아웃 버튼 클릭 시 logOut 함수 실행 */}
                로그아웃
            </S.logOut>
        </S.NameWrap>
    );
}
