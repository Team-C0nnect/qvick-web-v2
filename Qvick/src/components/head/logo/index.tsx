import React from "react"; // React 불러오기
import * as S from "src/components/head/logo/Logo.Style"; // 스타일 컴포넌트 불러오기
import appLogo from "src/assets/images/head/logo.svg"; // 로고 이미지 파일 불러오기

// Logo 컴포넌트 정의
export default function Logo() {
    return (
        <S.LogoWrap> {/* 스타일이 적용된 LogoWrap 컴포넌트 */}
            <S.Logo src={appLogo} alt="이미지" /> {/* 로고 이미지 표시 */}
        </S.LogoWrap>
    );
}
