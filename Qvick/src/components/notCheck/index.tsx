import React from "react"; // React 라이브러리를 가져옴
import Head from "src/components/head/index"; // 페이지 상단에 표시될 Head 컴포넌트를 가져옴
import SideBar from "src/components/sideBar/index"; // 사이드바 컴포넌트를 가져옴
import NotCheckList from "src/components/notCheck/notCheckList/index"; // 미출석자 목록 컴포넌트를 가져옴
import 'src/assets/scss/notCheck/style.scss'; // 스타일 시트를 가져옴

export default function NotCheck() {
    return (
        // 전체 페이지 레이아웃을 감싸는 div 요소
        <div className="notCheckWrap">
            {/* 페이지 상단에 헤더를 렌더링 */}
            <Head />
            {/* 사이드바를 렌더링 */}
            <SideBar />
            {/* 미출석자 목록을 렌더링 */}
            <NotCheckList />
        </div>
    );
}
