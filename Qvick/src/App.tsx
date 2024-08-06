// React 및 React Router 관련 모듈을 가져옴
import React from "react"; // React 라이브러리로, 컴포넌트 및 JSX 문법을 사용
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // React Router 라이브러리에서 필요한 컴포넌트를 가져옴
// - BrowserRouter: 브라우저의 URL을 관리하며, 싱글 페이지 애플리케이션에서 라우팅을 담당
// - Routes: 각 Route를 그룹화하고 매칭되는 첫 번째 Route를 렌더링
// - Route: 경로와 그 경로에 해당하는 컴포넌트를 매핑하여 정의

// 애플리케이션의 각 컴포넌트를 가져옵니다.
import Login from "src/components/login/index"; // 로그인 화면 컴포넌트
import Head from "src/components/head/index"; // 헤더 컴포넌트
import Side from "src/components/sideBar/index"; // 사이드바 컴포넌트
import HeadLogo from "src/components/head/logo/index"; // 헤더 로고 컴포넌트
import HeadName from "src/components/head/name/index"; // 헤더 이름 컴포넌트
import Member from "src/components/member/index"; // 멤버 메인 컴포넌트
import Check from "src/components/check/index"; // 체크된 항목을 보여주는 컴포넌트
import NotCheck from "src/components/notCheck/index"; // 체크되지 않은 항목을 보여주는 컴포넌트
import MemberList from "src/components/member/memberList/index"; // 멤버 리스트 컴포넌트
import NotCheckList from 'src/components/notCheck/notCheckList/index'; // 체크되지 않은 리스트 컴포넌트
import CheckList from "src/components/check/checkList/index"; // 체크된 리스트 컴포넌트

// 글로벌 스타일을 가져옴
import "./styles/global.css"

// 애플리케이션의 메인 컴포넌트 정의
function App() {
  return (
      // BrowserRouter로 전체 애플리케이션을 감싸서 라우팅 기능을 제공
      <BrowserRouter>
        {/* Routes 컴포넌트로 라우트를 정의 */}
        <Routes>
          {/* 각 경로(path)에 대응하는 컴포넌트를 설정 */}
          <Route path="/" element={<Login />} />  {/* 기본 경로는 로그인 화면 */}
          <Route path="/Head" element={<Head />} /> {/* /Head 경로는 헤더 컴포넌트를 렌더링 */}
          <Route path="/Side" element={<Side />} /> {/* /Side 경로는 사이드바 컴포넌트를 렌더링 */}
          <Route path="/HeadLogo" element={<HeadLogo />} /> {/* /HeadLogo 경로는 헤더 로고 컴포넌트를 렌더링 */}
          <Route path="/HeadName" element={<HeadName />} /> {/* /HeadName 경로는 헤더 이름 컴포넌트를 렌더링 */}
          <Route path="/Main" element={<Member />} /> {/* /Main 경로는 멤버 메인화면을 렌더링 */}
          <Route path="/Check" element={<Check />} /> {/* /Check 경로는 출석자명단 페이지을 렌더링 */}
          <Route path="/NotCheck" element={<NotCheck />} /> {/* /NotCheck 미출석자명단 페이지을 렌더링 */}
          <Route path='MemberList' element={<MemberList />} /> {/* /MemberList 경로는 구성원명단 리스트를 렌더링 */}
          <Route path='NotCheckList' element={<NotCheckList />} /> {/* /NotCheckList 경로는 미출석자명단 리스트를 렌더링 */}
          <Route path='CheckList' element={<CheckList />} /> {/* /CheckList 경로는 출석자명단 리스트를 렌더링 */}
        </Routes>
      </BrowserRouter>
  );
}

export default App; // App 컴포넌트를 기본 내보내기로 설정
