import * as S from "src/components/head/Head.Style"; // 스타일드 컴포넌트 가져오기
import HeadLogo from "src/components/head/logo/index"; // 헤더 로고 컴포넌트 가져오기
import Situation from "src/components/head/situation/index"; // 상태 컴포넌트 가져오기
import HeadName from "src/components/head/name/index"; // 헤더 이름 컴포넌트 가져오기
import React from "react"; // React 라이브러리 가져오기

// Head 컴포넌트 정의
export default function Head() {
    return (
        // 스타일드 컴포넌트로 감싸진 헤더
        <S.Head>
            <HeadLogo /> {/* 로고 컴포넌트 */}
            <Situation /> {/* 상태 컴포넌트 */}
            <HeadName /> {/* 이름 컴포넌트 */}
        </S.Head>
    )
}
