import React from "react"; // React를 가져옴
import Head from "src/components/head/index"; // Head 컴포넌트를 가져옴
import SideBar from "src/components/sideBar/index"; // SideBar 컴포넌트를 가져옴
import CheckList from "src/components/check/checkList/index"; // CheckList 컴포넌트를 가져옴
import 'src/assets/scss/check/style.scss'; // 출석자리스트 페이지 스타일을 가져옴

// Check 컴포넌트를 정의
export default function Check() {
    return (
        <div className="CheckWrap">
            <Head /> {/* 페이지 상단에 헤더 컴포넌트를 표시 */}
            <SideBar /> {/* 왼쪽에 사이드바 컴포넌트를 표시 */}
            <CheckList /> {/* 메인 콘텐츠로 체크리스트 컴포넌트를 표시 */}
        </div>
    );
};
