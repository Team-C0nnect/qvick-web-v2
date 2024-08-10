import React from "react"; // React 라이브러리를 가져옴
import "src/assets/scss/member/style.scss"; // 멤버리스트 스타일 시트를 가져옴
import Head from "src/components/head/index"; // 페이지 상단에 표시될 Head 컴포넌트를 가져옴
import SideBar from "src/components/sideBar/index"; // 사이드바 컴포넌트를 가져옴
import MemberList from "src/components/member/memberList/index"; // 멤버리스트 컴포넌트를 가져옴

export default function Member() {
    return (
        // 전체 페이지 레이아웃을 감싸는 div 요소
        <div className="MemberWrap">
            {/* 페이지 상단에 헤더를 렌더링 */}
            <Head />
            {/* 사이드바를 렌더링 */}
            <SideBar />
            {/* 멤버 목록을 렌더링 */}
            <MemberList />
        </div>
    );
}
